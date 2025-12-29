import {lcpSub, lcpVertical} from './14';

const solutions = {
  'vertical scan': lcpVertical,
  'divide and conquer': lcpSub,
};

const cases = [
  {
    name: 'basic overlap returns "fl"',
    strs: ['flower', 'flow', 'flight'],
    expected: 'fl',
  },
  {
    name: 'no shared letters yields empty string',
    strs: ['dog', 'racecar', 'car'],
    expected: '',
  },
  {
    name: 'entire shortest string is a prefix',
    strs: ['interspecies', 'interstellar', 'interstate'],
    expected: 'inters',
  },
  {
    name: 'single word array returns that word',
    strs: ['alone'],
    expected: 'alone',
  },
  {
    name: 'presence of empty string forces empty prefix',
    strs: ['prefix', ''],
    expected: '',
  },
] as const;

describe('14. Longest Common Prefix', () => {
  describe.each(Object.entries(solutions))('%s solution', (_label, solve) => {
    it.each(cases)('$name', ({strs, expected}) => {
      const input = [...strs];
      expect(solve(input)).toBe(expected);
    });
  });
});
