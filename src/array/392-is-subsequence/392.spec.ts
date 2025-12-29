import {isSubsequencePointer, isSubsequenceStack} from './392';

type TestCase = {
  title: string;
  s: string;
  t: string;
  expected: boolean;
};

const cases: TestCase[] = [
  {
    title: '"abc" is a subsequence of "ahbgdc"',
    s: 'abc',
    t: 'ahbgdc',
    expected: true,
  },
  {
    title: '"axc" is not a subsequence of "ahbgdc"',
    s: 'axc',
    t: 'ahbgdc',
    expected: false,
  },
  {
    title: '"ace" is a subsequence of "abcde"',
    s: 'ace',
    t: 'abcde',
    expected: true,
  },
  {
    title: '"aec" is not a subsequence of "abcde"',
    s: 'aec',
    t: 'abcde',
    expected: false,
  },
  {
    title: 'single-character mismatch fails',
    s: 'b',
    t: 'c',
    expected: false,
  },
  {
    title: 'empty string is always a subsequence',
    s: '',
    t: 'c',
    expected: true,
  },
  {
    title: 'longer s than t cannot be a subsequence',
    s: 'abcd',
    t: 'abc',
    expected: false,
  },
  {
    title: 'repeated characters must appear in order',
    s: 'aab',
    t: 'aaab',
    expected: true,
  },
  {
    title: '',
    s: 'aaaaaa',
    t: 'bbaaaa',
    expected: false,
  },
];

const implementations = [
  {name: 'stack scan', fn: isSubsequenceStack},
  {name: 'two pointers', fn: isSubsequencePointer},
];

describe.each(implementations)('392. Is Subsequence ($name)', ({fn}) => {
  it.each(cases)('case: $title', ({s, t, expected}) => {
    const result = fn(s, t);
    expect(result).toBe(expected);
  });
});
