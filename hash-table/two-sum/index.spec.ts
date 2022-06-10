import { twoSum } from "./index"

describe("LeeCode 1: Two Sum", () => {

  it("should return [0, 1]", () => {
    const nums = [2, 7, 11, 15]
    const target = 9 

    expect(twoSum(nums, target)).toEqual(expect.arrayContaining([0, 1]))
  })

  it("should return [1, 2]", () => {
    const nums = [3, 2, 4]
    const target = 6 

    expect(twoSum(nums, target)).toEqual(expect.arrayContaining([1, 2]))
  })

  it("should return [0, 1]", () => {
    const nums = [3, 3]
    const target = 6 

    expect(twoSum(nums, target)).toEqual(expect.arrayContaining([0, 1]))
  })
})
