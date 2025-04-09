"use client";
import { CSSProperties } from "react";
import styled from "@emotion/styled";
import { colors, Colors } from "@styles/colorPlatte";
import { Typography, typographyMap } from "@styles/typography";
import Flex from "./Flex";

type FontWeight = "bold" | "500" | "normal" | "300";

interface TextProps {
  typography?: Typography;
  color?: Colors;
  display?: CSSProperties["display"];
  textAlign?: CSSProperties["textAlign"];
  fontWeight?: FontWeight;
  bEllipsis?: boolean;
  hoverColor?: Colors;
}

const Text = styled.span<TextProps>(
  { whiteSpace: "pre-line" },

  ({ typography = "t5" }) => typographyMap[typography],
  ({ color = "textColor", display, textAlign }) => ({
    color: colors[color],
    textAlign,
    display,
  }),
  ({ fontWeight }) => (fontWeight !== null ? { fontWeight } : null),
  ({ bEllipsis }) =>
    bEllipsis
      ? {
          overflow: "hidden",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          textOverflow: "ellipsis",
        }
      : null,
  ({ hoverColor }) =>
    hoverColor
      ? {
          "&:hover": {
            color: colors[hoverColor],
          },
        }
      : null,
);

function TextGroup({ title, subText, style }: { title: string; subText: string; style?: CSSProperties }) {
  return (
    <Flex direction="column" style={style}>
      <MyText typography="t5" fontWeight="500">
        {title}
      </MyText>
      {/* <Spacing size={2} /> */}
      <MyText typography="t6" color="textSubColor">
        {subText}
      </MyText>
    </Flex>
  );
}

const MyText = Text as typeof Text & {
  Group: typeof TextGroup;
};

MyText.Group = TextGroup;

export default MyText;
