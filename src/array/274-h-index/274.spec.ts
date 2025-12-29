import {bucketHIndex, hIndex} from './274';

type Solution = (citations: number[]) => number;

const solutions: Record<string, Solution> = {
  'sorting scan': hIndex,
  'bucket counting': bucketHIndex,
};

type TestCase = {
  name: string;
  citations: number[];
  expected: number;
};

const cases: TestCase[] = [
  {
    name: 'returns 3 for the classic [3,0,6,1,5] input',
    citations: [3, 0, 6, 1, 5],
    expected: 3,
  },
  {
    name: 'handles repeated citations around the threshold',
    citations: [1, 3, 1],
    expected: 1,
  },
  {
    name: 'single very high citation still yields 1',
    citations: [100],
    expected: 1,
  },
  {
    name: 'all zero citations keeps the h-index at 0',
    citations: [0, 0, 0, 0],
    expected: 0,
  },
  {
    name: 'descending citations example produces h = 4',
    citations: [10, 8, 5, 4, 3],
    expected: 4,
  },
  {
    name: 'mixed bag where only three papers meet the bar',
    citations: [25, 8, 5, 3, 3],
    expected: 3,
  },
  {
    name: 'returns the array length when every paper beats n',
    citations: [5, 5, 5, 5, 5],
    expected: 5,
  },
  {
    name: 'empty publication list has h-index 0',
    citations: [],
    expected: 0,
  },
];

describe('274. H-Index', () => {
  describe.each(Object.entries(solutions))('%s solution', (_name, solve) => {
    it.each(cases)('$name', ({citations, expected}) => {
      const input = [...citations];
      expect(solve(input)).toBe(expected);
    });
  });
});
