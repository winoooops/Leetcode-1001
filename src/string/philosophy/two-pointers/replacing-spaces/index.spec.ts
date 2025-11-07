import {replaceSpaces} from './';

describe('replaceSpace', () => {
  it('replaces spaces with %20 (README example)', () => {
    expect(replaceSpaces('We are happy.')).toBe('We%20are%20happy.');
  });

  it('returns original string when there are no spaces', () => {
    expect(replaceSpaces('leetcode')).toBe('leetcode');
  });

  it('handles leading and trailing spaces without extra padding', () => {
    expect(replaceSpaces(' leading and trailing ')).toBe(
      '%20leading%20and%20trailing%20'
    );
  });

  it('handles consecutive spaces between words', () => {
    expect(replaceSpaces('keep  double   spaces')).toBe(
      'keep%20%20double%20%20%20spaces'
    );
  });

  it('converts a string of only spaces to repeated %20 tokens', () => {
    expect(replaceSpaces('   ')).toBe('%20%20%20');
  });

  it('returns empty string when input is empty', () => {
    expect(replaceSpaces('')).toBe('');
  });
});
