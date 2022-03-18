import { removeElement } from '../Easy/9.remove_elements'

describe('9. remove elements from array', () => {


  it('should remove elements that are equal to 2', () => {
    const nums = [2, 2, 3, 3]
    const target = 2
    expect(removeElement(nums, target)).toBe(2)
  })

  it('should return 5', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2]
    const val = 2
    expect(removeElement(nums, val)).toBe(5)
  })
});