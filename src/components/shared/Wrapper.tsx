import { useEffect } from "react";
import { css } from "@emotion/react";

function Wrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const vh = window.innerHeight * 0.01;

      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
  }, []); // 빈 배열을 사용하여 한 번만 실행

  return <div css={wrapperStyles}>{children}</div>;
}

export const wrapperMaxWidth = css`
  max-width: var(--max-width);
  margin: 0 auto;
  width: auto;
`;

const wrapperStyles = css`
  position: relative;
  min-height: calc(var(--vh, 1vh) * 100);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  ${wrapperMaxWidth}
`;

export default Wrapper;
