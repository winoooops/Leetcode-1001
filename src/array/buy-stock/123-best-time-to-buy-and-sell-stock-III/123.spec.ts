import {
  maxProfitWithTwoTransactions,
  maxProfitWithTwoTransactionsOP,
} from './123';

describe('123. Best Time to Buy and Sell Stock III', () => {
  const cases = [
    {
      label: 'captures two disjoint profit windows',
      prices: [3, 3, 5, 0, 0, 3, 1, 4],
      expected: 6,
    },
    {
      label: 'reduces to a single trade when prices increase monotonically',
      prices: [1, 2, 3, 4, 5],
      expected: 4,
    },
    {
      label: 'returns zero when prices never rise',
      prices: [7, 6, 4, 3, 1],
      expected: 0,
    },
    {
      label: 'handles minimal length input',
      prices: [1],
      expected: 0,
    },
    {
      label: 'picks two alternating gains even with noise',
      prices: [2, 1, 2, 0, 1, 3],
      expected: 4,
    },
  ];

  describe('maxProfitWithTwoTransactions', () => {
    cases.forEach(({label, prices, expected}) => {
      it(`returns ${expected} when it ${label}`, () => {
        expect(maxProfitWithTwoTransactions(prices)).toBe(expected);
      });
    });
  });

  describe('maxProfitWithTwoTransactionsOP', () => {
    cases.forEach(({label, prices, expected}) => {
      it(`returns ${expected} when it ${label}`, () => {
        expect(maxProfitWithTwoTransactionsOP(prices)).toBe(expected);
      });
    });
  });
});
