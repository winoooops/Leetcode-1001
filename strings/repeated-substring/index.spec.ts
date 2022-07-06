import { getNext, repeatedSubstring, repeatedSubstringII, repeatedSubStringIII, repeatSubStringIII } from "./index"


describe("LeetCode 459: Repeated Substring Pattern", () => {
  describe("use KMP", () => {
    it("should get the next array with everyelement -1", () => {
      const s = "asdfasdfasdf"
      expect(getNext(s)).toEqual([-1,-1,-1,-1,0,1,2,3,4,5,6,7])
    })

    it("should be true", () => {
      const s = "asdfasdfasdf"
      expect(repeatedSubstring(s)).toBe(true)
    })

    it("should be false", () => {
      const s = "abc"
      expect(repeatedSubstring(s)).toBe(false)
    })

    it("should be true", () => {
      const s = "abcabcabcabc"
      expect(getNext(s)).toEqual([-1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8])
      expect(repeatedSubstring(s)).toBe(true)
    })

    it("should be false", () => {
      const s = "abac" 
      expect(getNext(s)).toEqual([-1,-1,0,-1])
      expect(repeatedSubstring(s)).toBe(false)
    })
  })

  describe("manual determine", () => {
    it("shoud be true", () => {
      const s = "ababab"
      expect(repeatedSubstringII(s)).toBe(true)
    })

    it("should be false", () => {
      const s = "abac"
      expect(repeatedSubstringII(s)).toBe(false)
    })
  })
  
  describe("use dynamic window", () => {
    it("shoud be true", () => {
      const s = "ababab"
      expect(repeatedSubStringIII(s)).toBe(true)
    })

    it("should be false", () => {
      const s = "abac"
      expect(repeatedSubStringIII(s)).toBe(false)
    })
  })
})

