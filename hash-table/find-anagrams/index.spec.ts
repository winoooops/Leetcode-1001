import { findAnagram } from "./index"

describe("LeetCode 438: Find All Anagrams in a String", () => {

  it("should be right", () => {
    expect(findAnagram('cbaebabacd', 'abc')).toEqual([0,6])
  })

  it("should be right", () => {
    expect(findAnagram('abab', 'ab')).toEqual([0,1,2])
  })
  /* it("should be right", () => {
    const s = "aaaaaaaaaa"
    const p = "aaaaaaaaaaaaa"
    // expect(findAnagram("abab", "ab")).toEqual([0,1,2])
    console.log(findAnagram(s, p))
  }) */
})
