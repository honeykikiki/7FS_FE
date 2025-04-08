"use client";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  buttonBaseAnimation,
  ButtonColor,
  buttonColorMap,
  ButtonSize,
  buttonSizeMap,
  buttonTextMap,
  buttonWeakMap,
} from "@styles/components/button";
import Flex from "./Flex";
import Spacing from "./Spacing";
import MyText from "./Text";

interface ButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  weak?: boolean;
  text?: boolean;
  full?: boolean;
  disabled?: boolean;
}

const BaseButton = styled.button<ButtonProps>(
  {
    cursor: "pointer",
    fontWeight: "bold",
    width: "fit-content",
    textWrap: "nowrap",
  },

  ({ size = "sm" }) => buttonSizeMap[size],
  ({ color = "primary", weak, text }) =>
    text ? buttonTextMap[color] : weak ? buttonWeakMap[color] : buttonColorMap[color],

  ({ full }) =>
    full
      ? css`
          display: block;
          width: 100%;
        `
      : undefined,

  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.55;
          cursor: not-allowed;
        `
      : buttonBaseAnimation,
);

function ButtonGroup({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <Flex direction="column">
      {title !== null ? (
        <>
          <MyText typography="t6" fontWeight="bold">
            {title}
          </MyText>
          <Spacing size="sm" />
        </>
      ) : null}

      <Flex css={buttonGroupsStyles}>{children}</Flex>
    </Flex>
  );
}

const buttonGroupsStyles = css`
  flex-wrap: wrap;
  gap: 10px;

  & button:nth-of-type(1) {
    flex: 2;
  }
  & button:nth-of-type(2) {
    flex: 8;
  }
`;

const Button = BaseButton as typeof BaseButton & {
  Group: typeof ButtonGroup;
};

Button.Group = ButtonGroup;

export default Button;
