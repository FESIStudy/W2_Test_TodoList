describe("TodoItem Component", () => {
  // 1. 컴포넌트가 정상적으로 렌더링되는지 테스트
  test("should render todo item with correct text and styles", () => {
    // - `li` 요소가 존재하는지 확인
    // - `isDone` 상태에 따라 `배경색(bgStyle)`, `텍스트 스타일(textStyle)`, `체크 아이콘(checkIcon)`이 올바르게 적용되는지 검증
    // - `Link`가 `TODO_DETAIL_ROUTE/${itemId}`로 이동하는지 확인
    // - `text`가 50자 이상이면 `...`이 붙어 잘리는지 확인
  });

  // 2. 체크 버튼을 클릭하면 `isCompleted` 상태가 변경되는지 테스트
  test("should toggle isCompleted state when check button is clicked", () => {
    // - `setAllItems`이 호출되어 상태가 변경되는지 확인
    // - `updateItem` API 요청이 실행되는지 검증
  });

  // 3. API 요청이 실패하면 `alert`이 호출되고 `location.reload()`가 실행되는지 테스트
  test("should show an alert and reload page when API request fails", async () => {
    // - `updateItem`을 실패하도록 Mock 처리
    // - `alert("할 일 상태 변경에 실패하였습니다.")`가 호출되는지 확인
    // - `location.reload()`가 실행되는지 확인
  });
});
