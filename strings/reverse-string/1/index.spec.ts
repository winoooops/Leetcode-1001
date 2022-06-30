import { reverseString } from "./index"

describe("LeetCode 344: Reverse String", () => {
  it("should return as olleh", () => {
    expect(reverseString(["h", "e", "l", "l", "o"]).join("")).toEqual("olleh");
  })

  it("should return as hannaH", () => {
    expect(reverseString(["H", "a", "n", "n", "a", "h"]).join("")).toEqual("hannaH");
  })
});
