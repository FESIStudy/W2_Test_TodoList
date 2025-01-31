describe("AddInput Component", () => {
  // 1. 컴포넌트가 정상적으로 렌더링되는지 테스트
  test("should render input field and submit button correctly", () => {
    // - `input` 필드가 존재하는지 확인
    // - `추가하기` 버튼이 존재하는지 확인
    // - `input`의 placeholder가 올바르게 표시되는지 확인
    // - 버튼이 기본적으로 비활성화(`disabled`)인지 테스트
  });

  // 2. 사용자가 입력을 하면 input 값이 변경되는지 테스트
  test("should update input value when user types", () => {
    // - `input` 필드에 값 입력
    // - `input`의 `value`가 변경되었는지 확인
  });

  // 3. 입력 값이 있을 때 버튼이 활성화되는지 테스트
  test("should enable submit button when input is not empty", () => {
    // - `input`이 비어있을 때 버튼이 `disabled` 상태인지 확인
    // - 값을 입력하면 버튼이 활성화(`enabled`)되는지 확인
  });

  // 4. 버튼 클릭 시 onSubmit 이벤트가 실행되는지 테스트
  test("should call createItem and update state when submitting a new todo", async () => {
    // - `createItem`이 호출되었는지 확인
    // - `setAllItems`가 정상적으로 실행되는지 확인
    // - 입력 필드가 비워지는지 테스트
  });

  // 5. API 요청이 실패했을 때 예외 처리가 정상적으로 동작하는지 테스트
  test("should handle API failure correctly", async () => {
    // - `createItem`이 실패했을 때 `alert`이 호출되는지 확인
    // - 실패 시 `location.reload()`가 실행되는지 검증
  });
});
