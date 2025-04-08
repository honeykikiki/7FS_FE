import { css } from "@emotion/react";

export const badgeSizeMap = {
  sm: css`
    font-size: 8px;
    padding: 4px 10px;
  `,
  md: css`
    font-size: 13px;
    padding: 5px 12px;
  `,
  lg: css`
    font-size: 15px;
    padding: 7px 14px;
  `,
};

export type BadgeSize = keyof typeof badgeSizeMap;
