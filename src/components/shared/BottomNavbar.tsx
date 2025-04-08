import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import Link from "next/link";
import { useRouter } from "next/router";
import Flex from "./Flex";
import Icons from "./Icons";
import Spacing from "./Spacing";
import MyText from "./Text";

function BottomNavBar() {
  const router = useRouter();

  const selected = router.pathname;

  return (
    <Container>
      <Flex
        justify="space-around"
        css={css`
          padding: 16px 0;
          position: relative;
          margin: 0 auto;
          max-width: var(--max-width);
          background: #fff;
          border-top: 1px solid #f9f9f9;
          background-color: ${colors.background};
        `}
      >
        <Link href={"/"}>
          <Flex direction="column" align="center">
            <Icons.Home color={selected === "/" ? "primary" : undefined} />
            <Spacing size={2} />
            <MyText typography="t7" fontWeight="normal" color={selected === "/" ? "primary" : undefined}>
              홈
            </MyText>
          </Flex>
        </Link>
        <Link href={"/group"}>
          <Flex direction="column" align="center">
            <Icons.Class color={selected === "/group" ? "primary" : undefined} />
            <Spacing size={2} />
            <MyText typography="t7" fontWeight="normal" color={selected === "/group" ? "primary" : undefined}>
              모임
            </MyText>
          </Flex>
        </Link>
        <Link href={"/my"}>
          <Flex direction="column" align="center">
            <Icons.User color={selected === "/my" ? "primary" : undefined} />
            <Spacing size={2} />
            <MyText typography="t7" fontWeight="normal" color={selected === "/my" ? "primary" : undefined}>
              내 정보
            </MyText>
          </Flex>
        </Link>
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: var(--navbar-z-index);
`;

export default BottomNavBar;
