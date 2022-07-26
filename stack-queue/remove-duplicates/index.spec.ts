import { removeDuplicates, removeDuplicates2, removeDuplicates3 } from "./index"

describe("Leetcode 1047: Remove Duplicates", () => {
  it("should be 'ca'", () => {
    const s = "abbaca"
    expect(removeDuplicates(s)).toEqual("ca")
  })

  it("should be 'ca'", () => {
    const s = "abbaca"
    expect(removeDuplicates2(s)).toEqual("ca")
  })

  it("should be 'ca'", () => {
    const s = "abbaca"
    expect(removeDuplicates3(s)).toEqual("ca")
  })
})
