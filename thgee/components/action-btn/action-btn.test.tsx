import { render } from "@testing-library/react";
import ActionBtn from "./action-btn";

describe("actionBtn Component", () => {
  // 1. 버튼이 올바르게 렌더링되는지 테스트
  test("should render correctly with different types", () => {
    render(<ActionBtn onClick={() => {}} type="add" />);
    // - 각 버튼 타입별로 렌더링되는지 테스트 (add, delete, edit)
    // - 아이콘이 정상적으로 렌더링되는지 확인
    // - 버튼 텍스트가 올바르게 표시되는지 확인 (add는 작은 화면에서 숨겨지는지 체크)
  });

  // 2. 버튼 클릭 시 onClick 이벤트가 정상적으로 실행되는지 테스트
  test("should trigger onClick event when clicked", () => {
    // - Mock 함수 생성하여 onClick이 실행되는지 확인
    // - 버튼 클릭 후 onClick이 한 번 실행되었는지 검증
  });

  // 3. `add` 버튼이 비활성화된 상태에서 클릭되지 않는지 테스트
  test("should not be clickable when disabled", () => {
    // - active=false 상태로 버튼 렌더링
    // - fireEvent.click 실행 후 onClick 호출되지 않는지 검증
  });

  // 4. `delete` 버튼이 올바른 스타일과 텍스트를 가지는지 테스트
  test("should have the correct styles and text for delete button", () => {
    // - delete 타입으로 버튼 렌더링
    // - 스타일 클래스가 올바르게 적용되었는지 확인
    // - 텍스트가 '삭제하기'로 표시되는지 체크
  });

  // 5. `edit` 버튼이 비활성화일 때 스타일이 변경되는지 테스트
  test("should have disabled styles when inactive", () => {
    // - active=false 상태로 edit 버튼 렌더링
    // - 버튼이 disabled 상태인지 확인
    // - disabled 스타일이 적용되었는지 검증
  });
});
