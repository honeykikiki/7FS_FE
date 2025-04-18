import { Dispatch, SetStateAction } from "react";
import Button from "@components/shared/Button";
import InputCheckbox from "@components/shared/InputCheckBox";
import MyText from "@components/shared/Text";
import { css } from "@emotion/react";
import { WebFolderFile } from "src/models/webFolder";
import { DEFAULT_URL } from "src/remote/axios";
import dateFormat from "src/utils/dateFormat";

interface WebFileProps {
  file: WebFolderFile;
  selectFile: WebFolderFile[];
  setSelectFile: Dispatch<SetStateAction<WebFolderFile[]>>;
}

function WebFile({ file, selectFile, setSelectFile }: WebFileProps) {
  const checked = selectFile.includes(file);

  const handleViewer = () => {
    const type = file.attachFileVO.fileMime;

    if (type.includes("pdf")) {
      window.open(DEFAULT_URL + "viewer/pdf?pdf=" + file.attachFileVO.fileStrePath);
      return;
    }

    if (type.includes("image")) {
      window.open(DEFAULT_URL + "viewer/image?image=" + file.attachFileVO.fileStrePath);
      return;
    }

    window.open(DEFAULT_URL + "viewer/image?image=" + file.attachFileVO.fileStrePath);
  };

  return (
    <tr
      draggable={true}
      onDragStart={(e) => {
        const fileData = JSON.stringify(file);
        e.dataTransfer.setData("application/json", fileData);
        e.dataTransfer.setData("type", "file");
      }}
      css={css`
        cursor: move;
      `}
    >
      <td
        onClick={() => {
          if (checked) {
            setSelectFile(selectFile.filter((prev) => prev !== file));
            return;
          }

          setSelectFile((prev) => [...prev, file]);
        }}
      >
        <InputCheckbox checked={checked} readOnly />
      </td>
      <td align="left">
        <MyText typography="t6" bEllipsis={true}>
          {file.attachFileVO.fileNm}
        </MyText>
      </td>
      <td align="right">
        <MyText>{file.attachFileVO.fileViewSize}</MyText>
      </td>
      <td align="right">{file.attachFileVO.fileMime}</td>
      <td align="center">{dateFormat({ date: file.attachFileVO.fileCreatDt, format: "YY.MM.DD HH:MM" })}</td>
      <td>
        <Button onClick={handleViewer}>미리보기</Button>
      </td>
    </tr>
  );
}

export default WebFile;
