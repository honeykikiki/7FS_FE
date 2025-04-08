import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("ButtonGroup 컴포넌트 테스트", () => {
  it("ButtonGroup이 제목과 함께 잘 렌더링되는가?", () => {
    render(
      <Button.Group title="버튼 그룹">
        <Button>버튼 1</Button>
        <Button>버튼 2</Button>
      </Button.Group>,
    );
    expect(screen.getByText("버튼 그룹")).toBeInTheDocument();
    expect(screen.getByText("버튼 1")).toBeInTheDocument();
    expect(screen.getByText("버튼 2")).toBeInTheDocument();
  });

  it("ButtonGroup이 제목 없이 잘 렌더링되는가?", () => {
    render(
      <Button.Group>
        <Button>버튼 1</Button>
        <Button>버튼 2</Button>
      </Button.Group>,
    );
    expect(screen.queryByText("버튼 그룹")).toBeNull();
    expect(screen.getByText("버튼 1")).toBeInTheDocument();
    expect(screen.getByText("버튼 2")).toBeInTheDocument();
  });
});

describe("Button 스타일 테스트", () => {
  it("large size 버튼 스타일 확인", () => {
    const { container } = render(<Button size="lg">Large Button</Button>);
    const button = container.querySelector("button");
    expect(button).toHaveStyle(`font-size: 20px`);
  });

  it("full width 버튼 스타일 확인", () => {
    const { container } = render(<Button full={true}>Full Width Button</Button>);
    const button = container.querySelector("button");
    expect(button).toHaveStyle(`width: 100%`);
  });

  it("disabled 버튼 스타일 확인", () => {
    const { container } = render(<Button disabled={true}>Disabled Button</Button>);
    const button = container.querySelector("button");
    expect(button).toHaveStyle(`opacity: 0.25`);
    expect(button).toHaveStyle(`cursor: not-allowed`);
  });
});
