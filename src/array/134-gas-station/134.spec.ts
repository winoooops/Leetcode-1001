import {canCompleteCircuit} from './134';

type TestCase = {
  name: string;
  gas: number[];
  cost: number[];
  expected: number;
};

const cases: TestCase[] = [
  {
    name: 'finds start index 3 for the classic example',
    gas: [1, 2, 3, 4, 5],
    cost: [3, 4, 5, 1, 2],
    expected: 3,
  },
  {
    name: 'returns -1 when total gas is insufficient',
    gas: [2, 3, 4],
    cost: [3, 4, 3],
    expected: -1,
  },
  {
    name: 'keeps start at 0 when the running surplus never dips negative',
    gas: [3, 1, 1],
    cost: [1, 2, 2],
    expected: 0,
  },
  {
    name: 'skips depleted prefix and starts near the end',
    gas: [2, 1, 1, 4],
    cost: [3, 1, 2, 1],
    expected: 3,
  },
  {
    name: 'single station succeeds when gas >= cost',
    gas: [5],
    cost: [4],
    expected: 0,
  },
  {
    name: 'single station fails when gas < cost',
    gas: [3],
    cost: [4],
    expected: -1,
  },
  {
    name: 'handles multiple resets before finding the valid start',
    gas: [4, 6, 7, 4],
    cost: [6, 5, 3, 5],
    expected: 1,
  },
];

describe('134. Gas Station', () => {
  it.each(cases)('$name', ({gas, cost, expected}) => {
    expect(canCompleteCircuit([...gas], [...cost])).toBe(expected);
  });
});
