import { PriorityQueue, topKFrequency, topKFrequencyII } from "./index"

describe("Leetcode 347: Top K Frequent Element", () => {
  let pQueue: PriorityQueue

  beforeEach(() => {
    pQueue = new PriorityQueue()
  })

  afterEach(() => {
    pQueue = null
  })

  it("should be [2, 3]", () => {
    const nums = [1, 3, 2, 2, 2, 1, 3, 3, 2]
    expect(topKFrequencyII(nums, 2)).toEqual(expect.arrayContaining([2, 3]))
  })

  it("should be [1, 2]", () => {
    const nums = [1, 1, 1, 2, 2, 3]
    expect(topKFrequencyII(nums, 2)).toEqual(expect.arrayContaining([1, 2]))
  })
})
