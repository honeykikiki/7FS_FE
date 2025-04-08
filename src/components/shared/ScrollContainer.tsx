import React, { CSSProperties, ReactNode } from "react";
import { css } from "@emotion/react";
import useHorizontalScroll from "src/hooks/useHorizontalScroll"; // 기존에 작성된 hook을 재사용
import Flex from "./Flex";

interface ScrollContainerProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  scrollSpeed?: number; // 추가: 스크롤 속도를 조정할 수 있는 옵션
  gap?: number; // 추가: 스크롤 속도를 조정할 수 있는 옵션
  padding?: string; // 추가: 스크롤 속도를 조정할 수 있는 옵션
}

function ScrollContainer({
  children,
  style = {},
  className = "",
  scrollSpeed = 1, // 기본값은 1로 설정
  gap = 0,
  padding = "",
}: ScrollContainerProps) {
  const { containerRef, onMouseDown, onMouseLeave, onMouseUp, onMouseMove } = useHorizontalScroll(scrollSpeed);

  return (
    <Flex
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className={className}
      css={[
        css`
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          cursor: grab;
          padding: ${padding};

          &::-webkit-scrollbar {
            display: none;
          }
        `,
      ]}
      gap={gap}
      style={style}
    >
      {children}
    </Flex>
  );
}

export default ScrollContainer;
