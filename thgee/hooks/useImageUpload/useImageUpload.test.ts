import { renderHook } from "@testing-library/react";
import { useImageUpload } from "./useImageUpload";
import { uploadImage } from "../../services/apis/imageApi";

jest.mock("../../services/apis/imageApi", () => ({
  uploadImage: jest.fn(),
}));
describe("useImageUpload", () => {
  let setItem = jest.fn();
  let setIsEditing = jest.fn();
  const alertMock = jest.spyOn(window, "alert");

  beforeEach(() => {
    jest.resetAllMocks(); // 각 테스트 실행 전 mock 초기화
  });

  it("파일이 없으면 아무 동작도 하지 않는다.", async () => {
    const { result } = renderHook(() => useImageUpload(setItem, setIsEditing));

    const event = {
      target: { files: null },
    } as React.ChangeEvent<HTMLInputElement>;

    // 파일 업로드
    await result.current.handleFileUpload(event);

    // 업로드 성공 로직 실행 안되는지 체크
    expect(setItem).not.toHaveBeenCalled();
    expect(setIsEditing).not.toHaveBeenCalled();
  });

  it("파일 이름이 영어가 아니면 알림을 띄우고 업로드하지 않는다.", async () => {
    const { result } = renderHook(() => useImageUpload(setItem, setIsEditing));

    // mock 파일 생성
    const mockFile = new File([""], "한글이름.png", { type: "image/png" });
    const event = {
      target: {
        files: [mockFile],
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    // 파일 업로드
    await result.current.handleFileUpload(event);

    // alert 실행
    expect(alertMock).toHaveBeenCalledWith(
      "파일 이름은 영어로만 구성되어야 합니다.",
    );

    // 업로드 성공 로직 실행 안되는지 체크
    expect(setItem).not.toHaveBeenCalled();
    expect(setIsEditing).not.toHaveBeenCalled();

    alertMock.mockRestore();
  });

  it("파일 크기가 5MB를 초과하면 알림을 띄우고 업로드하지 않는다.", async () => {
    const { result } = renderHook(() => useImageUpload(setItem, setIsEditing));

    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    // 크기가 5MB를 초과하는 파일
    const mockLargeFile = new File(
      ["".padStart(6 * 1024 * 1024)],
      "largefile.png",
      { type: "image/png" },
    );

    const event = {
      target: { files: [mockLargeFile] },
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    // 파일 업로드
    await result.current.handleFileUpload(event);

    // alert 실행
    expect(alertMock).toHaveBeenCalledWith("파일 크기가 5MB를 초과합니다.");

    // 성공 로직 실행 안 됨
    expect(setItem).not.toHaveBeenCalled();
    expect(setIsEditing).not.toHaveBeenCalled();

    alertMock.mockRestore();
  });

  it("파일 업로드 후 setItem과 setIsEditing이 호출된다.", async () => {
    const { result } = renderHook(() => useImageUpload(setItem, setIsEditing));

    const mockFile = new File(["test"], "test.png", { type: "image/png" });

    // 독립적인 테스트를 위해 API 함수를 mocking
    (uploadImage as jest.Mock).mockResolvedValue(
      "https://example.com/image.png",
    );

    const event = {
      target: { files: [mockFile] },
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    await result.current.handleFileUpload(event);

    // 한 번 호출되었고, 호출되었을 때 이미지 url을 정상적으로 리턴했는지 확인
    expect(uploadImage).toHaveBeenCalledTimes(1);
    console.log((uploadImage as jest.Mock).mock.results[0].value);
    expect((uploadImage as jest.Mock).mock.results[0].value).resolves.toBe(
      "https://example.com/image.png",
    );

    // 성공 로직 실행
    expect(setItem).toHaveBeenCalledWith(expect.any(Function));
    expect(setIsEditing).toHaveBeenCalledWith(true);
  });
});
