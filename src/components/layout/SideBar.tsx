import Flex from "@components/shared/Flex";
import Icons from "@components/shared/Icons";
import Spacing from "@components/shared/Spacing";
import MyText from "@components/shared/Text";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import { spacing } from "@styles/spacingPalette";
import Link from "next/link";

export default function Sidebar() {
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
        <NavItem href="/">
          <Icons.Home size={20} /> <MyText color="textMutedColor">홈</MyText>
        </NavItem>
        <NavItem href="/dataRoom">📁 자료실</NavItem>
        <NavItem href="/approval">📝 전자결재</NavItem>
        <NavItem href="/board">📢 게시판</NavItem>
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
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled(Link)`
  padding: 14px 24px;
  color: ${colors.textColor};
  text-decoration: none;
  &:hover {
    background-color: ${colors.sideBarHoverColor};
  }
`;

// const AppTitle = styled.MyText()`
//   padding: 0 24px;
//   height: 64px;
// `;
