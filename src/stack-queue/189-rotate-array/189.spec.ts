import {rotate} from './189';

type TestCase = {
  name: string;
  nums: number[];
  k: number;
  expected: number[];
};

const cases: TestCase[] = [
  {
    name: 'rotates sample input by 3',
    nums: [1, 2, 3, 4, 5, 6, 7],
    k: 3,
    expected: [5, 6, 7, 1, 2, 3, 4],
  },
  {
    name: 'handles k larger than array length',
    nums: [1, 2, 3],
    k: 5,
    expected: [2, 3, 1],
  },
  {
    name: 'leaves array unchanged when k = 0',
    nums: [9, 8, 7],
    k: 0,
    expected: [9, 8, 7],
  },
  {
    name: 'single element stays the same regardless of k',
    nums: [42],
    k: 999,
    expected: [42],
  },
  {
    name: 'identical values rotate without visual difference',
    nums: [5, 5, 5, 5],
    k: 2,
    expected: [5, 5, 5, 5],
  },
];

describe('189. Rotate Array', () => {
  cases.forEach(({name, nums, k, expected}) => {
    it(name, () => {
      const arr = [...nums];
      rotate(arr, k);
      expect(arr).toEqual(expected);
    });
  });
});
