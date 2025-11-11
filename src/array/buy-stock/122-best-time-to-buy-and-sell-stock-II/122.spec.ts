import {maxProfitDP, maxProfitGreedy} from './122';

describe('122. Best Time to Buy and Sell Stock II', () => {
  const cases = [
    {
      label: 'captures disjoint profitable windows',
      prices: [7, 1, 5, 3, 6, 4],
      expected: 7,
    },
    {
      label: 'handles monotonic increase as a single trade',
      prices: [1, 2, 3, 4, 5],
      expected: 4,
    },
    {
      label: 'returns zero when prices never rise',
      prices: [7, 6, 4, 3, 1],
      expected: 0,
    },
    {
      label: 'tolerates single-day input',
      prices: [3],
      expected: 0,
    },
    {
      label: 'sums alternating gains',
      prices: [2, 1, 2, 0, 1],
      expected: 2,
    },
  ];

  describe('maxProfitGreedy', () => {
    cases.forEach(({label, prices, expected}) => {
      it(`returns ${expected} when it ${label}`, () => {
        expect(maxProfitGreedy(prices)).toBe(expected);
      });
    });
  });

  describe('maxProfitDP', () => {
    cases.forEach(({label, prices, expected}) => {
      it(`returns ${expected} when it ${label}`, () => {
        expect(maxProfitDP(prices)).toBe(expected);
      });
    });
  });
});
