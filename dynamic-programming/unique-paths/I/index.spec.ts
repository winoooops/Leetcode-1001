import { uniquePath } from "./index"

describe("Leetcode 62: Unique Path", () => {
  it("should be 28", () => {
    expect(uniquePath(3, 7)).toBe(28);
  })

  it("should be 3", () => {
    expect(uniquePath(3, 2)).toBe(3);
  })
})