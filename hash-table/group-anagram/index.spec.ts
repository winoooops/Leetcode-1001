import { groupAnagram } from "./index"

describe("LeetCode 49: Group Anagram", () => {
  it("should be right", () => {
    const input = ["eat","tea","tan","ate","nat","bat"]
    const output = groupAnagram(input) 
    expect(output).toHaveLength(3)
    const ele = ["bat"]
    const ele2 = expect.arrayContaining(["tea", "ate", "eat"])
    const ele3 = expect.arrayContaining(["nat", "tan"])
    expect(output).toEqual(expect.arrayContaining([ele, ele2, ele3]))
  })
})
