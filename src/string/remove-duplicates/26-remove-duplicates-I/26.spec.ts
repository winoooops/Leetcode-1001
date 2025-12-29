import {removeDuplicates} from './26';

type TestCase = {
  title: string;
  input: number[];
  expectedLength: number;
  expectedValues: number[];
};

const cases: TestCase[] = [
  {
    title: 'compacts repeated numbers in the middle',
    input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    expectedLength: 5,
    expectedValues: [0, 1, 2, 3, 4],
  },
  {
    title: 'handles two unique values',
    input: [1, 1, 2],
    expectedLength: 2,
    expectedValues: [1, 2],
  },
  {
    title: 'returns length unchanged when array is already unique',
    input: [-2, -1, 0, 3],
    expectedLength: 4,
    expectedValues: [-2, -1, 0, 3],
  },
  {
    title: 'collapses to a single value when all elements match',
    input: [5, 5, 5, 5],
    expectedLength: 1,
    expectedValues: [5],
  },
  {
    title: 'works with a single-element array',
    input: [7],
    expectedLength: 1,
    expectedValues: [7],
  },
  {
    title: 'returns zero for an empty array',
    input: [],
    expectedLength: 0,
    expectedValues: [],
  },
];

describe('26. Remove Duplicates from Sorted Array', () => {
  it.each(cases)('$title', ({input, expectedLength, expectedValues}) => {
    const nums = [...input];

    const length = removeDuplicates(nums);

    expect(length).toBe(expectedLength);
    expect(nums.slice(0, length)).toEqual(expectedValues);
  });
});
