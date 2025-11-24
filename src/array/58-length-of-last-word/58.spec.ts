import {lengthOfLastWord} from './58';

type Case = {
  name: string;
  input: string;
  expected: number;
};

const cases: Case[] = [
  {
    name: 'classic "Hello World" example',
    input: 'Hello World',
    expected: 5,
  },
  {
    name: 'ignores trailing spaces before counting',
    input: '   fly me   to   the moon  ',
    expected: 4,
  },
  {
    name: 'last word surrounded by single spaces',
    input: 'luffy is still joyboy',
    expected: 6,
  },
  {
    name: 'single word string',
    input: 'LeetCode',
    expected: 8,
  },
  {
    name: 'single character after long prefix',
    input: 'multiple words x',
    expected: 1,
  },
];

describe('58. Length of Last Word', () => {
  it.each(cases)('$name', ({input, expected}) => {
    expect(lengthOfLastWord(input)).toBe(expected);
  });
});
