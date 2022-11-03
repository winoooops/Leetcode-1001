import { uniquePathWithObstacles } from "./index"

describe("Leetcode 63: Unique Path with Obstacles", () => {
  it("should be 2", () => {
    const obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]];
    expect(uniquePathWithObstacles(obstacleGrid)).toBe(2);
  })

  it("should be 1", () => {
    const obstacleGrid = [[0,1],[0,0]]
    expect(uniquePathWithObstacles(obstacleGrid)).toBe(1);
  })
})
