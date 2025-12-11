import {findAnagrams, findAnagramsII} from './348';

describe.each([
  {name: 'findAnagrams (Map based)', fn: findAnagrams},
  {name: 'findAnagramsII (Array based)', fn: findAnagramsII},
])('Find All Anagrams (%s)', ({fn}) => {
  it('should find anagrams in a simple case', () => {
    const s = 'cbaebabacd';
    const p = 'abc';
    // Anagrams of "abc": "cba" at 0, "bac" at 6
    expect(fn(s, p)).toEqual([0, 6]);
  });

  it('should find anagrams with overlapping occurrences', () => {
    const s = 'abab';
    const p = 'ab';
    // "ab" at 0, "ba" at 1, "ab" at 2
    expect(fn(s, p)).toEqual([0, 1, 2]);
  });

  it('should handle duplicate characters in p (requested case)', () => {
    const s = 'baa';
    const p = 'aa';
    // "aa" needs two 'a's. Found at index 1.
    expect(fn(s, p)).toEqual([1]);
  });

  it('should return empty array if no anagrams found', () => {
    const s = 'hello';
    const p = 'xyz';
    expect(fn(s, p)).toEqual([]);
  });

  it('should handle empty strings', () => {
    expect(fn('', 'abc')).toEqual([]);
    expect(fn('abc', '')).toEqual([]);
  });

  it('should handle p longer than s', () => {
    const s = 'abc';
    const p = 'abcd';
    expect(fn(s, p)).toEqual([]);
  });
});
