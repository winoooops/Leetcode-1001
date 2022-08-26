import { letterCombinations } from "./index"

describe("Leetcode 17: Letter Combination", () => {
  it("should be right", () => {
    expect(letterCombinations("23"))
      .toEqual(expect.arrayContaining(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]))
  });

  it("should return empty list", () => {
    expect(letterCombinations("").length).toBe(0)
  })
})
