import { Queue } from "./queue.type"

describe("Tesing Class Queue", () => {
  let myQueue: Queue<number>;

  beforeEach(() => {
    myQueue = new Queue()
  })

  afterEach(() => {
    myQueue = null
  })

  it("should be the right class", () => {
    expect(myQueue).toBeInstanceOf(Queue)
  })

  it("push() & peek() should work", () => {
    myQueue.push(1)
    myQueue.push(2)

    expect(myQueue.peek()).toEqual(1)
  })

  it("pop() should work", () => {
    myQueue.push(100)
    myQueue.push(20)
    myQueue.push(3)

    myQueue.pop()

    expect(myQueue.peek()).toEqual(20)
  })
})
