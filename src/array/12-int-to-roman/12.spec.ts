import {intToRoman} from './12';

const cases = [
  {name: 'minimum value', num: 1, expected: 'I'},
  {name: 'simple addition', num: 58, expected: 'LVIII'},
  {name: 'single subtractive pair', num: 4, expected: 'IV'},
  {name: 'multiple subtractive pairs', num: 944, expected: 'CMXLIV'},
  {name: 'clean thousands', num: 3000, expected: 'MMM'},
  {name: 'mixed digits', num: 1994, expected: 'MCMXCIV'},
  {name: 'upper bound', num: 3999, expected: 'MMMCMXCIX'},
  {name: 'tens subtract', num: 90, expected: 'XC'},
] as const;

describe('12. Integer to Roman', () => {
  it.each(cases)('$name', ({num, expected}) => {
    expect(intToRoman(num)).toBe(expected);
  });
});
