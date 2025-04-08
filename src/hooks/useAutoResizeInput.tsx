import { useRef, useEffect } from "react";

function useAutoResizeTextarea<T extends HTMLTextAreaElement>() {
  const textareaRef = useRef<T>(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    const adjustHeight = () => {
      if (textarea) {
        textarea.style.height = "auto"; // 높이 초기화
        textarea.style.height = `${textarea.scrollHeight}px`; // 내용에 맞게 높이 조절
      }
    };

    if (textarea) {
      adjustHeight(); // 초기 로드 시 높이 조정

      // 이벤트 리스너 추가
      textarea.addEventListener("input", adjustHeight);

      // 클린업 함수에서 이벤트 리스너 제거
      return () => {
        textarea.removeEventListener("input", adjustHeight);
      };
    }
  }, []);

  return textareaRef;
}

export default useAutoResizeTextarea;
