import { projectSize } from "./index";

describe("projectSize", (): void => {
  it("returns a number", (): void => {
    const result = projectSize();
    expect(typeof result).toBe("number");
  });
});
