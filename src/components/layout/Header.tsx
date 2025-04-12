import Flex from "@components/shared/Flex";
import MyText from "@components/shared/Text";
import UserInfo from "@components/shared/UserInfo";
import UserMenu from "@components/user/UserMenu";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import { spacing } from "@styles/spacingPalette";
import { useRouter } from "next/router";
import { useAuthContext } from "src/context/AuthContext";
import { useBottomSheetContext } from "src/context/BottomSheetContext";
import apiClient from "src/remote/axios";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const router = useRouter();
  const { emp, setEmp } = useAuthContext();
  const { open } = useBottomSheetContext();

  return (
    <Container>
      <HeaderWrapper>
        <MyText typography="t1">{title}</MyText>

        <Flex align="center" gap={spacing.lg}>
          <UserInfo
            name={emp?.emplNm ?? ""}
            nameColor="textColor"
            subContent={emp?.deptNm}
            onClick={() =>
              open({
                body: (
                  <UserMenu
                    onLogout={async () => {
                      await apiClient.post("/api/token/logout");
                      setEmp(null);
                      router.replace("/auth/login");
                      // 로그 아웃
                    }}
                  />
                ),
              })
            }
          />
        </Flex>
      </HeaderWrapper>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 220px;
  width: calc(100% - 220px);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const HeaderWrapper = styled.header`
  height: 64px;
  background-color: ${colors.headerColor};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;
