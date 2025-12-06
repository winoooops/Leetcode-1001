import {twoSum} from './167';

type TestCase = {
  title: string;
  numbers: number[];
  target: number;
  expected: number[];
};

const cases: TestCase[] = [
  {
    title: 'finds the first two elements when they hit the target',
    numbers: [2, 7, 11, 15],
    target: 9,
    expected: [1, 2],
  },
  {
    title: 'skips middle values until the matching pair',
    numbers: [2, 3, 4],
    target: 6,
    expected: [1, 3],
  },
  {
    title: 'works with negative numbers',
    numbers: [-1, 0],
    target: -1,
    expected: [1, 2],
  },
  {
    title: 'handles duplicates inside the window',
    numbers: [1, 2, 3, 4, 4, 9, 56, 90],
    target: 8,
    expected: [4, 5],
  },
];

describe('167. Two Sum II', () => {
  it.each(cases)('case: $title', ({numbers, target, expected}) => {
    const result = twoSum(numbers, target);
    expect(result).toEqual(expected);
  });
});
