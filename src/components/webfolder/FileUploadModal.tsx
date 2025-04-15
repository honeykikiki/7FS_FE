import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "@components/shared/Button";
import Dimmed from "@components/shared/Dimmed";
import Flex from "@components/shared/Flex";
import InputSelect from "@components/shared/inputSelect";
import Spacing from "@components/shared/Spacing";
import MyText from "@components/shared/Text";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import { spacing } from "@styles/spacingPalette";
import { useRecoilValue } from "recoil";
import { useAuthContext } from "src/context/AuthContext";
import { WebFolder } from "src/models/webFolder";
import { folderListState, selectDataRoomState } from "src/store/atom/folder";
import addDelimiter from "src/utils/addDelimiter";
import useFolderList from "./hooks/useFolderList";

interface FileInfo {
  id: number;
  file: File;
  status: "ready" | "success" | "fail";
}

interface FileUploadModalProps {
  onClose: () => void;
  onUpload: (files: File[], folder: WebFolder) => void;
}

const FileUploadModal = ({ onClose, onUpload }: FileUploadModalProps) => {
  const upperFolderNo = useRecoilValue(folderListState);
  const selectDataRoom = useRecoilValue(selectDataRoomState);
  const { emp } = useAuthContext();
  const { data } = useFolderList(selectDataRoom, emp?.deptCode ?? "");
  const inputRef = useRef<HTMLInputElement>(null);
  // 초기에는 내가 보고 있는 폴더명 추가
  const [selectedFolder, setSelectedFolder] = useState<WebFolder>();

  useEffect(() => {
    setSelectedFolder(data?.folderList.filter((item) => item.folderNo === upperFolderNo[upperFolderNo.length - 1])[0]);
  }, [data?.folderList, upperFolderNo]);

  const [files, setFiles] = useState<FileInfo[]>([]);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const uploadFile = e.target.files;
      if (files.length + (uploadFile?.length ?? 0) > 10) {
        return;
      }

      if (uploadFile) {
        const newFiles = Array.from(uploadFile).map((file, idx) => ({
          id: files.length + idx,
          file,
          status: "ready" as const,
        }));

        setFiles([...files, ...newFiles]);
      }
    },
    [files],
  );

  const handleDelete = useCallback(
    (id: number) => {
      setFiles(files.filter((file) => id !== file.id));
    },
    [files],
  );

  const getFileExtension = useCallback((fileName: string) => {
    return fileName.split(".").pop() || "";
  }, []);

  const formatBytes = useCallback((bytes: number) => {
    return bytes < 1024 ? `${bytes}B` : `${(bytes / 1024).toFixed(1)}KB`;
  }, []);

  const handleUpload = () => {
    console.log(selectedFolder);

    if (selectedFolder === null || selectedFolder === undefined) return;

    onUpload(
      files.map((f) => f.file),
      selectedFolder,
    );

    onClose();
  };

  return (
    <Dimmed onClick={onClose}>
      <Container
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <MyText typography="t3">파일 업로드</MyText>

        <Spacing size="md" />
        <Spacing size={1} backgroundColor="grayBorder" />
        <Spacing size="md" />

        <Flex align="center">
          <MyText typography="t6">대상 폴더 선택</MyText>
          <Spacing size="md" direction="horizontal" />
          <InputSelect
            value={selectedFolder?.folderNo ?? 0}
            onChange={(e) =>
              setSelectedFolder(data?.folderList.find((folder) => folder.folderNo === Number(e.target.value)))
            }
          >
            {data !== null && data !== undefined && data?.folderList.length > 0 ? (
              data?.folderList.map((folder) => (
                <option key={folder.folderNo} value={folder.folderNo}>
                  {folder.folderNm}
                </option>
              ))
            ) : (
              <option>현재폴더</option>
            )}
          </InputSelect>
        </Flex>

        <Spacing size="md" />
        <Flex gap={spacing.md}>
          <Button onClick={() => inputRef.current?.click()}>파일 추가</Button>
          <input type="file" ref={inputRef} hidden multiple onChange={handleFileChange} />
        </Flex>

        <Spacing size="lg" />
        <table css={tableStyle}>
          <thead>
            <tr>
              {/* <th></th> */}
              <th>파일명</th>
              <th>확장자</th>
              <th>파일크기</th>
              <th>상태</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {files.map(({ id, file, status }, idx) => {
              // const checked = selectedFile.includes(id);

              return (
                <tr key={idx}>
                  {/* <td>
                    <InputCheckbox
                      checked={checked}
                      onClick={() => {
                        if (checked) {
                          setSelectedFile(selectedFile.filter((prevId) => prevId !== id));
                        } else {
                          setSelectedFile((prev) => [...prev, id]);
                        }
                      }}
                    />
                  </td> */}
                  <td style={{ maxWidth: "280px" }}>
                    <MyText bEllipsis={true}>{file.name}</MyText>
                  </td>
                  <td>
                    <MyText>{getFileExtension(file.name)}</MyText>
                  </td>
                  <td>
                    <MyText color="textSubColor">{formatBytes(file.size)}</MyText>
                  </td>
                  <td>{status === "ready" ? "✔️" : "❌"}</td>
                  <td>
                    <Button color="error" weak={true} size="xs" onClick={() => handleDelete(id)}>
                      삭제
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Spacing size="md" />
        <Flex justify="space-between">
          <MyText>{addDelimiter((files.reduce((sum, f) => sum + f.file.size, 0) / 1024).toFixed(0))}KB / 20MB</MyText>
        </Flex>

        <Flex justify="end" gap={spacing.md}>
          <Button color="error" onClick={onClose}>
            취소
          </Button>
          <Button disabled={files.length === 0} onClick={handleUpload}>
            업로드
          </Button>
        </Flex>
      </Container>
    </Dimmed>
  );
};

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;

  th,
  td {
    padding: 0.5rem;
    border: 1px solid #ddd;
    text-align: left;
  }

  thead {
    background: #f9f9f9;
  }
`;

const Container = styled.div`
  width: calc(100% - 60px);
  max-width: 600px;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  background-color: ${colors.background};
`;

export default FileUploadModal;
