import Flex from "@components/shared/Flex";
import MyText from "@components/shared/Text";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import { spacing } from "@styles/spacingPalette";
import { CommonCode } from "src/models/commonCode";

interface DeptRowProps {
  dept: CommonCode;
  checked: boolean;
  onClick: () => void;
  subText?: React.ReactNode;
}

function DeptRow({ dept, checked, onClick, subText }: DeptRowProps) {
  return (
    <DeptContainer direction="column" onClick={onClick} checked={checked}>
      <Flex justify="space-between" gap={spacing.md}>
        <MyText typography="t5" fontWeight="bold">
          {dept.cmmnCodeNm}
        </MyText>
        {subText}
      </Flex>
      <MyText typography="t6" bEllipsis={true} color="textSubColor">
        {dept.cmmnCodeDc}
      </MyText>
    </DeptContainer>
  );
}

export const DeptContainer = styled(Flex)<{ checked: boolean }>`
  min-width: 200px;
  max-width: 220px;
  border-radius: 8px;
  border: 1px solid ${colors.grayBorder};
  padding: ${spacing.md}px ${spacing.layout}px;
  cursor: pointer;

  background-color: ${({ checked }) => (checked ? colors.hover : colors.headerColor)};
  &:hover {
    background: ${colors.hover};
  }
`;

export default DeptRow;
