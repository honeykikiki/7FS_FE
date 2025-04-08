import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import MyText from "./Text";

const Container = styled.div<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${colors.inputBorder};
  border-radius: 10px;
  padding: 16px;
  background-color: ${({ isChecked }) => (isChecked ? colors.selectedBg : colors.white)};
  transition: background-color 0.3s ease;
  cursor: pointer;
`;

const Circle = styled.div<{ isChecked: boolean }>`
  width: 24px;
  height: 24px;
  border: 1px solid ${({ isChecked }) => (isChecked ? colors.primary : colors.inputBorder)};
  background-color: ${({ isChecked }) => (isChecked ? colors.primary : colors.white)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;

  &::before {
    content: "";
    width: 14px;
    height: 14px;
    background-color: ${({ isChecked }) => (isChecked ? colors.onlyWhite : "transparent")};
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }
`;

interface CheckBoxProps {
  isChecked: boolean;
  onClick: () => void;
  title: string;
  subText: string;
}

function CheckBox({ isChecked, onClick, title, subText }: CheckBoxProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <Container
      onClick={onClick}
      isChecked={isChecked}
      role="checkbox"
      aria-checked={isChecked}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-labelledby="checkbox-label"
    >
      <MyText.Group title={title} subText={subText} />
      <Circle isChecked={isChecked} />
    </Container>
  );
}

export default CheckBox;
