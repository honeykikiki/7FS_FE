import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import { ContainerSize, container } from "@styles/containerSize";
import Image from "next/image";
import Icons from "./Icons";

interface ImageBoxProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  shape?: "square" | "circle" | "rounded";
  fallback?: React.ReactNode;
  icon?: React.ReactNode;
  size?: ContainerSize;
  bFull?: boolean;
  onClick?: () => void;
}

function ImageBox({
  src,
  alt = "image",
  shape = "rounded",
  fallback = null,
  icon = null,
  size = "md",
  onClick,
  bFull = false,
  ...props
}: ImageBoxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isError, setIsError] = useState(false);
  const [dynamicHeight, setDynamicHeight] = useState(parseInt(`${container[size].width}`));

  useEffect(() => {
    // 비율로 이미지 width 가져오기위해
    if (bFull && ref.current) {
      const clientWidth = ref.current.clientWidth;
      ref.current.style.height = `${clientWidth}px`;
      setDynamicHeight(clientWidth);
    }
  }, [bFull, ref]);

  const width = bFull ? "100%" : `${container[size].width}`;
  const height = bFull ? "auto" : `${container[size].height}`;

  return (
    <Container ref={ref} shape={shape} width={width} height={height} onClick={onClick} {...props}>
      {!isError && src ? (
        <StyledImage
          src={src}
          alt={alt}
          width={bFull ? dynamicHeight : parseInt(width)} // 숫자로 변환
          height={bFull ? dynamicHeight : parseInt(height)} // 숫자로 변환
          shape={shape}
          onError={() => setIsError(true)}
        />
      ) : (
        <FallbackContainer>{icon || fallback || <Icons.Image color="icon" />}</FallbackContainer>
      )}
    </Container>
  );
}

const Container = styled.div<{ shape: string; width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${colors.box};
  border-radius: ${({ shape }) => (shape === "circle" ? "50%" : shape === "rounded" ? "15px" : "0")};
`;

const StyledImage = styled(Image)<{ shape: string }>`
  object-fit: cover;
  border-radius: ${({ shape }) => (shape === "circle" ? "50%" : shape === "rounded" ? "15px" : "0")};
`;

const FallbackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 50%;
    height: 50%;
  }
`;

export default ImageBox;
