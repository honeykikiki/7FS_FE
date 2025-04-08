import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";

const Input = styled.input`
  padding: 0 16px;
  height: 43px;
  font-weight: 500;
  border: 1px solid ${colors.inputBorder};
  background-color: ${colors.transparent};
  color: ${colors.textColor};
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px; /* 사파리 확대 안되게 최소 16px로 설정 */

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }

  &[aria-invalid="true"] {
    border-color: ${colors.danger};
    background-color: ${colors.danger100};
  }

  &:read-only {
    border: 1px solid ${colors.grayBorder};
    &::placeholder {
      color: ${colors.grayBorder};
    }
  }
`;

export default Input;
