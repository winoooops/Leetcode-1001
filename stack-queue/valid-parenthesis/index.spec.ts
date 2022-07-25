import { isValid } from "./index"

describe("LeetCode 20: Valid Parenthesis", () => {
  it("should be false", () => {
    const s = "([{}]()"
    expect(isValid(s)).toBe(false)
  })

  it("should be false", () => {
    const s = "([{}}}"
    expect(isValid(s)).toBe(false)
  })

  it("should be false", () => {
    const s = "([{}])))"
    expect(isValid(s)).toBe(false)
  })

  it("should be true", () => {
    const s = "()[]{}"
    expect(isValid(s)).toBe(true)
  })

  it("should be true", () => {
    const s = "{[()]}"
    expect(isValid(s)).toBe(true)
  })
})
