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

   it('should return correct index', () => {
    const nums = [-1, 0, 5]
    const target = 0
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    expect(BinarySearch(nums, target)).toBe(2)
=======
    expect(BinarySearch(nums, target)).toBe(1)
>>>>>>> parent of ab51a25 (refactor structure of java project and add java solution in array)
=======
    expect(BinarySearch(nums, target)).toBe(1)
>>>>>>> parent of ab51a25 (refactor structure of java project and add java solution in array)
=======
    expect(BinarySearch(nums, target)).toBe(2)
>>>>>>> parent of 1256a90 (some changes but mostly reviewing)
  })
})
