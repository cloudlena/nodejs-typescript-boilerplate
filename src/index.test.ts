import { projectSize } from "./index";

describe("projectSize", () => {
  it("returns a number", () => {
    const result = projectSize();
    expect(result).toBe(128);
  });
});
