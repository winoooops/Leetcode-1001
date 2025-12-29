import {convertBF, convertFlag} from './6';

const implementations = [
  {solution: 'brute force', fn: convertBF},
  {solution: 'flag uptimized', fn: convertFlag},
];

const cases = [
  {
    name: 'classic zigzag with three rows',
    str: 'PAYPALISHIRING',
    numRows: 3,
    expected: 'PAHNAPLSIIGYIR',
  },
  {
    name: 'same string with four rows',
    str: 'PAYPALISHIRING',
    numRows: 4,
    expected: 'PINALSIGYAHRPI',
  },
  {
    name: 'single row should return original string',
    str: 'AB',
    numRows: 1,
    expected: 'AB',
  },
  {
    name: 'two rows weave characters',
    str: 'ABCD',
    numRows: 2,
    expected: 'ACBD',
  },
  {
    name: 'more rows than characters still returns input order',
    str: 'AB',
    numRows: 5,
    expected: 'AB',
  },
];

describe('zig zag string', () => {
  implementations.forEach(({solution, fn}) => {
    describe(solution, () => {
      it.each(cases)('$name', ({str, numRows, expected}) => {
        expect(fn(str, numRows)).toBe(expected);
      });
    });
  });
});
