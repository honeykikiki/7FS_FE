import { css } from "@emotion/react";
import { colorPalette } from "./colorPlatte";
import fontsStyles from "./fontsStyles";
import reset from "./reset";

export default css`
  :root {
    --navbar-z-index: 9;
    --dimmed-z-index: 10;
    --bottom-sheet-z-index: 11;
    --alert-z-index: 12;
    --max-width: 400px;
  }

  * {
    /* -webkit-font-smoothing: antialiased; */
  }

  html {
    /* word-break: keep-all;
    -webkit-text-size-adjust: none;
    letter-spacing: -0.025em; */
  }

  body {
    /* font-family: "SUIT" !important; */
    font-family: "Pretendard" !important;

    background-color: var(--background);

    /* 텍스트 드래그 막기 */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-use-select: none;
    user-select: none;

    box-sizing: border-box;
  }

  /* 이미지 드래그 막기 */
  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  ${reset}
  ${colorPalette}
  ${fontsStyles} /* div, span, body,button {
    transition:
      color 0.5s ease-out,
      background-color 0.5s ease-out;
  } */
`;
