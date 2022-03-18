import { BinarySearch } from './index'

describe("Binary Search", () => {
  it('if not found, return -1', () => {
    const nums = [-1, 0, 3, 5, 9, 12]
    const target = 2 
    expect(BinarySearch(nums, target)).toBe(-1)
  })

  it('should return correct index', () => {
    const nums = [-1, 0, 3, 5, 9, 12]
    const target = 3
    expect(BinarySearch(nums, target)).toBe(2)
  })
})
