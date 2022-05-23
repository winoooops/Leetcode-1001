import { swapPairs } from "./index"
import { createListNode } from "../linkedlist.types"

describe("LeetCode 24: Swap Nodes in Pairs", () => {
  it("should return [2,1,4,3]", () => {
    const head = createListNode([1,2,3,4])
    expect(swapPairs(head)).toEqual(createListNode([2,1,4,3]));
  })
})
