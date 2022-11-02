import { fib } from "./index"

describe("Leetcode 509: Fibonacci", () => {
  it("should be 1", () => {
    expect(fib(2)).toBe(1)
  })

  it("should be 2", () => {
    expect(fib(3)).toBe(2)
  })

  it("should be 3", () => {
    expect(fib(4)).toBe(3)
  })
})