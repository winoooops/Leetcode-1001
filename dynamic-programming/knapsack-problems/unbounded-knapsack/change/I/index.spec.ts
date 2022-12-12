import { coinChange } from "./index"

describe("Leecode 322: Coin Change I", () => {
  it("should be 3", () => {
    const coins = [1, 2, 5];
    const amount = 11;
    expect(coinChange(coins, amount)).toBe(3);
  })
  it("should be -1", () => {
    const coins = [2];
    const amount = 3;
    expect(coinChange(coins, amount)).toBe(-1);
  })
  it("should be 3", () => {
    const coins = [1];
    const amount = 0;
    expect(coinChange(coins, amount)).toBe(0);
  })
})