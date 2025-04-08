import { keyframes } from "@emotion/react";

export const SlideUp = keyframes`
  0%{
    transform: translateY(100%);
    opacity: 0%;
  }
  100%{
    transform: translateY(0);
    opacity: 100%;
  }
`;

export const SlideDown = keyframes`
  0%{
    transform: translateY(0);
    opacity: 100%;
  }
  100%{
    transform: translateY(100%);
    opacity: 0%;
  }
`;
