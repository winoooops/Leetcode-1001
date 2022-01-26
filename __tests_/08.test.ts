import { removeDuplicates } from '../Easy/8.delete_duplicates_from_sorted_lists'

describe('delete duplicates from sorted lists', () => {
  it('length should be right', () => {
    const nums = [1, 1, 2]
    const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    expect(removeDuplicates(nums)).toBe(2)
    expect(removeDuplicates(nums2)).toBe(5)
  })
});