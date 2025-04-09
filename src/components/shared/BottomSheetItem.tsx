import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import MyText from "./Text";

const SheetWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MenuItem = styled.button`
  font-size: 16px;
  padding: 12px;
  background: ${colors.box};
  border-radius: 8px;
  border: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: ${colors.buttonBgColor};
  }
`;

const BottomSheetContent = Object.assign(SheetWrapper, {
  Item: MenuItem,
  Text: MyText,
});

export default BottomSheetContent;
