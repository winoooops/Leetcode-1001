import {isPalindrome} from "./125";

describe('125. isPalindrome', () => {
  it('A man, a plan, a canal: Panama', function () {
    const s = "A man, a plan, a canal: Panama";
    const result = isPalindrome(s);
    expect(result).toBe(true);
  });

  it('race a car', function () {
    const s = "race a car";
    const result = isPalindrome(s);
    expect(result).toBe(false);
  });

  it('just space', function () {
    const s = " ";
    const result = isPalindrome(s);
    expect(result).toBe(true);
  });
})
