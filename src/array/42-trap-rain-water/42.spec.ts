import {trapWater2P, trapWaterBF, trapWaterStack} from './42';

const cases = [
  {height: [2, 1, 3, 0, 3], expected: 4},
  {height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], expected: 6},
  {height: [4, 2, 0, 3, 2, 5], expected: 9},
  {height: [4, 2, 3], expected: 1},
] as const;

const implementation = [
  {label: 'brute force', fn: trapWaterBF},
  {label: 'two pointer', fn: trapWater2P},
  {label: 'monotonic stack', fn: trapWaterStack},
] as const;

describe('42. Trap rain water', () => {
  implementation.forEach(({label, fn}) => {
    describe(label, () => {
      it.each(cases)('$name', ({height, expected}) => {
        expect(fn([...height])).toBe(expected);
      });
    });
  });
});
