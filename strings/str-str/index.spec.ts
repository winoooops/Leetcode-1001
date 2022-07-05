import { getNext, strStr } from "./index"


describe("LeetCode 28: subStr", () => {
  it("should get the correct next array", () => {
    const str = "aabaaf"

    expect(getNext(str)).toEqual([0,1,0,1,2,0])
  })

  it("should get the correct next array", () => {
    const str = "bbab"

    expect(getNext(str)).toEqual([0, 1, 0, 1])
  })


  it("should return 3", () => {
    const haystack = "aabaabaafa", needle = "aabaaf"

    expect(strStr(haystack, needle)).toEqual(3);
  })

  it("should return -1", () => {
    const haystack = "adcadcaddcadde", needle = "adcadde"

    expect(strStr(haystack, needle)).toEqual(-1)
  })
})
