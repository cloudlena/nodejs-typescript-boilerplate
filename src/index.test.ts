import { expect } from "chai";

import { projectSize } from "./index";

describe("projectSize", () => {
  it("returns a number", () => {
    const result = projectSize();
    expect(result).to.be.a("number");
  });
});
