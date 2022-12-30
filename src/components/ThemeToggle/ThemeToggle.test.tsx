import { RenderResult, render } from "@src/utils";
import { ThemeToggle } from "./ThemeToggle";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { flushSync } from "react-dom";

describe("ThemeToggle", () => {
  let result: RenderResult;

  beforeEach(() => {
    result = render(<ThemeToggle />);
  });

  afterEach(() => {
    result.unmount();
  });

  it(`default theme is set to be dark`, () => {
    const { baseElement } = result;
    expect(baseElement.getAttribute("data-theme")).toBe("dark");
  });

  it(`switch button is clickable`, async () => {
    const { getByRole } = result;
    const button = getByRole("switch", { name: "テーマ切り替えボタン" });
    const clickEvent = await act(() =>
      button.dispatchEvent(new MouseEvent("click"))
    );
    expect(clickEvent).toBe(true);
  });
});
