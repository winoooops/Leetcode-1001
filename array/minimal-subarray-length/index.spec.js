import { minSubArrayLen } from './index'

describe("Test Minimal Size Subarray Sum", () => {
  it('should return 0 if the sum of every elements is smaller than target', () => {
    const array = [1,2,3]
    const target = 7
    expect(minSubArrayLen(array, target)).toBe(0)
  })

  it('should return 2', () => {
    const array = [2,3,1,2,4,3]
    const target = 7 
    expect(minSubArrayLen(array, target)).toBe(2)
  })

  it('should return 1', () => {
    const array = [1,4,4]
    const target = 4 
    expect(minSubArrayLen(array, target)).toBe(1)
  })

  it('should return 0', () => {
    const array = [1,1,1,1,1,1,1,1,1,1]
    const target = 11 
    expect(minSubArrayLen(array, target)).toBe(0)
  })
})
