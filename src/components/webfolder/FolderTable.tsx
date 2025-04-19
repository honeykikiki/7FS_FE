import { useCallback } from "react";
import Button from "@components/shared/Button";
import Flex from "@components/shared/Flex";
import Spacing from "@components/shared/Spacing";
import { css } from "@emotion/react";
import { colors } from "@styles/colorPlatte";
import { spacing } from "@styles/spacingPalette";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useAlertContext } from "src/context/AlertContext";
import { WebFolder, WebFolderFile } from "src/models/webFolder";
import { deleteFiles, deleteFolders, getDownLoadFile, getDownLoadFolder } from "src/remote/folder";
import {
  folderListState,
  setSelectFilesState,
  setSelectFoldersState,
  upperFolderNameState,
} from "src/store/atom/folder";
import Folder from "./Folder";
import NewFolder from "./NewFolder";
import WebFile from "./WebFile";

interface FolderTableProps {
  folder?: WebFolder[];
  files?: WebFolderFile[];
}

function FolderTable({ folder, files }: FolderTableProps) {
  const queryClient = useQueryClient();
  const { open } = useAlertContext();

  const setUpperFolderNo = useSetRecoilState(folderListState);
  const folderName = useRecoilValue(upperFolderNameState);

  const [selectFolders, setSelectFolders] = useRecoilState(setSelectFoldersState);
  const [selectFiles, setSelectFiles] = useRecoilState(setSelectFilesState);

  // 파일 다운로드
  const downloadFiles = useCallback(() => {
    if (selectFolders.length > 0) {
      selectFolders.forEach((item) => {
        getDownLoadFolder(item.folderNo, item.folderNm);
      });
    }

    if (selectFiles.length > 0) {
      const fileNoList = selectFiles.map((item) => item.atchFileNo);

      getDownLoadFile(fileNoList, folderName[folderName.length - 1]);
    }
  }, [folderName, selectFiles, selectFolders]);

  // 파일 삭제
  const handleDelete = useCallback(async () => {
    open({
      title: "정말로 삭제하시겠습니까?",
      confirmText: "삭제",
      description: "폴더 삭제시 내부 파일도 같이 삭제됩니다.",
      onConfirmClick: async () => {
        if (selectFiles.length > 0) await deleteFiles(selectFiles);
        if (selectFolders.length > 0) await deleteFolders(selectFolders);
        queryClient.invalidateQueries({ queryKey: ["folder"] });
      },
    });
  }, [open, queryClient, selectFiles, selectFolders]);

  return (
    <div css={layoutStyle}>
      <main css={mainStyle}>
        <Flex justify="space-between">
          <Flex gap={spacing.md}>
            <NewFolder folder={folder} />
            <Button onClick={downloadFiles} disabled={selectFiles.length === 0 && selectFolders.length === 0}>
              다운로드
            </Button>
            <Button onClick={handleDelete} disabled={selectFiles.length === 0 && selectFolders.length === 0}>
              삭제
            </Button>
            <Button onClick={() => setUpperFolderNo([1])}>처음으로</Button>
          </Flex>
        </Flex>
        <Spacing size="lg" />

        <table css={tableStyle}>
          <thead>
            <tr>
              <th style={{ width: "80px" }}></th>
              <th align="left">이름</th>
              <th align="right">크기</th>
              <th align="right">확장자</th>
              <th align="center">등록일</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* 폴더 */}
            {folder && <Folder selectFolders={selectFolders} setSelectFolders={setSelectFolders} folder={folder} />}

            {/* 파일들 */}
            {files?.map((file) => (
              <WebFile selectFile={selectFiles} setSelectFile={setSelectFiles} key={file.atchFileNo} file={file} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

const layoutStyle = css`
  display: flex;
  height: 100vh;
  background-color: ${colors.background};
`;

const mainStyle = css`
  flex: 1;
  overflow-x: auto;
  background-color: ${colors.background};
`;

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  background-color: ${colors.white};
  border: 1px solid ${colors.grayBorder};
  border-radius: 10px;
  overflow: hidden;

  th,
  td {
    padding: 15px 15px;
    border-bottom: 1px solid ${colors.grayBorder};
    /* font-size: 0.875rem; */
    width: 180px;
  }

  th {
    background-color: ${colors.gray};
    /* text-align: left; */
  }

  tbody tr:hover {
    background-color: ${colors.hover};
  }
`;

export default FolderTable;
