import { validAnagram } from "./index"

describe("LeetCode 242: Valid Anagram", () => {
  it("should be true", () => {
    expect(validAnagram("anagram", "nagaram")).toBe(true)
  })

  it("should be false", () => {
    expect(validAnagram("anagram", "nagram")).toBe(false)
  })

  it("should be false", () => {
    expect(validAnagram("rat", "car")).toBe(false)
  })
})
