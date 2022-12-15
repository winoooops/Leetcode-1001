import { wordBreakWithBackTracking } from "./index"

describe("Leetcode 139: Break Word", () => {
  it("should be true", () => {
    expect(wordBreakWithBackTracking("leetcode", ["leet", "code"])).toBe(true);
  })

  it("should be true", () => {
    expect(wordBreakWithBackTracking("applepenapple", ["apple", "pen"])).toBe(true);
  })

  it("should be false", () => {
    expect(wordBreakWithBackTracking("catsandog", ["cats", "dog", "sand", "and"])).toBe(false);
  })
})