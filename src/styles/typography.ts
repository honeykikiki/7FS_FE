import { css } from "@emotion/react";

export const typographyMap = {
  t1: css`
    font-size: 30px; /* 30px */
    line-height: 1.35;
    font-weight: bold;
  `,
  t2: css`
    font-size: 26px; /* 26px */
    line-height: 1.34;
    font-weight: bold;
  `,
  t3: css`
    font-size: 22px; /* 22px */
    line-height: 1.4;
    font-weight: 500;
  `,
  t4: css`
    font-size: 20px; /* 20px */
    line-height: 1.45;
    font-weight: 500;
  `,
  t5: css`
    font-size: 17px; /* 17px */
    line-height: 1.5;
    font-weight: normal;
  `,
  t6: css`
    font-size: 15px; /* 15px */
    line-height: 1.5;
    font-weight: normal;
  `,
  t7: css`
    font-size: 13px; /* 13px */
    line-height: 1.5;
    font-weight: normal;
  `,
};

export type Typography = keyof typeof typographyMap;
