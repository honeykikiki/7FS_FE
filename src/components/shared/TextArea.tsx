import React, { useRef, useEffect, TextareaHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";

export const Textarea = styled.textarea`
  border: 1px solid ${colors.inputBorder};
  background-color: ${colors.transparent};
  color: ${colors.textColor};
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
  resize: none; /* 사용자가 임의로 크기 조절 못하도록 */
  overflow: hidden; /* 내용이 넘칠 때 스크롤이 아닌 높이를 조절 */
  padding: 16px 16px;
  font-size: 16px; /* 최소 16px로 설정 */

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }

  &[aria-invalid="true"] {
    border-color: ${colors.danger};
    background-color: ${colors.danger100};
  }
`;

type AutoResizingTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const AutoResizingTextarea: React.FC<AutoResizingTextareaProps> = (props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // 높이 초기화
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // 내용에 맞게 높이 조절
    }
  };

  useEffect(() => {
    adjustHeight(); // 초기 로드 시 높이 조정
  }, []);

  return (
    <Textarea
      ref={textareaRef}
      onInput={adjustHeight} // 입력할 때마다 높이 조정
      {...props}
    />
  );
};

export default AutoResizingTextarea;
