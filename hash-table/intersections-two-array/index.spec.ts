import { intersections } from './index'

describe("LeetCode 349: Find Intersections of Two Array", () => {
  it("should return [2]", () => {
    const nums1 = [1,2,2,1]
    const nums2 = [2,2]

    expect(intersections(nums1, nums2)).toEqual([2])
  })

  it("should return [9,4] or [4,9]", () => {
    const nums1 = [4,9,5]
    const nums2 = [2,2]

    expect(intersections(nums1, nums2)).toEqual(expect.arrayContaining([4,9]))
  })
})
