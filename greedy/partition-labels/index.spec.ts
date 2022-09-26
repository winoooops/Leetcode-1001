import { partitionLabels } from "./index"

describe("Leetcode 763: Partition Labels", () => {
  it("should be [9, 7, 8]", () => {
    const s = "ababcbacadefegdehijhklij"; 
    expect(partitionLabels(s)).toEqual([9, 7, 8]);
  })
})
