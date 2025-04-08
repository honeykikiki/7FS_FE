import { css } from "@emotion/react";
import { colors } from "../colorPlatte";

export const buttonBaseAnimation = css`
  transition: transform 0.15s ease;

  &:active {
    transform: scale(0.98); /* 크기를 95%로 줄임 */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); */
    /* 클릭 시 약간의 그림자 */
  }

  &:hover {
    opacity: 0.85;
  }
`;

export const buttonColorMap = {
  primary: css`
    background-color: ${colors.primary};
    color: #fff;
    border: 1px solid ${colors.primary};
    border-radius: 10px;
  `,
  gray: css`
    background-color: ${colors.gray};
    color: ${colors.textSubColor};
    border: 1px solid ${colors.gray};
    border-radius: 10px;
  `,
  success: css`
    background-color: ${colors.success};
    color: ${colors.white};
    border: 1px solid ${colors.success};
    border-radius: 10px;
  `,
  error: css`
    background-color: ${colors.danger};
    color: ${colors.white};
    border: 1px solid ${colors.danger};
    border-radius: 10px;
  `,
};

export const buttonWeakMap = {
  primary: css`
    background-color: ${colors.white};
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
    border-radius: 16px;
  `,
  gray: css`
    background-color: ${colors.white};
    color: ${colors.onlyBlack};
    border: 1px solid ${colors.grayBorder};
    border-radius: 16px;
  `,
  success: css`
    background-color: ${colors.white};
    color: ${colors.success};
    border: 1px solid ${colors.success};
    border-radius: 16px;
  `,
  error: css`
    background-color: ${colors.white};
    color: ${colors.danger};
    border: 1px solid ${colors.danger};
    border-radius: 16px;
  `,
};

export const buttonTextMap = {
  primary: css`
    text-align: left;
    padding-left: 0;
    padding-right: 0;
    background-color: transparent;
    color: ${colors.primary};
  `,
  gray: css`
    text-align: left;
    padding-left: 0;
    padding-right: 0;
    background-color: transparent;
    color: ${colors.textSubColor};
  `,
  success: css`
    text-align: left;
    padding-left: 0;
    padding-right: 0;
    background-color: transparent;
    color: ${colors.success};
  `,
  error: css`
    text-align: left;
    padding-left: 0;
    padding-right: 0;
    background-color: transparent;
    color: ${colors.danger};
  `,
};

export const buttonSizeMap = {
  xs: css`
    font-size: 14px;
    font-weight: 500;
    padding: 8px 18px;
  `,
  sm: css`
    font-size: 15px;
    padding: 10px 20px;
  `,
  md: css`
    font-size: 17px;
    padding: 13px 26px;
  `,
  lg: css`
    font-size: 20px;
    padding: 15px 30px;
  `,
};

export type ButtonColor = keyof typeof buttonColorMap;
export type ButtonSize = keyof typeof buttonSizeMap;
