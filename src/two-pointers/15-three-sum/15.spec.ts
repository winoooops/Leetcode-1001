import {threeSum} from './15';

type TestCase = {
  title: string;
  nums: number[];
  expected: number[][];
};

const cases: TestCase[] = [
  {
    title: 'returns unique triplets for mixed positives and negatives',
    nums: [-1, 0, 1, 2, -1, -4],
    expected: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  {
    title: 'returns empty when no triplets sum to zero',
    nums: [0, 1, 1],
    expected: [],
  },
  {
    title: 'finds the single zero triplet',
    nums: [0, 0, 0],
    expected: [[0, 0, 0]],
  },
  {
    title: 'collapses duplicate zeros to one triplet',
    nums: [0, 0, 0, 0],
    expected: [[0, 0, 0]],
  },
  {
    title: 'deduplicates pairs around repeated anchors',
    nums: [-2, 0, 0, 2, 2],
    expected: [[-2, 0, 2]],
  },
  {
    title: 'handles multiple triplets without duplication',
    nums: [-2, -1, -1, 0, 1, 2, 2],
    expected: [
      [-2, 0, 2],
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
];

describe('15. 3Sum', () => {
  it.each(cases)('case: $title', ({nums, expected}) => {
    const result = threeSum(nums);

    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result).toHaveLength(expected.length);
  });
});
