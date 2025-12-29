import {maxProfitGreedy, maxProfitDP, maxProfitDPOP} from './121';

type TestCase = {
  title: string;
  prices: number[];
  expected: number;
};

const cases: TestCase[] = [
  {
    title: 'example with clear profit (buy low, sell high)',
    prices: [7, 1, 5, 3, 6, 4],
    expected: 5,
  },
  {
    title: 'monotonically decreasing prices yield zero profit',
    prices: [7, 6, 4, 3, 1],
    expected: 0,
  },
  {
    title: 'single rising segment in the middle',
    prices: [3, 8, 2, 5, 1, 7],
    expected: 6,
  },
  {
    title: 'profit comes from last two days',
    prices: [9, 8, 7, 1, 2],
    expected: 1,
  },
  {
    title: 'flat prices never provide profit',
    prices: [4, 4, 4, 4],
    expected: 0,
  },
];

const methods = [
  ['maxProfitGreedy', maxProfitGreedy],
  ['maxProfitDP', maxProfitDP],
  ['maxProfitDPOP', maxProfitDPOP],
] as const;

describe('121. Best Time to Buy and Sell Stock I', () => {
  it.each(cases)('$title', ({prices, expected}) => {
    for (const [name, fn] of methods) {
      expect(fn(prices)).toBe(expected);
    }
  });
});
