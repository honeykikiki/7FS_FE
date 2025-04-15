import { Dispatch, DragEvent, SetStateAction, useState } from "react";
import InputCheckbox from "@components/shared/InputCheckBox";
import MyText from "@components/shared/Text";
import { css } from "@emotion/react";
import { colors } from "@styles/colorPlatte";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
import { WebFolder, WebFolderFile } from "src/models/webFolder";
import { updateFileMove, updateFolderMove } from "src/remote/folder";
import { folderListState, upperFolderNameState } from "src/store/atom/folder";

interface FolderRowProps {
  folder: WebFolder;
  checked: boolean;
  selectFolders: WebFolder[];
  setSelectFolders: Dispatch<SetStateAction<WebFolder[]>>;
}

function FolderRow({ folder, checked, selectFolders, setSelectFolders }: FolderRowProps) {
  const queryClient = useQueryClient();
  const [upperFolderNo, setUpperFolderNo] = useRecoilState(folderListState);
  const setUpperFolderName = useSetRecoilState(upperFolderNameState);
  const [dragEnterBg, setDragEnterBg] = useState(colors["white"]);

  const handleOnDrop = async (e: DragEvent<HTMLTableRowElement>) => {
    e.preventDefault();

    const data = e.dataTransfer.getData("application/json");
    const type = e.dataTransfer.getData("type");

    if (data) {
      if (type === "file") {
        const droppedFile: WebFolderFile = JSON.parse(data);

        // 파일 이동 시키기
        const resultData = await updateFileMove(folder, droppedFile);

        if (resultData.result === "success") {
          queryClient.invalidateQueries({ queryKey: ["folder"] });
        }
      }

      if (type === "folder") {
        const droppedFolder: WebFolder = JSON.parse(data);
        console.log(droppedFolder);

        // 같은 폴더로 못들어가게 막기
        if (folder.folderNo === droppedFolder.folderNo) return;

        const resultData = await updateFolderMove(folder, droppedFolder);
        if (resultData.result === "success") {
          queryClient.invalidateQueries({ queryKey: ["folder"] });
        }
      }
    }

    setDragEnterBg(colors["white"]);
  };

  return (
    <tr
      css={css`
        cursor: pointer;
        background-color: ${dragEnterBg};
      `}
      onDragEnter={() => {
        // 들어오면 색 변경하기
        console.log("enter");
        setDragEnterBg(colors["hover"]);
      }}
      onDragLeave={() => {
        console.log("leave");

        setDragEnterBg(colors["white"]);
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleOnDrop}
      onClick={() => {
        if (upperFolderNo.includes(folder.folderNo)) return;
        // 폴더 이동
        setUpperFolderNo((prevList) => [...prevList, folder.folderNo]);
        setUpperFolderName((prevList) => [...prevList, folder.folderNm]);
      }}
      onDragStart={(e) => {
        const folderData = JSON.stringify(folder);
        e.dataTransfer.setData("application/json", folderData);
        e.dataTransfer.setData("type", "folder");
      }}
      draggable={true}
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
}

export default FolderRow;
