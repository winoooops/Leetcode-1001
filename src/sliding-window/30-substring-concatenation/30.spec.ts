import {findSubstring, findSubstringII} from './30';

describe('30', () => {
  it('should be [0, 9]', () => {
    const s = 'barfoothefoobarman';
    const words = ['foo', 'bar'];

    expect(findSubstringII(s, words)).toEqual(expect.arrayContaining([0, 9]));
  });

  it('should be []', () => {
    const s = 'wordgoodgoodgoodbestword';
    const words = ['word', 'good', 'best', 'word'];

    expect(findSubstring(s, words)).toEqual(expect.arrayContaining([]));
  });

  it('should be [6, 9, 12]', () => {
    const s = 'barfoofoobarthefoobarman';
    const words = ['bar', 'foo', 'the'];

    expect(findSubstring(s, words)).toEqual(expect.arrayContaining([6, 9, 12]));
  });
});
