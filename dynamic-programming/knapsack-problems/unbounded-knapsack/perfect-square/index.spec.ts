import { numSquares } from "./index"

describe("Leetcode 279: NumSquare", () => {
  it("should be 3", () => {
    expect(numSquares(12)).toBe(3);
  })

  it("should be 2", () => {
    expect(numSquares(13)).toBe(2);
  })
})