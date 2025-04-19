import { CSSProperties } from "react";
import { SerializedStyles, css as emotionCss } from "@emotion/react";
import styled from "@emotion/styled";

interface FlexProps {
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction?: CSSProperties["flexDirection"];
  gap?: CSSProperties["gap"];
  css?: SerializedStyles | SerializedStyles[]; // 추가된 부분: css prop을 받을 수 있도록 설정
}

const Flex = styled.div<FlexProps>(({ align, justify, direction, gap, css }) =>
  emotionCss(
    {
      display: "flex",
      alignItems: align,
      justifyContent: justify,
      flexDirection: direction,
      gap: gap,
    },
    css,
  ),
);

export default Flex;
