import {lengthOfLongestSubstring} from "./3";

describe('3. Longest Substring without Repeating Characters', () => {
  it('should be 3', function () {
    const result = lengthOfLongestSubstring("abcabcbb")
    expect(result).toBe(3);
  });

  it('should be 1', function () {
    const result = lengthOfLongestSubstring("bbbbb")
    expect(result).toBe(1);
  });

  it('should be 3', function () {
    const result = lengthOfLongestSubstring("pwwkew")
    expect(result).toBe(3);
  });

  it('should be 2', function () {
    const result = lengthOfLongestSubstring("abba")
    expect(result).toBe(2);
  });
})
