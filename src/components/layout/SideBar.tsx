import Flex from "@components/shared/Flex";
import Spacing from "@components/shared/Spacing";
import MyText from "@components/shared/Text";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import { spacing } from "@styles/spacingPalette";
import { boxShadow } from "@styles/utils";
import Link from "next/link";
import { useRouter } from "next/router";

const sideBar = [
  { link: "/", title: "홈", icon: "🏠" },
  { link: "/webfolder", title: "자료실", icon: "📁" },
  // { link: "/approval", title: "전자결제", icon: "📝" },
  { link: "/board", title: "게사판", icon: "📢" },
  { link: "/org/setting", title: "사원 권한 관리", icon: "⚙️" },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <SidebarWrapper>
      <Flex
        align="center"
        css={css`
          padding: 0 24px;
          height: 64px;
        `}
      >
        <MyText typography="t4">SevenFS 그룹웨어</MyText>
      </Flex>

      <Spacing size={spacing.lg} />
      <Flex direction="column">
        {sideBar.map((sideBar) => (
          <NavItem key={sideBar.link} href={sideBar.link}>
            {sideBar.icon}{" "}
            <MyText
              color={router.pathname === sideBar.link ? "primary" : "textMutedColor"}
              fontWeight={router.pathname === sideBar.link ? "bold" : "normal"}
            >
              {sideBar.title}
            </MyText>
          </NavItem>
        ))}
      </Flex>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  height: 100vh;
  background-color: ${colors.sideBarColor};

  display: flex;
  flex-direction: column;

  ${boxShadow}
`;

const NavItem = styled(Link)`
  padding: 14px 24px;

  &:hover {
    background-color: ${colors.sideBarHoverColor};
  }
`;
