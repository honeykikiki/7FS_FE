import { useContext } from "react";
import BottomSheetContent from "@components/shared/BottomSheetItem";
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

    close();
  };

  return (
    <BottomSheetContent>
      <BottomSheetContent.Item onClick={toggleTheme}>
        <BottomSheetContent.Text>
          {themeContext.theme === "dark" ? "☀️ 라이트 모드" : "🌙 다크 모드"}
        </BottomSheetContent.Text>
      </BottomSheetContent.Item>
      <BottomSheetContent.Item
        onClick={() => {
          onLogout();
          close();
        }}
      >
        <BottomSheetContent.Text>🚪 로그아웃</BottomSheetContent.Text>
      </BottomSheetContent.Item>
      <BottomSheetContent.Item onClick={close}>
        <BottomSheetContent.Text>닫기</BottomSheetContent.Text>
      </BottomSheetContent.Item>
    </BottomSheetContent>
  );
}
