import { maxSlidingWindow, MonoQueue } from "./index"

describe("Leetcode 239: slinding window maximum", () => {
  let monoQueue: MonoQueue

  beforeEach(() => {
    monoQueue = new MonoQueue()
  })
  afterEach(() => {
    monoQueue = null
  })

  it("MonoClass is valid", () => {
    expect(monoQueue).toBeInstanceOf(MonoQueue)
    expect(monoQueue).toHaveProperty("push")
    expect(monoQueue).toHaveProperty("pop")
    expect(monoQueue).toHaveProperty("max")
    expect(monoQueue).toHaveProperty("queue")
  })

  it("push should be working", () => {
    const nums = [1, 3, -1, -3, 5, 3, 6, 7]
    for(let i of nums) {
      monoQueue.push(i)
    }
    expect(monoQueue.queue).toEqual([7])
  })

  it("should be right", () => {
    const nums = [1, 3, -1, -3, 5, 3, 6, 7]
    expect(maxSlidingWindow(nums, 3)).toEqual([3,3,5,5,6,7])
  })
})
  

