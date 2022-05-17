import { removeElement } from './index'

describe('Test removeElement', () => {
  it('should remove elements', () => {
    const nums = [0,1,2,2,2,3,0,4,2]
    const target = 0

    expect(removeElement(nums, target)).toBe(7)
  })

  it('should remove elements', () => {
    const nums = [0,1,2,2,3,0,4,2]
    const target = 2

    expect(removeElement(nums, target)).toBe(5)
  })

})
