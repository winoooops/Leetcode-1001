import { findMaxForm } from "./index"

describe("Leetcode 474: Find max form", () => {
  it("should be 4", () => {
    const strs = ["10", "0001", "111001", "1", "0"]
    expect(findMaxForm(strs, 5, 3)).toBe(4);
  });

  it("should be 2", () => {
    const strs = ["10", "0", "1"];
    expect(findMaxForm(strs, 1, 1)).toBe(2);
  })
});