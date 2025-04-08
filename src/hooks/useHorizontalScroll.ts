import { useRef, MutableRefObject, MouseEvent } from "react";

interface UseHorizontalScrollReturn {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  onMouseDown: (e: MouseEvent) => void;
  onMouseLeave: () => void;
  onMouseUp: () => void;
  onMouseMove: (e: MouseEvent) => void;
}

function useHorizontalScroll(scrollSpeed?: number): UseHorizontalScrollReturn {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDown = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);

  const onMouseDown = (e: MouseEvent) => {
    if (!containerRef.current) return;
    isDown.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown.current = false;
  };

  const onMouseUp = () => {
    isDown.current = false;
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDown.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * (scrollSpeed ?? 3); // 스크롤 속도 조절
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return {
    containerRef,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
  };
}

export default useHorizontalScroll;
