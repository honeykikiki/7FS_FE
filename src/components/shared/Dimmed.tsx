import { useEffect } from "react";
import styled from "@emotion/styled";

import { wrapperMaxWidth } from "./Wrapper";

function Dimmed({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  // 화면에 Dimmed가 나타날 때 스크롤을 막음
  useEffect(() => {
    // 스크롤을 막기 위한 body 스타일 변경
    document.body.style.overflow = "hidden";

    // 컴포넌트가 unmount 될 때 원래 상태로 복구
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <Container
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      {children}
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: var(--dimmed-z-index);
  /* ${wrapperMaxWidth} */
`;

export default Dimmed;
