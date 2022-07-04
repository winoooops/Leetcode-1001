import { delExSpaces, reverseWords } from "./index"

describe("LeetCode 151: reverse words in a string", () => {
  describe("should trim the extra spaces", () => {
    it("should delete extra spaces", () => {
      const str = "  hello  word "

      expect(delExSpaces(str.split(''))).toEqual([
        'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'd'
      ])
    });

    it("should delete extra spaces", () => {
      const str = "a good     example"
      expect( delExSpaces(str.split('')) ).toEqual([
        "a", ' ', 'g', 'o', 'o', 'd', ' ', 'e', 'x', 'a', 'm', 'p', 'l', 'e'
      ]);
    });
  })

  it("", () => {
    const str = "  hello world  "
    expect(reverseWords(str)).toEqual("world hello")
  });
})
