import { Dispatch, SetStateAction } from "react";
import Button from "@components/shared/Button";
import InputCheckbox from "@components/shared/InputCheckBox";
import MyText from "@components/shared/Text";
import { css } from "@emotion/react";
import { WebFolderFile } from "src/models/webFolder";
import dateFormat from "src/utils/dateFormat";
import windowOpen from "src/utils/windowOpen";

interface WebFileProps {
  file: WebFolderFile;
  selectFile: WebFolderFile[];
  setSelectFile: Dispatch<SetStateAction<WebFolderFile[]>>;
}

function WebFile({ file, selectFile, setSelectFile }: WebFileProps) {
  const checked = selectFile.includes(file);

  const handleViewer = () => {
    const type = file.attachFileVO.fileMime;
    const filePath = file.attachFileVO.fileStrePath;

    if (type.includes("pdf")) {
      windowOpen("viewer/pdf?pdf=", filePath);
      return;
    }

    if (type.includes("image")) {
      windowOpen("viewer/image?image=", filePath);

      return;
    }

    if (type.includes("text")) {
      windowOpen("viewer/text?text=", filePath);
      return;
    }

    if (type.includes("zip")) {
      windowOpen("viewer/zip?zip=", filePath);
      return;
    }

    windowOpen("viewer/text?text=", filePath);
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
        style={{ width: "80px" }}
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
