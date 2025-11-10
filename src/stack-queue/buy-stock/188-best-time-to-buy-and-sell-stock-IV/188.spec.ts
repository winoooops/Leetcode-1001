import {maxProfit, maxProfit1D, maxProfitOP} from './188';

type TestCase = {
  name: string;
  k: number;
  prices: number[];
  expected: number;
};

const cases: TestCase[] = [
  {name: 'sample #1', k: 2, prices: [2, 4, 1], expected: 2},
  {name: 'sample #2', k: 2, prices: [3, 2, 6, 5, 0, 3], expected: 7},
  {name: 'zero allowed transactions', k: 0, prices: [1, 2, 3, 4], expected: 0},
  {name: 'empty prices array', k: 5, prices: [], expected: 0},
  {name: 'monotonic decrease', k: 3, prices: [9, 7, 4, 3, 1], expected: 0},
  {
    name: 'large k triggers greedy shortcut',
    k: 50,
    prices: [1, 2, 3, 4],
    expected: 3,
  },
  {
    name: 'multiple disjoint windows',
    k: 3,
    prices: [1, 3, 2, 8, 4, 9],
    expected: 13,
  },
  {name: 'single day input', k: 2, prices: [5], expected: 0},
  {
    name: 'noisy ups and downs still capture profit',
    k: 2,
    prices: [2, 1, 2, 0, 1, 3],
    expected: 4,
  },
];

const algorithms = [
  {name: 'maxProfit', fn: maxProfit},
  {name: 'maxProfitDP', fn: maxProfitOP},
  {name: 'maxProfit1D', fn: maxProfit1D},
];

describe('188. Best Time to Buy and Sell Stock IV', () => {
  algorithms.forEach(({name, fn}) => {
    describe(name, () => {
      cases.forEach(testCase => {
        it(testCase.name, () => {
          expect(fn(testCase.k, testCase.prices)).toBe(testCase.expected);
        });
      });
    });
  });
});
