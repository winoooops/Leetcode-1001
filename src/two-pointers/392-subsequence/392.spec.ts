import {isSubsequence} from "./392";

describe('392. Is Subsequence', () => {
  it('\'abc\' is subsequence of \'abhgdc\'', function () {
    const s : string = "abc";
    const t : string = "abhgdc"

    const result = isSubsequence(s, t);
    expect(result).toBe(true);
  });

  it('\'axc\' is NOT subsequence of \'abhgdc\'', function () {
    const s : string = "axc";
    const t : string = "abhgdc"

    const result = isSubsequence(s, t);
    expect(result).toBe(false);
  });

  it('\'ace\' is subsequence of \'abcde\'', function () {
    const s : string = "ace";
    const t : string = "abcde"

    const result = isSubsequence(s, t);
    expect(result).toBe(true);
  });

  it('\'aec\' is NOT subsequence of \'abcde\'', function () {
    const s : string = "aec";
    const t : string = "abcde"

    const result = isSubsequence(s, t);
    expect(result).toBe(false);
  });

  it('b is NOT subsequence of c', function () {
    const result = isSubsequence("b", "c");
    expect(result).toBe(false);
  });

  it('\'\' is subsequence of c', function () {
    const result = isSubsequence("", "c");
    expect(result).toBe(true);
  });
})
