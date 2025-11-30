import {KMP, getNext, strStr} from './28';

type Implementation = {
  label: string;
  fn: (haystack: string, needle: string) => number;
};

const implementations: Implementation[] = [
  {label: 'brute force scan', fn: strStr},
  {label: 'KMP', fn: KMP},
];

type TestCase = {
  name: string;
  haystack: string;
  needle: string;
  expected: number;
};

const cases: TestCase[] = [
  {
    name: 'finds match at the start',
    haystack: 'sadbutsad',
    needle: 'sad',
    expected: 0,
  },
  {
    name: 'returns the first middle occurrence with repeated prefixes',
    haystack: 'mississippi',
    needle: 'issip',
    expected: 4,
  },
  {
    name: 'returns -1 when the needle is absent',
    haystack: 'leetcode',
    needle: 'leeto',
    expected: -1,
  },
  {
    name: 'handles match at the final character',
    haystack: 'abc',
    needle: 'c',
    expected: 2,
  },
  {
    name: 'handles overlapping characters correctly',
    haystack: 'aaaab',
    needle: 'aab',
    expected: 2,
  },
  {
    name: 'matches when haystack equals needle',
    haystack: 'needle',
    needle: 'needle',
    expected: 0,
  },
  {
    name: 'returns -1 when needle is longer than haystack',
    haystack: 'short',
    needle: 'longerneedle',
    expected: -1,
  },
  {
    name: 'prefers the earliest index when multiple matches exist',
    haystack: 'aaaaa',
    needle: 'aa',
    expected: 0,
  },
  {
    name: 'official test',
    haystack: 'aabaabaaf',
    needle: 'aabaaf',
    expected: 3,
  },
  {
    name: 'super edge',
    haystack: 'adcadcaddcadde',
    needle: 'adcadde',
    expected: -1,
  },
];

describe('28. Find the Index of the First Occurrence in a String', () => {
  implementations.forEach(({label, fn}) => {
    describe(label, () => {
      it.each(cases)('$name', ({haystack, needle, expected}) => {
        expect(fn(haystack, needle)).toBe(expected);
      });
    });
  });
});

describe('next function', () => {
  it('should be [0, 1, 0, 1, 2, 0]', () => {
    expect(getNext('aabaaf')).toEqual([0, 1, 0, 1, 2, 0]);
  });

  it('should be ', () => {
    expect(getNext('abeabf')).toEqual([0, 0, 0, 1, 2, 0]);
  });
});
