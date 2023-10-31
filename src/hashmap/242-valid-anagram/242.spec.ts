import {isAnagram} from "./242";

describe('242. Valid Anagram', () => {
  it('should be true', function () {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  it('should be false', function () {
    expect(isAnagram("rat", "car")).toBe(false);
  });

  it("should be false", function() {
    expect(isAnagram("rat", "aaa")).toBe(false);
  })
})
