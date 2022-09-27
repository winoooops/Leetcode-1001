import { monoIncreaseDigits } from "./index"

describe("Leetcode 738: Monotone Increasing Digits", () => {
  it("should be 9", () => {
    const s = 10
    expect(monoIncreaseDigits(s)).toBe(9);
  });

  it("should be 1234", () => {
    const s = 1234
    expect(monoIncreaseDigits(s)).toBe(1234);
  });

  it("should be 299", () => {
    const s = 332
    expect(monoIncreaseDigits(s)).toBe(299);
  });


  it("should be 99", () => {
    const s = 100
    expect(monoIncreaseDigits(s)).toBe(99);
  });

  it("should be 9999", () => {
    const s = 10000
    expect(monoIncreaseDigits(s)).toBe(9999);
  });
})
