import { reverseStr } from "./index"

describe("LeetCode 341: ReverseString II", () => {
  it("should return 'bacd'", () => {
    expect(reverseStr("abcd", 2)).toEqual("bacd");
  })

  it("should return 'bacdfeg'", () => {
    expect(reverseStr("abcdefg", 2)).toEqual("bacdfeg");
  })
});
