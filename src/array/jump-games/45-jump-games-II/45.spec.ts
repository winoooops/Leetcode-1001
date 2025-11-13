import {jump, jump2} from './45';

type Solver = {
  name: string;
  fn: (nums: number[]) => number;
};

const implementations: Solver[] = [
  {name: 'jump (coverage greedy)', fn: jump},
  {name: 'jump (coverage greedy)', fn: jump2},
];

type TestCase = {
  name: string;
  nums: number[];
  expected: number;
};

const cases: TestCase[] = [
  {name: 'sample path from prompt', nums: [2, 3, 1, 1, 4], expected: 2},
  {name: 'sample with embedded zero', nums: [2, 3, 0, 1, 4], expected: 2},
  {name: 'single element needs zero jumps', nums: [0], expected: 0},
  {name: 'two elements needs one jump', nums: [1, 0], expected: 1},
  {name: 'flat array requires n-1 jumps', nums: [1, 1, 1, 1], expected: 3},
  {
    name: 'large first hop reduces total jumps',
    nums: [4, 1, 1, 3, 1, 1, 1],
    expected: 2,
  },
];

describe('45. Jump Game II', () => {
  implementations.forEach(({name, fn}) => {
    describe(name, () => {
      cases.forEach(({name: caseName, nums, expected}) => {
        it(caseName, () => {
          expect(fn(nums)).toBe(expected);
        });
      });
    });
  });
});
