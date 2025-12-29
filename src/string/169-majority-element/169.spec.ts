import {majorityElement} from './169';

type TestCase = {
  title: string;
  nums: number[];
  expected: number;
};

const cases: TestCase[] = [
  {
    title: 'handles the classic 2/1 mix (LeetCode example)',
    nums: [2, 2, 1, 1, 1, 2, 2],
    expected: 2,
  },
  {
    title: 'identifies a majority that appears exactly n/2 + 1 times',
    nums: [3, 3, 4, 2, 3, 3, 3],
    expected: 3,
  },
  {
    title: 'works when the majority element occupies the first half',
    nums: [5, 5, 5, 5, 2, 1, 3],
    expected: 5,
  },
  {
    title: 'works when the majority element occupies the last half',
    nums: [1, 2, 3, 4, 6, 6, 6, 6],
    expected: 6,
  },
  {
    title: 'handles minimal input of length 1',
    nums: [9],
    expected: 9,
  },
  {
    title: 'handles arrays with negative numbers and a negative majority',
    nums: [-1, -1, -1, 2, 2],
    expected: -1,
  },
  {
    title: 'handles arrays with zero as the majority value',
    nums: [0, 0, 0, 1, 2],
    expected: 0,
  },
];

describe('169. Majority Element', () => {
  it.each(cases)('$title', ({nums, expected}) => {
    expect(majorityElement(nums)).toBe(expected);
  });
});
