import {wordPattern} from "./290";

describe('290. Word Pattern', () => {
  it('should be true', function () {
    expect(wordPattern("abba", "dog cat cat dog")).toBe(true);
  });

  it('should be false', function () {
    expect(wordPattern("abba", "dog cat cat fish")).toBe(false);
  });

  it('should be false', function () {
    expect(wordPattern("aaaa", "dog cat cat dog")).toBe(false);
  });

  it("should be false", function() {
    expect(wordPattern("abba", "dog dog dog dog")).toBe(false);
  });

  it('should be false', function() {
    expect(wordPattern("aaaa", "aa aa aa")).toBe(false);
  })
})
