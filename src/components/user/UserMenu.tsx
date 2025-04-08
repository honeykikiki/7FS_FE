// components/shared/UserMenu.tsx
import { useContext } from "react";
import MyText from "@components/shared/Text";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import { useBottomSheetContext } from "src/context/BottomSheetContext";
import ThemeContext from "src/context/ThemeContext";

interface UserMenuProps {
  onLogout: () => void;
}

export default function UserMenu({ onLogout }: UserMenuProps) {
  const themeContext = useContext(ThemeContext);
  const { close } = useBottomSheetContext();

  const toggleTheme = () => {
    themeContext.toggleMode();
    console.log("??");

    close();
  };

  return (
    <SheetWrapper>
      <MenuItem onClick={toggleTheme}>
        <MyText>{themeContext.theme === "dark" ? "☀️ 라이트 모드" : "🌙 다크 모드"}</MyText>{" "}
      </MenuItem>
      <MenuItem onClick={onLogout}>
        <MyText>🚪 로그아웃</MyText>{" "}
      </MenuItem>
      <MenuItem onClick={close}>
        <MyText>닫기</MyText>{" "}
      </MenuItem>
    </SheetWrapper>
  );
}

const SheetWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MenuItem = styled.button`
  font-size: 16px;
  padding: 12px;
  background: ${colors.box};
  border-radius: 8px;
  border: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: ${colors.hover};
  }
`;
