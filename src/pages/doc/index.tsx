import { useContext, useState } from "react";

import Button from "@components/shared/Button";
import CheckBox from "@components/shared/CheckBox";

import Flex from "@components/shared/Flex";
import Frame from "@components/shared/Frame";
import { InputFiled } from "@components/shared/InputFiled";
import MyBtn from "@components/shared/MyBtn";
import SearchForm from "@components/shared/SearchForm";
import Selected from "@components/shared/Selected";
import Spacing from "@components/shared/Spacing";
import StepBar from "@components/shared/StepBar";
import Tab from "@components/shared/Tab";
import MyText from "@components/shared/Text";
import AutoResizingTextarea from "@components/shared/TextArea";
import ToggleSwitch from "@components/shared/ToggleSwitch";
import { useAlertContext } from "src/context/AlertContext";
import ThemeContext from "src/context/ThemeContext";

const tabList = ["홈", "게시판", "일정", "앨범"];

function Page() {
  const themeContext = useContext(ThemeContext);
  const [bSignup, setBSignup] = useState(false);
  const [select, setSelect] = useState("최근 가입 순");

  const { open } = useAlertContext();

  return (
    <Frame title="doc">
      <MyText typography="t1">DOCS 설명서</MyText>
      <Spacing size={40} />

      <Selected
        title="최근 가입 순2"
        currentItem={select}
        setCurrentItem={setSelect}
        itemList={["최근 가입 순", "마지막 방문 순", "게시글 많은 순", "일정 참여 많은 순"]}
        size="md"
      />

      <MyText display="block" typography="t1">
        모드 토글 버튼
      </MyText>
      <MyBtn>myButton</MyBtn>
      <Button
        size="lg"
        onClick={() => {
          themeContext.toggleMode();
        }}
      >
        토글 버튼
      </Button>

      <Button
        size="lg"
        onClick={() => {
          open({
            title: "무었이 필요하시죠?",
            description:
              "이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요.이것이 필요하면 확인을 눌러주세요",
            onCancelClick: () => {
              console.log("onCancelClick");
            },
            onConfirmClick: () => {
              console.log("onConfirmClick");
            },
            // bStretchButton: false,
          });
        }}
      >
        Alert 버튼
      </Button>

      <Spacing size={40} />
      <MyText display="block">Button</MyText>
      <Button size="lg">확인</Button>
      <Button size="md">확인</Button>
      <Button size="sm">확인</Button>
      <Button size="xs">확인</Button>

      <Spacing size={20} />
      <MyText display="block">Full Button</MyText>
      <Button size="lg" full={true}>
        확인 lg
      </Button>
      <Spacing size={10} />
      <Button size="md" full={true}>
        확인 md
      </Button>
      <Spacing size={10} />
      <Button size="sm" full={true}>
        확인 sm
      </Button>
      <Spacing size={10} />
      <Button size="xs" full={true}>
        확인 xs
      </Button>
      <Button.Group title="Button Group">
        <Button size="lg" color="primary">
          확인
        </Button>
        <Button size="md" color="success">
          확인
        </Button>
        <Button size="sm" color="error">
          확인
        </Button>
        <Button size="xs" color="gray">
          확인
        </Button>
      </Button.Group>

      <Spacing size={30} />
      <div>
        <Button size="lg" color="primary" weak={true}>
          확인
        </Button>
        <Button size="md" color="success" weak={true}>
          확인
        </Button>
        <Button size="sm" color="error" weak={true}>
          확인
        </Button>
        <Button size="xs" color="gray" weak={true}>
          확인
        </Button>
      </div>

      <Spacing size={10} />
      <MyText typography="t1">토글 버튼</MyText>
      <ToggleSwitch isSelected={false} />
      <ToggleSwitch isSelected={true} />

      <Spacing size={30} />
      <MyText typography="t1">input</MyText>
      <InputFiled label="이름" maxLength={24} helpMessage="sss" />
      <InputFiled label="이름" hasError={true} />

      <Spacing size={30} />
      <MyText typography="t1">StepBar</MyText>
      <StepBar step={5} currentStep={2} />

      <Spacing size={30} />

      <Spacing size="lg" />
      <Flex direction="column">
        {/* <Selected
          title="최근 가입 순"
          currentItem={"최근 가입 순"}
          itemList={["최근 가입 순", "마지막 방문 순", "게시글 많은 순", "일정 참여 많은 순"]}
          size="xs"
        />
        <Selected
          title="최근 가입 순2"
          currentItem={"최근 가입 순"}
          itemList={["최근 가입 순", "마지막 방문 순", "게시글 많은 순", "일정 참여 많은 순"]}
          size="sm"
        />
        <Selected
          title="최근 가입 순"
          currentItem={"최근 가입 순"}
          itemList={["최근 가입 순", "마지막 방문 순", "게시글 많은 순", "일정 참여 많은 순"]}
          size="md"
        />
        <Selected
          title="최근 가입 순"
          currentItem={"최근 가입 순"}
          itemList={["최근 가입 순", "마지막 방문 순", "게시글 많은 순", "일정 참여 많은 순"]}
          size="lg"
        /> */}
      </Flex>

      <Spacing size={40} />
      <CheckBox
        isChecked={bSignup}
        onClick={() => {
          setBSignup((prev) => !prev);
        }}
        title="가입 방식"
        subText="누구나 가입할 수 있어요."
      />

      <Spacing size={40} />
      <Tab tabList={tabList}>
        <MyText></MyText>
        <MyText></MyText>
        {/* {currentTab === "홈" ? "홈 컴포넌트" : null}
        {currentTab === "게시판" ? "게시판 컴포넌트" : null}
        {currentTab === "일정" ? "일정 컴포넌트" : null}
        {currentTab === "앨범" ? "앨범 컴포넌트" : null} */}
      </Tab>

      <Spacing size={40} />

      <SearchForm />
      <AutoResizingTextarea />

      <Spacing size={40} />
    </Frame>
  );
}

export default Page;
