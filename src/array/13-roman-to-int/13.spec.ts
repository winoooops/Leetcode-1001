import {romanToInt} from './13';

const cases = [
  {name: 'minimal value', roman: 'I', expected: 1},
  {name: 'simple addition', roman: 'VIII', expected: 8},
  {name: 'mid-range additive combo', roman: 'MMXXIII', expected: 2023},
  {name: 'single subtractive pair', roman: 'IV', expected: 4},
  {name: 'multiple subtractive pairs', roman: 'MCMXCIV', expected: 1994},
  {name: 'alternating subtract/add', roman: 'CDXLIV', expected: 444},
  {name: 'descending subtractive chain', roman: 'MMMCMXCIX', expected: 3999},
  {name: 'edge subtract near tens', roman: 'XCIX', expected: 99},
] as const;

describe('13. Roman to Number', () => {
  it.each(cases)('$name', ({roman, expected}) => {
    expect(romanToInt(roman)).toBe(expected);
  });
});
