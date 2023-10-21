import {findSubstring} from "./30";

describe('30', () => {
  it('should be [0, 9]', function () {
    const s = "barfoothefoobarman"
    const words = ["foo","bar"]

    expect(findSubstring(s, words)).toEqual(expect.arrayContaining([0,9]));
  });

  it('should be []', function () {
    const s = "wordgoodgoodgoodbestword"
    const words = ["word","good","best","word"]

    expect(findSubstring(s, words)).toEqual(expect.arrayContaining([]));
  });

  it('should be [6, 9, 12]', function () {
    const s = "barfoofoobarthefoobarman";
    const words = ["bar","foo","the"];

    expect(findSubstring(s, words)).toEqual(expect.arrayContaining([6, 9, 12]));
  });
})
