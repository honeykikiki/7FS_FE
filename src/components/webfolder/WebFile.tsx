import Button from "@components/shared/Button";
import Flex from "@components/shared/Flex";
import InputCheckbox from "@components/shared/InputCheckBox";
import MyText from "@components/shared/Text";
import { spacing } from "@styles/spacingPalette";
import { WebFolderFile } from "src/models/webFolder";
import { URL } from "src/remote/axios";
import dateFormat from "src/utils/dateFormat";

function WebFile(file: WebFolderFile) {
  return (
    <tr>
      <td>
        <InputCheckbox />
      </td>
      <td>
        <MyText typography="t6" bEllipsis={true}>
          {file.attachFileVO.fileNm}
        </MyText>
      </td>
      <td>{file.attachFileVO.fileViewSize}</td>
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
