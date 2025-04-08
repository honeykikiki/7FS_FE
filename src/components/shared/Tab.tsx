import { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "@styles/colorPlatte";
import Flex from "./Flex";
import Spacing from "./Spacing";
import MyText from "./Text";

// Tab 컴포넌트: 자식 컴포넌트를 감싸는 기본 구조
function Tab({ children, tabList, padding = 0 }: { children: React.ReactNode[]; tabList: string[]; padding?: number }) {
  const [currentTab, setCurrentTab] = useState("홈");

  return (
    <Flex direction="column">
      <Tab.Header
        padding={padding}
        currentTab={currentTab}
        tabList={tabList}
        onClick={(clickTab) => {
          setCurrentTab(clickTab);
        }}
      />

      {tabList.map((item, idx) => {
        if (item === currentTab) {
          return children[idx];
        }

        return null;
      })}
    </Flex>
  );
}

// Header 컴포넌트: 탭 리스트를 표시하는 헤더 부분
function Header({
  currentTab,
  tabList,
  onClick,
  padding,
}: {
  currentTab: string;
  tabList: string[];
  onClick: (clickTab: string) => void;
  padding: number;
}) {
  return (
    <Flex
      as="ul"
      css={[
        HeaderStyles,
        css`
          padding-top: ${padding}px;
        `,
      ]}
    >
      {tabList.map((tab, idx) => (
        <HeaderItem key={tab + idx} isActive={currentTab === tab} onClick={() => onClick(tab)}>
          <MyText color={currentTab === tab ? "textColor" : "textSubColor"}>{tab}</MyText>
          <Spacing size="xs" />
        </HeaderItem>
      ))}
    </Flex>
  );
}

const HeaderStyles = css`
  position: sticky;
  top: 0;
  background-color: ${colors.background};
`;

const HeaderItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  position: relative;
  width: 100%;
  text-align: center;
  border-bottom: 2px solid ${colors.stepBarBg};

  ${({ isActive }) =>
    isActive
      ? css`
          &::after {
            position: absolute;
            content: "";
            left: 0;
            bottom: -2px;
            width: 100%;
            border-bottom: 2px solid ${colors.textColor};
          }
        `
      : css`
          &:hover {
            border-bottom: 2px solid ${colors.black};
            opacity: 50%;

            span {
              color: ${colors.textColor};
            }
          }
        `}
`;

Tab.Header = Header;

export default Tab;
