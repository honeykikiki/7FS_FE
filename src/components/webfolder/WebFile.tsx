import { Dispatch, SetStateAction } from "react";
import Button from "@components/shared/Button";
import Flex from "@components/shared/Flex";
import InputCheckbox from "@components/shared/InputCheckBox";
import MyText from "@components/shared/Text";
import { spacing } from "@styles/spacingPalette";
import { WebFolderFile } from "src/models/webFolder";
import { URL } from "src/remote/axios";
import dateFormat from "src/utils/dateFormat";

interface WebFileProps {
  file: WebFolderFile;
  selectFile: WebFolderFile[];
  setSelectFile: Dispatch<SetStateAction<WebFolderFile[]>>;
}

function WebFile({ file, selectFile, setSelectFile }: WebFileProps) {
  const checked = selectFile.includes(file);

  return (
    <tr>
      <td
        onClick={() => {
          if (checked) {
            setSelectFile(selectFile.filter((prev) => prev !== file));
            return;
          }

          setSelectFile((prev) => [...prev, file]);
        }}
      >
        <InputCheckbox checked={checked} />
      </td>
      <td>
        <MyText typography="t6" bEllipsis={true}>
          {file.attachFileVO.fileNm}
        </MyText>
      </td>
      <td align="right">
        <MyText>{file.attachFileVO.fileViewSize}</MyText>
      </td>
      <td>{file.attachFileVO.fileMime.split("/")[1]}</td>
      <td>{dateFormat({ date: file.attachFileVO.fileCreatDt, format: "YY.MM.DD HH:MM" })}</td>
      <td>
        <Flex gap={spacing.xs}>
          <Button>미리보기</Button>
          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.href = URL + "download?fileName=" + file.attachFileVO.fileStrePath; // 이미지 경로
              link.download = file.attachFileVO.fileStreNm; // 다운로드될 파일 이름
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            다운로드
          </Button>
        </Flex>
      </td>
    </tr>
  );
}

export default WebFile;
