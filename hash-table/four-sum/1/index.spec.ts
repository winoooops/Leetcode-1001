import { fourSum } from "./index"

describe("LeetCode 18: Four Sum I", () => {
  it("should return [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]", () => {
    const nums = [1,0,-1,0,-2,2]
    const target = 0

    expect(fourSum(nums, target)).toEqual([[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]])
  });


  it("should return [2,2,2,2]", () => {
    const nums = [2,2,2,2]
    const target = 8 

    expect(fourSum(nums,target)).toEqual([[2,2,2,2]])
  });
})
