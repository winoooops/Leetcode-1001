import {twoSum} from './1';

type TestCase = {
  name: string;
  nums: number[];
  target: number;
  expected: number[];
};

const cases: TestCase[] = [
  {
    name: 'finds indices for positive numbers',
    nums: [2, 7, 11, 15],
    target: 9,
    expected: [0, 1],
  },
  {
    name: 'finds indices when answer is at the end',
    nums: [3, 2, 4],
    target: 6,
    expected: [1, 2],
  },
  {
    name: 'handles duplicate numbers correctly',
    nums: [3, 3],
    target: 6,
    expected: [0, 1],
  },
];

describe('1. Two Sum', () => {
  cases.forEach(({name, nums, target, expected}) => {
    it(name, () => {
      expect(twoSum(nums, target)).toEqual(expected);
    });
  });
});
