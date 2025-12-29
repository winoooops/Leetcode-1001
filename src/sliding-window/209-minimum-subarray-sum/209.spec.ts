import {minSubArrayLen, minSubArrayLen2} from './209';

const cases = [
  {
    title: 'shrinks window once it exceeds target',
    target: 7,
    nums: [2, 3, 1, 2, 4, 3],
    expected: 2,
  },
  {
    title: 'single element meets target',
    target: 4,
    nums: [1, 4, 4],
    expected: 1,
  },
  {
    title: 'cannot reach target',
    target: 11,
    nums: [1, 1, 1, 1, 1, 1, 1, 1],
    expected: 0,
  },
  {
    title: 'best window is in the middle',
    target: 11,
    nums: [1, 2, 3, 4, 5],
    expected: 3,
  },
  {
    title: 'early two-element window beats longer sums',
    target: 15,
    nums: [5, 1, 3, 5, 10, 7, 4, 9, 2, 8],
    expected: 2,
  },
  {
    title: 'empty array returns zero',
    target: 1,
    nums: [],
    expected: 0,
  },
];

const implementations = [
  {name: 'for loop window', fn: minSubArrayLen},
  {name: 'while loop window', fn: minSubArrayLen2},
];

describe.each(implementations)(
  '209. Minimum Size Subarray Sum ($name)',
  ({fn}) => {
    it.each(cases)('case: $title', ({target, nums, expected}) => {
      const result = fn(target, nums);
      expect(result).toBe(expected);
    });
  }
);
