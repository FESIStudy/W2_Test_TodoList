describe("Gnb Component", () => {
  // 1. 컴포넌트가 정상적으로 렌더링되는지 테스트
  test("should render navigation bar and logo images", () => {
    // - `nav` 요소가 존재하는지 확인
    // - `logoSmall`과 `logoLarge` 이미지가 올바르게 렌더링되는지 확인
  });

  // 2. 로고 클릭 시 현재 페이지가 `HOME_PAGE_ROUTE`이면 새로고침되는지 테스트
  test("should reload the page when logo is clicked on the home page", () => {
    // - `usePathname`을 Mock 처리하여 `HOME_PAGE_ROUTE`를 반환하도록 설정
    // - `window.location.reload`를 Mock 처리
    // - 로고 클릭 후 `window.location.reload()`가 실행되었는지 확인
  });

  // 3. 로고 클릭 시 다른 페이지에 있을 경우 `router.push`가 실행되는지 테스트
  test("should navigate to home page when logo is clicked from another page", () => {
    // - `usePathname`을 Mock 처리하여 다른 페이지 경로를 반환하도록 설정
    // - `useRouter`의 `push` 메서드를 Mock 처리
    // - 로고 클릭 후 `router.push(HOME_PAGE_ROUTE)`가 실행되었는지 확인
  });
});
