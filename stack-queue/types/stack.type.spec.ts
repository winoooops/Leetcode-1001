import { Stack, StackElement } from "./stack.type"

describe("Test Stack Element Class", () => {
  it("should have the right right class with right value", () => {
    let stackElement: StackElement<number> = new StackElement(8)
    expect(stackElement).toBeInstanceOf(StackElement)
    expect(stackElement).toEqual({
      _value: 8,
      _next: null
    })
  })

  it("the getter and setter should be working", () => {
    let firstElement: StackElement<number> = new StackElement(8)
    let secondElement: StackElement<number> = new StackElement(2)

    firstElement.value = 1
    firstElement.next = secondElement

    expect(firstElement.value).toEqual(1)
    expect(firstElement.next).toEqual(secondElement)
  })
})

describe("Test Stack Class", () => {
  it("should have the right class with correct init data", () => {
    let myStack: Stack<number> = new Stack();

    expect(myStack).toBeInstanceOf(Stack)
    expect(myStack).toEqual({
      _first: null,
      _last: null,
      _size: 0
    })
  })

  it("getters and setters are all working", () => {
    let myStack: Stack<number> = new Stack();

    let first = new StackElement(1)
    let last = new StackElement(2)
    myStack.first = first;
    myStack.last = last;
    myStack.size = 2 

    expect(myStack).toEqual({
      _first: first,
      _last: last, 
      _size: 2
    })
  })
})

describe("Functionalities Tests", () => {
  it("push() should be working", () => {
    let myStack: Stack<number> = new Stack()
    myStack.push(0)
    myStack.push(1)

    expect(myStack.first.value).toEqual(0)
    expect(myStack.first.next).toEqual(new StackElement(1))
    expect(myStack.last.value).toEqual(1)
    expect(myStack.size).toEqual(2)
  })

  it("pop() should be working", () => {
    let myStack = new Stack() 

    myStack.push(0)
    myStack.push(1)
    myStack.push(2)
    myStack.pop()

    expect(myStack.size).toBe(2)
    expect(myStack.first.value).toEqual(1)
    expect(myStack.last.value).toEqual(2)
  })

  it("peek() should be working", () => {
    let myStack: Stack<number> = new Stack() 
    myStack.push(0)
    myStack.push(1)
    myStack.push(2)

    expect(myStack.peek()).toEqual(0)
  })
})
