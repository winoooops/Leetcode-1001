import {groupAnagrams} from "./49";

describe('49. Group Anagram', () => {
  it('should be [["bat"],["nat","tan"],["ate","eat","tea"]]', function () {
    const strs = ["eat","tea","tan","ate","nat","bat"];
    expect(groupAnagrams(strs)).toEqual(expect.arrayContaining([
      ["bat"],
      expect.arrayContaining(["nat","tan"]),
      expect.arrayContaining(["ate","eat","tea"]),
    ]))
  });

  it('should be [""]', function () {
    const strs = [""];
    expect(groupAnagrams(strs)).toEqual([[""]])
  });

  it('should be ["a"]', function () {
    const strs = ["a"];
    expect(groupAnagrams(strs)).toEqual([["a"]])
  });
})
