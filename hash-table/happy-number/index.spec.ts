import { calculateSum, isHappy } from "./index"

describe("LeetCode 202: Happy Number", () => {

  describe("should calculate sum properly", () => {
    it("should be 82", () => {
      expect(calculateSum(19)).toEqual(82)
    })

    it("should be 44", () => {
      expect(calculateSum(226)).toEqual(44)
    })
  })

  describe("should check if a number is happy number", () => {
    it("19 is happy number", () => {
      expect(isHappy(19)).toEqual(true)
    })

    it("2 is not happy number", () => {
      expect(isHappy(2)).toEqual(false)
    })
  })
})
