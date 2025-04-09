import { css } from "@emotion/react";

export const colorPalette = css`
  :root {
    --primary: #087ea4;
    --primary-hover: #1e3c61;
    --accent: #a3cef1;

    --success: #48cfad;
    --danger: #ff5555;
    /* 238	236	236	 */
    --gray: #e6e6e6;
    --gray-border: #c4c4c4;
    --danger-100: rgba(255, 85, 85, 0.1);

    --background: #f1f5f8;
    --text-color: #1f1f1f;
    --text-sub-color: #5c5c5c;
    --text-muted-color: #8b8c89;

    --step-bar-bg: #d6d6d6;
    --selected-bg: #dfe5ea;

    --button-bg-color: #dedede;
    --input-border: #707070;
    --spacing: #dfe0df;
    --box: #e8e8e8;
    --hover: #f5f5f5;
    --icon: #8b8b8b;

    --white: #ffffff;
    --black: #000000;

    --only-white: #ffffff;
    --only-black: #000000;

    /* 커스텀 컬러 */
    --header-color: #ffffff;
    --side-bar-color: #ffffff;
    --side-bar-hover-color: #eee;
  }

  [data-theme="dark"] {
    --primary: #61dafb; /* React 공식 블루 */
    --primary-hover: #4fbfe4;
    --accent: #3a3a3c;

    --success: #3aa288;
    --danger: #bf4040;

    --gray: #a1a1a1;
    --gray-border: #3c3c3c;
    --danger-100: rgba(191, 64, 64, 0.1);

    --background: #1c1e21; /* 전체 배경 */
    --text-color: #e4e4e4;
    --text-sub-color: #a3a3a3;
    --text-muted-color: #777;

    --step-bar-bg: #3a3a3a;
    --selected-bg: #2b2d31;

    --button-bg-color: #2c2f33;
    --input-border: #4a4a4a;
    --spacing: #2f3136;
    --box: #2c2f33;
    --hover: #3c3c3c;
    --icon: #8b8b8b;

    --white: #3c3c3c;
    --black: #ffffff;

    --only-white: #3c3c3c;
    --only-black: #ffffff;

    --header-color: #1c1e21; /* 헤더 */
    --side-bar-color: #212326; /* 사이드바 */
    --side-bar-hover-color: #2c2f33; /* 사이드바 hover */
  }
`;

export const colors = {
  primary: "var(--primary)",
  primaryHover: "var(--primary-hover)",
  success: "var(--success)",
  danger: "var(--danger)",
  gray: "var(--gray)",
  grayBorder: "var(--gray-border)",
  danger100: "var(--danger-100)",
  background: "var(--background)",
  textColor: "var(--text-color)",
  textSubColor: "var(--text-sub-color)",
  textMutedColor: "var(--text-muted-color)",

  stepBarBg: "var(--step-bar-bg)",
  selectedBg: "var(--selected-bg)",

  buttonBgColor: "var(--button-bg-color)",
  inputBorder: "var(--input-border)",
  spacing: "var(--spacing)",
  box: "var(--box)",
  hover: "var(--hover)",
  icon: "var(--icon)",

  white: "var(--white)",
  black: "var(--black)",
  onlyWhite: "var(--only-white)",
  onlyBlack: "var(--only-black)",
  transparent: "transparent",
  headerColor: "var(--header-color)",
  sideBarColor: "var(--side-bar-color)",
  sideBarHoverColor: "var(--side-bar-hover-color)",
};

export type Colors = keyof typeof colors;
