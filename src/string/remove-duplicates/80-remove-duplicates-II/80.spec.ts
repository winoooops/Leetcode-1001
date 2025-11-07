import {removeDuplicateII} from './80';

type TestCase = {
  title: string;
  input: number[];
  expectedLength: number;
  expectedValues: number[];
};

const cases: TestCase[] = [
  {
    title: 'keeps at most two duplicates in the middle of array',
    input: [0, 0, 1, 1, 1, 1, 2, 3, 3],
    expectedLength: 7,
    expectedValues: [0, 0, 1, 1, 2, 3, 3],
  },
  {
    title: 'handles alternating duplicates',
    input: [1, 1, 1, 2, 2, 2, 3, 3, 3],
    expectedLength: 6,
    expectedValues: [1, 1, 2, 2, 3, 3],
  },
  {
    title: 'returns input when already within limit',
    input: [-2, -2, -1, 0, 0, 1],
    expectedLength: 6,
    expectedValues: [-2, -2, -1, 0, 0, 1],
  },
  {
    title: 'collapses longer runs to two copies',
    input: [4, 4, 4, 4, 4],
    expectedLength: 2,
    expectedValues: [4, 4],
  },
  {
    title: 'works with short arrays (length <= 2)',
    input: [5, 5],
    expectedLength: 2,
    expectedValues: [5, 5],
  },
  {
    title: 'handles single-element array',
    input: [9],
    expectedLength: 1,
    expectedValues: [9],
  },
  {
    title: 'handles empty array',
    input: [],
    expectedLength: 0,
    expectedValues: [],
  },
];

describe('80. Remove Duplicates from Sorted Array II', () => {
  it.each(cases)('$title', ({input, expectedLength, expectedValues}) => {
    const nums = [...input];

    const length = removeDuplicateII(nums);

    expect(length).toBe(expectedLength);
    expect(nums.slice(0, length)).toEqual(expectedValues);
  });
});
