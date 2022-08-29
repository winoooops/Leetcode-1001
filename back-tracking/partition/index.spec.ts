import { isPalidome, partition } from "./index"

describe("Leetcode 131: Patition Palidome", () => {

  it("should be palidome", () => {
    expect(isPalidome("aab", 0, 2)).toEqual(false)
    expect(isPalidome("aab", 0, 1)).toEqual(true)
    expect(isPalidome("aab", 0, 0)).toEqual(true)
  })

  it("should be right", () => {
    expect(partition("aab")).toEqual(expect.arrayContaining([["a", "a", "b"], ["aa", "b"]]))
  })
})
