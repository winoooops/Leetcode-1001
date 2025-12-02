import {fullJustifify} from './68';

describe('68 text justification', () => {
  it('formats lines with even and extra spaces', () => {
    expect(
      fullJustifify(
        ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
        16
      )
    ).toEqual(['This    is    an', 'example  of text', 'justification.  ']);
  });

  it('handles a single-word middle line', () => {
    expect(
      fullJustifify(['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16)
    ).toEqual(['What   must   be', 'acknowledgment  ', 'shall be        ']);
  });

  it('keeps the last line left-justified', () => {
    expect(
      fullJustifify(
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
});
