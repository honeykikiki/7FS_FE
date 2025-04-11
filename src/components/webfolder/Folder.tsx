import React, { Dispatch, SetStateAction } from "react";
import InputCheckbox from "@components/shared/InputCheckBox";
import MyText from "@components/shared/Text";
import { css } from "@emotion/react";
import { useRecoilState } from "recoil";
import { WebFolder } from "src/models/webFolder";
import { folderListState, upperFolderNameState } from "src/store/atom/folder";

interface FolderProps {
  folder: WebFolder[];
  selectFolders: WebFolder[];
  setSelectFolders: Dispatch<SetStateAction<WebFolder[]>>;
}

function Folder({ folder, selectFolders, setSelectFolders }: FolderProps) {
  const [upperFolderNo, setUpperFolderNo] = useRecoilState(folderListState);
  const [upperFolderName, setUpperFolderName] = useRecoilState(upperFolderNameState);

  return (
    <>
      {upperFolderNo.length > 1 ? (
        <tr
          css={css`
            cursor: pointer;
          `}
          onClick={() => {
            const newUpperFolderNo = [...upperFolderNo.slice(0, -1)];
            setUpperFolderNo(newUpperFolderNo);
            setUpperFolderName((prev) => [...prev.slice(0, -1)]);
          }}
        >
          <td></td>
          <td colSpan={5}>
            <MyText>...상위폴더 ({upperFolderName[upperFolderName.length - 1]})</MyText>
          </td>
        </tr>
      ) : null}

      {/* 폴더 인 경우 */}
      {folder?.map((folder) => {
        const checked = selectFolders.includes(folder);

        return (
          <tr
            css={css`
              cursor: pointer;
            `}
            key={folder.folderNo}
            onClick={() => {
              if (upperFolderNo.includes(folder.folderNo)) return;
              // 폴더 이동
              setUpperFolderNo((prevList) => [...prevList, folder.folderNo]);
              setUpperFolderName((prevList) => [...prevList, folder.folderNm]);
            }}
          >
            <td
              onClick={(e) => {
                e.stopPropagation();
                // 체크박스
                if (checked) {
                  setSelectFolders(selectFolders.filter((prev) => prev !== folder));
                  return;
                }

                setSelectFolders((prev) => [...prev, folder]);
              }}
            >
              <InputCheckbox checked={checked} readOnly />
            </td>
            <td colSpan={5}>
              <MyText>📁 {folder.folderNm}</MyText>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default Folder;
