import {calculate} from "./224";

describe('224. Basic Calculator', () => {
  it('should be 2', function () {
    const s = "1 + 1"
    expect(calculate(s)).toBe(2);
  });

  it('should be 3', function () {
    const s = "2-1 + 2"
    expect(calculate(s)).toBe(3);
  });

  it('should be 23', function () {
    const s = "(1+(4+5+2)-3)+(6+8)"
    expect(calculate(s)).toBe(23);
  });

  it('should be -5', function() {
    const s = "-(2-1+2)"
    expect(calculate(s)).toBe(-3);
  })

  it("should be 2147483647", function() {
    const s = '2147483647';
    expect(calculate(s)).toBe(2147483647);
  })

  it("should be 30", function() {
    const s = "   30";
    expect(calculate(s)).toBe(30);
  })
});
