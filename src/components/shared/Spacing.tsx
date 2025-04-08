import styled from "@emotion/styled";
import { Colors, colors } from "@styles/colorPlatte";
import { SpacingSize, spacing } from "@styles/spacingPalette";

interface SpacingProps {
  size: SpacingSize | number;
  direction?: "vertical" | "horizontal";
  backgroundColor?: Colors;
}

const Spacing = styled.div<SpacingProps>`
  ${({ size, direction = "vertical" }) =>
    direction === "vertical"
      ? `
        height: ${typeof size === "string" ? spacing[size] : size}px;
      `
      : `
        padding-right: ${typeof size === "string" ? spacing[size] : size}px;
      `}

  ${({ backgroundColor }) => backgroundColor && `background-color: ${colors[backgroundColor]};`}
`;

export default Spacing;
