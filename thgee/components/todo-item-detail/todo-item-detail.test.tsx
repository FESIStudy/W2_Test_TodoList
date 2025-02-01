describe("TodoItemDetail Component", () => {
  // 1. 컴포넌트가 정상적으로 렌더링되는지 테스트
  test("should render input field and check button", () => {
    // - `input` 필드가 존재하는지 확인
    // - 체크 버튼 (`Image` 컴포넌트)이 올바르게 렌더링되는지 확인
    // - `isDone` 상태에 따라 배경색(`bgStyle`)이 올바르게 적용되는지 검증
  });

  // 2. 체크 버튼을 클릭하면 `isCompleted` 상태가 변경되는지 테스트
  test("should toggle isCompleted state when check button is clicked", () => {
    // - `setIsEditing(true)`가 호출되는지 확인
    // - `setItem`이 호출되어 `isCompleted` 값이 변경되는지 검증
  });

  // 3. 입력 필드에서 할 일 이름을 변경하면 `setItem`이 호출되는지 테스트
  test("should update item name when user types in input", () => {
    // - `input` 필드에 값을 입력하면 `setIsEditing(true)`가 호출되는지 확인
    // - `setItem`이 실행되고 새로운 값이 반영되는지 테스트
  });

  // 4. 입력 값이 빈 문자열일 경우 alert이 실행되는지 테스트
  test("should show an alert when input value is empty", () => {
    // - `fireEvent.change`를 사용하여 빈 문자열 입력
    // - `window.alert`를 Mock 처리하여 호출 여부 확인
  });
});
