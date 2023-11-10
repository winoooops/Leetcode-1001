import {validParentheses} from "./20";

describe('20. Valid Parentheses', () => {
  it('should be true', function () {
    expect(validParentheses("()")).toBe(true);
  });

  it('should be true', function () {
    expect(validParentheses("()[]{}")).toBe(true);
  });

  it('should be false', function () {
    expect(validParentheses("(]")).toBe(false);
  });
})
