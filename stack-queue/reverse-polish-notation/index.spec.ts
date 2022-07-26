import { evalRPN } from "./index"

describe("Leetcode 150: Reverse Polish Notation", () => {
  it("should be 9", () => {
    const tokens = ["2", "1", "+", "3", "*"]
    expect(evalRPN(tokens)).toEqual(9)
  })

  it("should be 6", () => {
    const tokens = ["4", "13", "5", "/", "+"]
    expect(evalRPN(tokens)).toEqual(6)
  })

  it("should be 22", () => {
    const tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];    
    expect(evalRPN(tokens)).toEqual(22)
  })
})
