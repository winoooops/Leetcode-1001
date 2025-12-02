import {fullJustify, fullJustify2} from './68';

describe('68 text justification', () => {
  it('formats lines with even and extra spaces', () => {
    expect(
      fullJustify(
        ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
        16
      )
    ).toEqual(['This    is    an', 'example  of text', 'justification.  ']);
  });

  it('handles a single-word middle line', () => {
    expect(
      fullJustify2(['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16)
    ).toEqual(['What   must   be', 'acknowledgment  ', 'shall be        ']);
  });

  it('keeps the last line left-justified', () => {
    expect(
      fullJustify(
        [
          'Science',
          'is',
          'what',
          'we',
          'understand',
          'well',
          'enough',
          'to',
          'explain',
          'to',
          'a',
          'computer.',
          'Art',
          'is',
          'everything',
          'else,',
          'we',
          'do',
        ],
        20
      )
    ).toEqual([
      'Science  is  what we',
      'understand      well',
      'enough to explain to',
      'a  computer.  Art is',
      'everything  else, we',
      'do                  ',
    ]);
  });

  it('produces the same output with solution 2', () => {
    const input = [
      'Science',
      'is',
      'what',
      'we',
      'understand',
      'well',
      'enough',
      'to',
      'explain',
      'to',
      'a',
      'computer.',
      'Art',
      'is',
      'everything',
      'else,',
      'we',
      'do',
    ];
    const expected = [
      'Science  is  what we',
      'understand      well',
      'enough to explain to',
      'a  computer.  Art is',
      'everything  else, we',
      'do                  ',
    ];
    expect(fullJustify(input, 20)).toEqual(expected);
    expect(fullJustify2(input, 20)).toEqual(expected);
  });
});
