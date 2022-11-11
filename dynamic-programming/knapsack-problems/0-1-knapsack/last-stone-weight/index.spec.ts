import { lastStoneWeightII } from "./index"

describe("Leetcode 1049: Weight of the Last Stone", () => {
  it("should be 0", () => {
    const stones = [1, 7, 1, 8, 1];
    expect(lastStoneWeightII(stones)).toBe(0);
  });

  it("should be 1", () => {
    const stones = [2, 7, 4, 1, 8, 1];
    expect(lastStoneWeightII(stones)).toBe(1);
  })
});