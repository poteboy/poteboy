import { render } from "../../../utils";
import { Spacer } from "./Spacer";

describe(`Spacer`, () => {
  it(`renders without errors`, () => {
    const { container } = render(<Spacer size={1} />);
    expect(container.innerHTML).toBeTruthy();
  });
});
