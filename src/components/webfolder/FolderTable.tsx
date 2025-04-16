import { useCallback, useState } from "react";
import Button from "@components/shared/Button";
import Flex from "@components/shared/Flex";
import Selected, { itemListProps } from "@components/shared/Selected";
import Spacing from "@components/shared/Spacing";
import { css } from "@emotion/react";
import { colors } from "@styles/colorPlatte";
import { spacing } from "@styles/spacingPalette";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useAlertContext } from "src/context/AlertContext";
import { WebFolder, WebFolderFile } from "src/models/webFolder";
import { deleteFiles, deleteFolders, getDownLoadFile, getDownLoadFolder } from "src/remote/folder";
import { folderListState, upperFolderNameState } from "src/store/atom/folder";
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
  const [select, setSelect] = useState<itemListProps>({ key: "20개씩", value: 20 }); // 아직 개발 안됨

  const [selectFolders, setSelectFolders] = useState<WebFolder[]>([]);
  const [selectFiles, setSelectFiles] = useState<WebFolderFile[]>([]);

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
            <Button size="xs" onClick={downloadFiles} disabled={selectFiles.length === 0 && selectFolders.length === 0}>
              다운로드
            </Button>
            <Button onClick={handleDelete} size="xs" disabled={selectFiles.length === 0 && selectFolders.length === 0}>
              삭제
            </Button>
            <Button size="xs">이동</Button>
            <Button size="xs" onClick={() => setUpperFolderNo([1])}>
              처음으로
            </Button>
          </Flex>
          <Selected
            title="20개씩"
            currentItem={select}
            setCurrentItem={setSelect}
            itemList={[{ key: "20개씩", value: 20 }]}
          />
        </Flex>
        <Spacing size="lg" />

        <table css={tableStyle}>
          <thead>
            <tr>
              <th></th>
              <th align="left">이름</th>
              <th align="right">크기</th>
              <th>확장자</th>
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
    padding: 10px 15px;
    border-bottom: 1px solid ${colors.grayBorder};
    font-size: 0.875rem;
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
