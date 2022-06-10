import { commonChars } from "./index"

describe("LeetCode 1002", () => {
  it('should return ["e","l","l"]', () => {
    const words = ["bella", "label", "roller"]
    const result = commonChars(words)
    expect(result).toHaveLength(3)
    expect(result).toEqual(["e","l","l"])
  })

  it('should return ["c","o"]', () => {
    const words = ["cool", "lock", "cook"]
    const result = commonChars(words)
    expect(result).toHaveLength(2)
    expect(result).toEqual(["c","o"])
  })
})
