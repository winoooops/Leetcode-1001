import { MyStack } from "./index"

describe("LeetCode 225: implementing Stack using Queue", () => {
  let myStack: MyStack

  beforeEach(() => {
    myStack = new MyStack()
  })

  afterEach(() => {
    myStack = null
  })


  it("should have the right class", () => {
    expect(myStack).toBeInstanceOf(MyStack)
    expect(myStack.empty()).toBe(true)
  })

  it("should pop correctly", () => {
    myStack.push(1)
    myStack.push(2)
    myStack.push(3)

    let popOne = myStack.pop()
    
    expect(popOne).toEqual(3)
    expect(myStack.list()).toEqual([1,2])

    let popTwo = myStack.pop() 
    expect(popTwo).toEqual(2)
    expect(myStack.list()).toEqual([1])

    let popThree = myStack.pop() 
    expect(popThree).toEqual(1)
    expect(myStack.list()).toEqual([])
    expect(myStack.empty()).toBe(true)
  })

  it("should peek correctly", () => {
    myStack.push(1)
    myStack.push(2)
    myStack.push(3)

    myStack.pop()
    myStack.pop()
    expect(myStack.peek()).toBe(1)
    myStack.pop()
    expect(myStack.peek()).toBeFalsy()
  })
})
