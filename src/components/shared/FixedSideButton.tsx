import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import Icons from "./Icons";

interface FixedSideButtonProps {
  link: Url;
  icon?: React.ReactNode;
  right?: number;
  bottom?: number;
}

function FixedSideButton({ link, icon }: FixedSideButtonProps) {
  return (
    <Link href={link} css={{ maxWidth: "480px" }}>
      <Container>
        <PositionContainer>{icon !== undefined ? icon : <Icons.PostAdd />}</PositionContainer>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
`;

const PositionContainer = styled.div`
  position: absolute;
  bottom: 92px;
  right: 20px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export default FixedSideButton;
