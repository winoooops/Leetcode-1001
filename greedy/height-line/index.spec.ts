import { reconstructQueue } from "./index" 

describe("Leetcode 406: Reconstruct Line by Height", () => {
  it("should be right", () => {
    const people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]] 

    expect(reconstructQueue(people)).toEqual([[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]])
  })
})
