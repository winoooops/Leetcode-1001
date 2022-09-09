import { improvedFunc, largestSumAfterKNegations } from "./index"

describe("Leetcode 1005: Largest Sum after K Negations", () => {
  it("it should be 5", () => {
    const nums = [4,2,3]
    const k = 1
    expect(largestSumAfterKNegations(nums,k)).toBe(5)
    expect(improvedFunc(nums,k)).toBe(5)
  })

  it("it should be 6", () => {
    const nums = [3,-1,0,2]
    const k = 3
    expect(largestSumAfterKNegations(nums,k)).toBe(6)
    expect(improvedFunc(nums,k)).toBe(6)
  })

  it("it should be 5", () => {
    const nums = [2,-3,-1,5,-4]
    const k = 2
    expect(largestSumAfterKNegations(nums,k)).toBe(13)
    expect(improvedFunc(nums,k)).toBe(13)
  })

  it("it should be 22", () => {
    const nums = [-8,3,-5,-3,-5,-2]
    const k = 6 
    expect(largestSumAfterKNegations(nums, k)).toBe(22)
    expect(improvedFunc(nums, k)).toBe(22)
  })
})
