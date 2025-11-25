import {reverseWords} from './151';

type TestCase = {
  name: string;
  input: string;
  expected: string;
};

const cases: TestCase[] = [
  {
    name: 'reverses a regular sentence',
    input: 'the sky is blue',
    expected: 'blue is sky the',
  },
  {
    name: 'collapses extra spaces before reversing',
    input: '  hello   world  ',
    expected: 'world hello',
  },
  {
    name: 'handles a single word and trims whitespace',
    input: '   algorithms   ',
    expected: 'algorithms',
  },
  {
    name: 'returns empty string for all spaces',
    input: '     ',
    expected: '',
  },
  {
    name: 'keeps punctuation attached to its word',
    input: 'Bob loves, Alice!',
    expected: 'Alice! loves, Bob',
  },
  {
    name: 'handles mixed spacing between many words',
    input: 'a  good   example of   spaces',
    expected: 'spaces of example good a',
  },
];

describe('151. Reverse Words in a String', () => {
  it.each(cases)('$name', ({input, expected}) => {
    const result = reverseWords(input);
    expect(result).toBe(expected);
  });
});
