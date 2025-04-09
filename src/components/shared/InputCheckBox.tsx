import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";

const InputCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: ${colors.primary}; /* 최신 브라우저 지원 */

  &[aria-invalid="true"] {
    accent-color: ${colors.danger};
  }

  &:read-only {
    pointer-events: none;
    opacity: 0.6;
  }
`;

InputCheckbox.defaultProps = {
  type: "checkbox",
};

export default InputCheckbox;
