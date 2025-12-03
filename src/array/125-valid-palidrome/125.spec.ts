import {isPalidrome} from './125';

const cases = [
  {
    name: 'ignores punctuation and casing',
    s: 'A man, a plan, a canal: Panama',
    expected: true,
  },
  {
    name: 'detects mismatched letters',
    s: 'race a car',
    expected: false,
  },
  {
    name: 'treats empty string as palindrome',
    s: '',
    expected: true,
  },
  {
    name: 'only punctuation yields true',
    s: '.,',
    expected: true,
  },
  {
    name: 'handles digits alongside letters',
    s: '0P',
    expected: false,
  },
  {
    name: 'single character strings are palindromes',
    s: 'x',
    expected: true,
  },
] as const;

describe('125. Valid Palidrome', () => {
  it.each(cases)('$name', ({s, expected}) => {
    expect(isPalidrome(s)).toBe(expected);
  });
});
