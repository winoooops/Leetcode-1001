import {canJump} from './55';

type TestCase = {
  name: string;
  nums: number[];
  expected: boolean;
};

const cases: TestCase[] = [
  {name: 'sample reachable path', nums: [2, 3, 1, 1, 4], expected: true},
  {name: 'sample stuck at zero', nums: [3, 2, 1, 0, 4], expected: false},
  {name: 'single element succeeds', nums: [0], expected: true},
  {name: 'cannot move when first hop is zero', nums: [0, 2], expected: false},
  {name: 'long jump clears trailing zeros', nums: [2, 0, 0], expected: true},
  {name: 'coverage dries up before goal', nums: [1, 1, 0, 1], expected: false},
];

describe('55. Jump Game I', () => {
  cases.forEach(({name, nums, expected}) => {
    it(name, () => {
      expect(canJump(nums)).toBe(expected);
    });
  });
});
