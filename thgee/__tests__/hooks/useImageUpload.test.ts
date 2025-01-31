describe("useImageUpload Hook", () => {
  // 1. 파일 업로드 시 올바른 파일이 선택되었는지 테스트
  test("should handle file selection correctly", () => {
    // - `handleFileUpload`가 실행되었는지 확인
    // - `fileInputRef`가 존재하는지 검증
  });

  // 2. 파일 이름이 영어가 아닐 경우 `alert` 실행 테스트
  test("should show an alert when file name is not in English", async () => {
    // - 한글 파일명을 가진 파일을 선택
    // - `window.alert`을 Mock 처리하여 호출 여부 확인
  });

  // 3. 파일 크기가 5MB를 초과할 경우 `alert` 실행 테스트
  test("should show an alert when file size exceeds 5MB", async () => {
    // - 5MB보다 큰 파일을 선택
    // - `window.alert`을 Mock 처리하여 호출 여부 확인
  });

  // 4. 정상적인 파일 업로드 시 `uploadImage` API 호출 및 상태 업데이트 테스트
  test("should call uploadImage API and update item when valid file is uploaded", async () => {
    // - 정상적인 파일을 선택
    // - `uploadImage` API가 호출되었는지 확인
    // - `setItem`이 실행되고 `imageUrl`이 업데이트되는지 검증
    // - `setIsEditing(true)`가 실행되는지 테스트
  });
});
