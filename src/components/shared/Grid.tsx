import { CSSProperties } from "react";
import { css as emotionCss } from "@emotion/react";
import styled from "@emotion/styled";
import { spacing } from "@styles/spacingPalette";

interface FlexProps {
  gridTemplateColumns?: CSSProperties["gridTemplateColumns"];
  paddingTop?: CSSProperties["paddingTop"];
  gridGap?: CSSProperties["gap"];
}

const Grid = styled.div<FlexProps>(({ gridGap, gridTemplateColumns, paddingTop }) =>
  emotionCss({
    display: "grid",
    padding: `0 ${spacing.layout}px`,
    gridGap: gridGap,
    gridTemplateColumns,
    paddingTop,
    overflow: "hidden",
  }),
);

export default Grid;
