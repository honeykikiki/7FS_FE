import Header from "@components/layout/Header";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import { useRouter } from "next/router";
import { useAuthContext } from "src/context/AuthContext";
import SideBar from "../layout/SideBar";
import Flex from "./Flex";

interface FrameProps {
  title: string;
  children: React.ReactNode;
}

function Frame({ children, title }: FrameProps) {
  const router = useRouter();
  const { emp } = useAuthContext();

  if (emp === null) {
    return <></>;
  }

  return (
    <Container>
      <Flex direction="column">
        <SideBar />
        <Header title={title} />
        <Content>{children}</Content>
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1;
  padding: 32px;
  margin-top: 64px;
  background-color: ${colors.background};
  overflow-y: auto;
  margin-left: 220px;
`;

export default Frame;
