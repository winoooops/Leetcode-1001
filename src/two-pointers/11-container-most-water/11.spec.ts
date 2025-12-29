import {maxArea} from './11';

type TestCase = {
  title: string;
  height: number[];
  expected: number;
};

const cases: TestCase[] = [
  {
    title: 'classic wide example',
    height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
    expected: 49,
  },
  {
    title: 'minimal two lines',
    height: [1, 1],
    expected: 1,
  },
  {
    title: 'best area uses inner right wall',
    height: [1, 8, 6],
    expected: 6,
  },
  {
    title: 'tallest bars near the center',
    height: [2, 3, 4, 5, 18, 17, 6],
    expected: 17,
  },
  {
    title: 'uniform heights maximize width',
    height: [5, 5, 5, 5],
    expected: 15,
  },
];

describe('11. Container With Most Water', () => {
  it.each(cases)('case: $title', ({height, expected}) => {
    const result = maxArea(height);
    expect(result).toBe(expected);
  });
});
