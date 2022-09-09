import { canJump } from './index'

describe("Leetcode 55: Jump Game", () => {
  it("should be true", () => {
    const nums = [2,3,1,1,4]
    expect(canJump(nums)).toEqual(true)
  })

  it("should be false", () => {
    const nums = [3,2,1,0,4]
    expect(canJump(nums)).toEqual(false)
  })

  it("should be false", () => {
    const nums = [1,0,1,0]
    expect(canJump(nums)).toEqual(false)
  })

  it("should be true", () => {
    const nums = [3]
    expect(canJump(nums)).toEqual(true)
  })
})
