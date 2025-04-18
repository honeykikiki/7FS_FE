import { useState } from "react";
import Button from "@components/shared/Button";
import Flex from "@components/shared/Flex";
import Spacing from "@components/shared/Spacing";
import MyText from "@components/shared/Text";
import { css } from "@emotion/react";
import { colors } from "@styles/colorPlatte";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
import { StorageType } from "src/models/webFolder";
import { insertFiles } from "src/remote/folder";
import {
  folderListState,
  selectDataRoomState,
  setSelectFilesState,
  setSelectFoldersState,
} from "src/store/atom/folder";
import formatFancySize from "src/utils/formatFancySize";
import FileUploadModal from "./FileUploadModal";

interface FolderSideProps {
  totalVolume: number;
}

function FolderSide({ totalVolume }: FolderSideProps) {
  const queryClient = useQueryClient();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectDataRoom, setSelectDataRoom] = useRecoilState(selectDataRoomState);
  const setUpperFolderNo = useSetRecoilState(folderListState);
  const setSelectFolders = useSetRecoilState(setSelectFoldersState);
  const setSelectFiles = useSetRecoilState(setSelectFilesState);

  const handleSelectDataRoom = (dataRoomName: StorageType) => {
    setUpperFolderNo([1]);
    setSelectFolders([]);
    setSelectFiles([]);
    setSelectDataRoom(dataRoomName);
  };

  return (
    <Flex direction="column" css={sidebarStyle}>
      {showUploadModal && (
        <FileUploadModal
          onUpload={async (files, folder) => {
            await insertFiles(files, folder);

            queryClient.invalidateQueries({ queryKey: ["folder"] });
          }}
          onClose={() => setShowUploadModal(false)}
        />
      )}

      <Button
        full={true}
        size="lg"
        onClick={() => {
          setShowUploadModal(true);
        }}
      >
        파일 업로드
      </Button>

      <Spacing size="md" />
      <div css={folderTreeStyle}>
        <MyText typography="t5" fontWeight="500">
          자료실
        </MyText>
        <ul>
          <li onClick={() => handleSelectDataRoom(StorageType.COMPANY)}>
            <MyText
              color={selectDataRoom === StorageType.COMPANY ? "textColor" : "textMutedColor"}
              fontWeight={selectDataRoom === StorageType.COMPANY ? "bold" : "normal"}
              hoverColor="textColor"
            >
              전사 자료실
            </MyText>
          </li>
          <li onClick={() => handleSelectDataRoom(StorageType.DEPARTMENT)}>
            <MyText
              color={selectDataRoom === StorageType.DEPARTMENT ? "textColor" : "textMutedColor"}
              fontWeight={selectDataRoom === StorageType.DEPARTMENT ? "bold" : "normal"}
              hoverColor="textColor"
            >
              부서 자료실
            </MyText>
          </li>
        </ul>

        <Spacing size="md" />
        <MyText typography="t5" fontWeight="500">
          개인 자료실
        </MyText>
        <ul>
          <li onClick={() => handleSelectDataRoom(StorageType.PERSONAL)}>
            <MyText
              color={selectDataRoom === StorageType.PERSONAL ? "textColor" : "textMutedColor"}
              fontWeight={selectDataRoom === StorageType.PERSONAL ? "bold" : "normal"}
              hoverColor="textColor"
            >
              개인 자료실
            </MyText>
          </li>
        </ul>
      </div>

      <Spacing size="md" />
      <Flex direction="column">
        <MyText hoverColor="primaryHover">전사 자료실 용량</MyText>
        <progress
          value={Math.ceil((totalVolume / (10 * 1024 * 1024 * 1024)) * 100)}
          max={100}
          style={{ width: "100%" }}
          color={colors.primary}
        ></progress>
        <Spacing size="xs" />
        {}
        <small>10.0GB 중 {formatFancySize(totalVolume)} 사용</small>
      </Flex>
    </Flex>
  );
}

const folderTreeStyle = css`
  margin-top: 1rem;
  font-size: 0.9rem;

  ul {
    list-style: none;
    padding-left: 1rem;

    li {
      margin: 0.4rem 0;
      color: ${colors.textMutedColor};
      cursor: pointer;

      &:hover {
        color: ${colors.primary};
      }
    }
  }
`;

const sidebarStyle = css`
  width: 260px;
  height: 84vh;
  background: ${colors.white};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

export default FolderSide;
