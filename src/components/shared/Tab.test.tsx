// import React, { useState } from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import Tab from "./Tab";

// describe("탭 컴포넌트 테스트", () => {
//   const tabList = ["홈", "게시판", "일정", "앨범"];

//   it("탭 컴포넌트가 잘 렌더링되는가?", () => {
//     const TestComponent = () => {
//       const [currentTab, setCurrentTab] = useState("홈");

//       return (
//         <Tab children={[]} tabList={[]}>
//           <Tab.Header currentTab={currentTab} tabList={tabList} onClick={(clickTab) => setCurrentTab(clickTab)} />
//           {currentTab === "홈" && <div>홈 컴포넌트</div>}
//           {currentTab === "게시판" && <div>게시판 컴포넌트</div>}
//           {currentTab === "일정" && <div>일정 컴포넌트</div>}
//           {currentTab === "앨범" && <div>앨범 컴포넌트</div>}
//         </Tab>
//       );
//     };

//     render(<TestComponent />);

//     // 기본 탭이 잘 렌더링되었는지 확인
//     expect(screen.getByText("홈 컴포넌트")).toBeInTheDocument();
//   });

//   it("탭 클릭 시 올바른 내용이 표시되는가?", () => {
//     const TestComponent = () => {
//       const [currentTab, setCurrentTab] = useState("홈");

//       return (
//         <Tab children={[]} tabList={[]}>
//           <Tab.Header currentTab={currentTab} tabList={tabList} onClick={(clickTab) => setCurrentTab(clickTab)} />
//           {currentTab === "홈" && <div>홈 컴포넌트</div>}
//           {currentTab === "게시판" && <div>게시판 컴포넌트</div>}
//           {currentTab === "일정" && <div>일정 컴포넌트</div>}
//           {currentTab === "앨범" && <div>앨범 컴포넌트</div>}
//         </Tab>
//       );
//     };

//     render(<TestComponent />);

//     // '일정' 탭 클릭
//     fireEvent.click(screen.getByText("일정"));

//     // '일정' 컴포넌트가 렌더링되었는지 확인
//     expect(screen.getByText("일정 컴포넌트")).toBeInTheDocument();
//   });
// });
