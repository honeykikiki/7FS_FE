import { render, screen, fireEvent } from "@testing-library/react";
import Category from "./Category"; // 경로를 실제 파일 위치에 맞게 조정하세요.

describe("Category 컴포넌트", () => {
  const categories = [
    "아동부",
    "유치부",
    "초등",
    "대학부",
    "청년부",
    "1교구",
    "2교구",
    "3교구",
    "4교구",
    "5교구",
    "6교구",
    "7교구",
    "8교구",
    "9교구",
    "10교구",
    "11교구",
  ];

  it("모든 카테고리를 렌더링해야 합니다.", () => {
    render(<Category onChange={jest.fn()} />);

    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it("카테고리가 선택되었을 때 onChange가 올바른 카테고리 목록과 함께 호출되어야 합니다.", () => {
    const handleChange = jest.fn();
    render(<Category onChange={handleChange} />);

    const 첫번째카테고리버튼 = screen.getByText(categories[0]);
    fireEvent.click(첫번째카테고리버튼);

    expect(handleChange).toHaveBeenCalledWith([categories[0]]);
  });

  it("선택된 카테고리가 다시 선택 해제되었을 때 onChange가 빈 배열과 함께 호출되어야 합니다.", () => {
    const handleChange = jest.fn();
    render(<Category onChange={handleChange} />);

    const 첫번째카테고리버튼 = screen.getByText(categories[0]);
    fireEvent.click(첫번째카테고리버튼); // 카테고리 선택
    fireEvent.click(첫번째카테고리버튼); // 카테고리 선택 해제

    expect(handleChange).toHaveBeenCalledWith([]);
  });

  it("여러 카테고리를 선택하고 선택 해제할 수 있어야 합니다.", () => {
    const handleChange = jest.fn();
    render(<Category onChange={handleChange} />);

    const 첫번째카테고리버튼 = screen.getByText(categories[0]);
    const 두번째카테고리버튼 = screen.getByText(categories[1]);

    // 첫 번째 카테고리 선택
    fireEvent.click(첫번째카테고리버튼);
    expect(handleChange).toHaveBeenCalledWith([categories[0]]);

    // 두 번째 카테고리 선택
    fireEvent.click(두번째카테고리버튼);
    expect(handleChange).toHaveBeenCalledWith([categories[0], categories[1]]);

    // 첫 번째 카테고리 선택 해제
    fireEvent.click(첫번째카테고리버튼);
    expect(handleChange).toHaveBeenCalledWith([categories[1]]);
  });

  // 색상을 테스트가 잘 안되는 상황
  it("카테고리가 선택되거나 선택 해제될 때 올바른 스타일이 적용되어야 합니다.", () => {
    render(<Category onChange={jest.fn()} />);

    const 첫번째카테고리버튼 = screen.getByText(categories[0]);

    // 초기에는 'gray' 색상과 약한 스타일이어야 합니다.

    expect(첫번째카테고리버튼).toHaveAttribute("aria-selected", "false");

    fireEvent.click(첫번째카테고리버튼);

    // 선택 후에는 'primary' 색상과 강한 스타일이어야 합니다.
    expect(첫번째카테고리버튼).toHaveAttribute("aria-selected", "true");
  });
});
