import { fourSumCount } from "./index"

describe("LeetCode 454: Four Sum", () => {
  it("should return 2", () => {
    const nums1 = [1,2]
    const nums2 = [-2,-1]
    const nums3 = [-1,2]
    const nums4 = [0,2]

    expect(fourSumCount(nums1, nums2, nums3, nums4)).toEqual(2)

  })
  it("should return 2", () => {
    const nums1 = [0]
    const nums2 = [0]
    const nums3 = [0]
    const nums4 = [0]

    expect(fourSumCount(nums1, nums2, nums3, nums4)).toEqual(1)

  })
})

