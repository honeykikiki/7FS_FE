import { CSSProperties } from "react";
import Flex from "@components/shared/Flex";
import Spacing from "@components/shared/Spacing";
import MyText from "@components/shared/Text";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import { spacing } from "@styles/spacingPalette";
import { boxShadow } from "@styles/utils";

interface OrgFrameProps {
  children: React.ReactNode;
  title: string;
  subContent?: React.ReactNode;
  style?: CSSProperties; // 추가된 부분: css prop을 받을 수 있도록 설정
}

function OrgFrame({ children, title, subContent, style }: OrgFrameProps) {
  return (
    <Container direction="column" gap={spacing.md} style={style}>
      <Flex justify="space-between">
        <MyText typography="t2">{title}</MyText>
        {subContent}
      </Flex>
      <Spacing size={spacing.md} />
      <ScrollerContainer direction="column" gap={spacing.md}>
        {children}
      </ScrollerContainer>
    </Container>
  );
}

const Container = styled(Flex)`
  border-radius: 8px;
  border: 1px solid ${colors.grayBorder};
  padding: ${spacing.layout}px;
  background-color: ${colors.white};
  ${boxShadow}
`;

const ScrollerContainer = styled(Flex)`
  min-width: 240px;
  min-height: 75vh;
  max-height: 80vh;
  overflow-y: scroll;
  padding-right: 10px;

  /* 스크롤바 간섭 제거 (선택 사항) */
  scrollbar-gutter: stable;

  /* 웹킷 기반 브라우저에서 스크롤바 없애기 (원하면) */
  &::-webkit-scrollbar {
    width: 12px;
    background: ${colors.grayBorder};
    border-radius: 8px;
    /* background: transparent; */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.gray}; /* 스크롤 색상 */
    border-radius: 8px;
    border: 2px solid ${colors.grayBorder}; /* thumb 주변 여백처럼 보이게 */
  }
`;

export default OrgFrame;
