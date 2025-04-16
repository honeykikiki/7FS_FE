import Flex from "@components/shared/Flex";
import ImageBox from "@components/shared/ImageBox";
import MyText from "@components/shared/Text";
import { spacing } from "@styles/spacingPalette";
import { Employee } from "src/models/employee";
import { DEFAULT_URL } from "src/remote/axios";
import { DeptContainer } from "./DeptRows";

interface EmpRowProps {
  emp: Employee;
  checked: boolean;
  onClick: () => void;
}

function EmpRows({ emp, checked, onClick }: EmpRowProps) {
  return (
    <DeptContainer direction="column" onClick={onClick} checked={checked}>
      <Flex gap={spacing.md}>
        <ImageBox
          src={DEFAULT_URL + "upload/" + emp.proflPhotoUrl}
          shape="circle"
          size="sm"
          alt={emp.emplNm + "님의 프로필 이미지"}
        />
        <Flex direction="column">
          <MyText typography="t5" fontWeight="bold">
            {emp.emplNm}
          </MyText>
          <MyText typography="t6" bEllipsis={true} color="textSubColor">
            {emp.clsfCodeNm}
          </MyText>
        </Flex>
      </Flex>
    </DeptContainer>
  );
}

export default EmpRows;
