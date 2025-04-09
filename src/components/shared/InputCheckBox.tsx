import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";

const InputCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: ${colors.primary}; /* 최신 브라우저 지원 */
`;

InputCheckbox.defaultProps = {
  type: "checkbox",
};

export default InputCheckbox;
