import {candy, candySlope} from './135';

type Implementation = {
  label: string;
  fn: (ratings: number[]) => number;
};

const implementations: Implementation[] = [
  {label: 'two-pass greedy baseline', fn: candy},
  {label: 'slope tracking single pass', fn: candySlope},
];

type TestCase = {
  name: string;
  ratings: number[];
  expected: number;
};

const cases: TestCase[] = [
  {
    name: 'handles the classic valley example',
    ratings: [1, 0, 2],
    expected: 5,
  },
  {
    name: 'keeps equal ratings at minimum candy count',
    ratings: [1, 2, 2],
    expected: 4,
  },
  {
    name: 'strictly increasing ratings require successive increments',
    ratings: [1, 2, 3, 4],
    expected: 10,
  },
  {
    name: 'strictly decreasing ratings pay more to the left',
    ratings: [4, 3, 2, 1],
    expected: 10,
  },
  {
    name: 'does not overpay when only the tail drops',
    ratings: [1, 3, 4, 5, 2],
    expected: 11,
  },
  {
    name: 'balances a peak surrounded by equal plateaus',
    ratings: [1, 3, 2, 2, 1],
    expected: 7,
  },
  {
    name: 'single child only needs one candy',
    ratings: [5],
    expected: 1,
  },
];

describe('135. Candy', () => {
  implementations.forEach(({label, fn}) => {
    describe(label, () => {
      it.each(cases)('$name', ({ratings, expected}) => {
        expect(fn([...ratings])).toBe(expected);
      });
    });
  });
});
