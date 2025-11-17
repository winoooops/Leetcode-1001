import {productExceptSelf} from './238';

type TestCase = {
  name: string;
  nums: number[];
  expected: number[];
};

const cases: TestCase[] = [
  {
    name: 'matches the example with increasing positives',
    nums: [1, 2, 3, 4],
    expected: [24, 12, 8, 6],
  },
  {
    name: 'handles one zero by zeroing every other position',
    nums: [-1, 1, 0, -3, 3],
    expected: [-0, 0, 9, -0, 0],
  },
  {
    name: 'handles multiple zeros by returning all zeros',
    nums: [0, 4, 0, 2],
    expected: [0, 0, 0, 0],
  },
  {
    name: 'supports negative numbers without zeros',
    nums: [-1, 2, -3, 4],
    expected: [-24, 12, -8, 6],
  },
  {
    name: 'works for repeated values and short arrays',
    nums: [5, 5],
    expected: [5, 5],
  },
];

describe('238. Product of Array Except Self', () => {
  cases.forEach(({name, nums, expected}) => {
    it(name, () => {
      expect(productExceptSelf(nums)).toEqual(expected);
    });
  });
});
