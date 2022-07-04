import { reverseLeftWords } from "./index"


describe("剑指Offer 58: 左旋转字符串", () => {
  it("should be right", () => {
    const s = "abcdefg", k = 2; 
    expect(reverseLeftWords(s, k)).toEqual("cdefgab")
  })

  it("should be right", () => {
    const s = "lrloseumgh", k = 6 
    expect(reverseLeftWords(s, k)).toEqual("umghlrlose")
  })
})
