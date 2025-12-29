import {removeElement, removeElement2} from './27';

type TestCase = {
  title: string;
  input: number[];
  val: number;
  expectedLength: number;
  expectedValues: number[];
};

describe('27. Remove Element', () => {
  const cases: TestCase[] = [
    {
      title: 'shrinks to two elements when removing threes',
      input: [3, 2, 2, 3],
      val: 3,
      expectedLength: 2,
      expectedValues: [2, 2],
    },
    {
      title: 'filters scattered twos and keeps five numbers',
      input: [0, 1, 2, 2, 3, 0, 4, 2],
      val: 2,
      expectedLength: 5,
      expectedValues: [0, 1, 3, 0, 4],
    },
    {
      title: 'handles target at the tail',
      input: [1, 2, 3, 4, 2],
      val: 2,
      expectedLength: 3,
      expectedValues: [1, 3, 4],
    },
    {
      title: 'removes consecutive matches',
      input: [2, 2, 3],
      val: 2,
      expectedLength: 1,
      expectedValues: [3],
    },
    {
      title: 'returns full length when nothing matches',
      input: [1, 3, 4, 5],
      val: 2,
      expectedLength: 4,
      expectedValues: [1, 3, 4, 5],
    },
    {
      title: 'returns zero when everything matches',
      input: [2, 2, 2, 2],
      val: 2,
      expectedLength: 0,
      expectedValues: [],
    },
    {
      title: 'handles empty input',
      input: [],
      val: 2,
      expectedLength: 0,
      expectedValues: [],
    },
    {
      title: 'single element that matches',
      input: [2],
      val: 2,
      expectedLength: 0,
      expectedValues: [],
    },
    {
      title: 'single element that does not match',
      input: [1],
      val: 2,
      expectedLength: 1,
      expectedValues: [1],
    },
  ];

  cases.forEach(({title, input, val, expectedLength, expectedValues}) => {
    it(title, () => {
      const nums = [...input];
      const result = removeElement(nums, val);

      expect(result).toBe(expectedLength);

      const kept = nums.slice(0, result);
      expect(kept.length).toBe(expectedValues.length);
      expect(kept.sort((a, b) => a - b)).toEqual(
        expectedValues.slice().sort((a, b) => a - b)
      );
      expect(kept.every(value => value !== val)).toBe(true);
    });
  });

  cases.forEach(({title, input, val, expectedLength, expectedValues}) => {
    it(title + '--alternative', () => {
      const nums = [...input];
      const result = removeElement2(nums, val);

      expect(result).toBe(expectedLength);

      const kept = nums.slice(0, result);
      expect(kept.length).toBe(expectedValues.length);
      expect(kept.sort((a, b) => a - b)).toEqual(
        expectedValues.slice().sort((a, b) => a - b)
      );
      expect(kept.every(value => value !== val)).toBe(true);
    });
  });
});
