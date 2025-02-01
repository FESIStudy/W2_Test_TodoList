import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ActionBtn from "../action-btn/action-btn";

// Jest에서 window.innerWidth를 변경할 수 있도록 설정
const resizeWindow = (width: number) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};

describe("ActionBtn 반응형 테스트", () => {
  test("뷰포트가 480px 미만일 때 '추가하기' 텍스트가 숨겨지는지 확인", () => {
    resizeWindow(49);
    render(<ActionBtn type="add" onClick={() => {}} />);

    const addButtonText = screen.queryByText("추가하기");
    const style = window.getComputedStyle(addButtonText!);
    // 요소가 존재하지만, display: none인지 확인
    console.log(style);
    expect(style.display).toBe("none");
  });
});
