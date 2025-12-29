import {lengthOfLongestSubstring, lengthOfLongestSubstringSet} from './3';

const cases = [
  {
    title: 'should be 3',
    s: 'abcabcbb',
    expected: 3,
  },
  {
    title: 'should be 1',
    s: 'bbbbb',
    expected: 1,
  },
  {
    title: 'should be 3',
    s: 'pwwkew',
    expected: 3,
  },
  {
    title: 'should be 2',
    s: 'abba',
    expected: 2,
  },
];

const solutions = [
  {label: 'without set', fn: lengthOfLongestSubstring},
  {label: 'with set', fn: lengthOfLongestSubstringSet},
];

describe('3. Longest Substring without Repeating Characters', () => {
  describe.each(solutions)('$(label)', ({fn}) => {
    it.each(cases)('$title', ({s, expected}) => {
      expect(fn(s)).toBe(expected);
    });
  });
});
