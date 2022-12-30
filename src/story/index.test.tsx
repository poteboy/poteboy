import { render, RenderResult } from "../../src/utils";
import Home from "../../src/pages/index";
import userEvent from "@testing-library/user-event";

describe(`index.tsx`, () => {
  let result: RenderResult;

  beforeEach(() => {
    result = render(<Home />);
  });

  afterEach(() => {
    result.unmount();
  });

  it(`should include my handle`, () => {
    const { getByText } = result;
    expect(getByText("poteboy")).toBeTruthy();
  });

  // これはもうすぐ落とすテスト
  it(`should have a link navigating to about page`, () => {
    const { getByRole } = result;
    expect(getByRole("link", { name: "こちら" }).getAttribute("href")).toBe(
      "/about"
    );
  });
});
