import { LinkedList } from './index'

describe("Design LinkedList", () => {
  let linkedList: LinkedList 

  beforeEach(() => {
    linkedList = new LinkedList()
  })


  it("addAtHead is called", () => {
    const mockFn = jest.spyOn(linkedList, "addAtHead")

    linkedList.addAtHead(1)

    expect(mockFn).toHaveBeenCalledWith(1)
    expect(linkedList.get(0)).toEqual(1)
  })

  it("addAtTail is called", () => {
    const mockFn = jest.spyOn(linkedList, "addAtTail")

    linkedList.addAtTail(3)

    expect(mockFn).toHaveBeenCalledWith(3)
    expect(linkedList.get(0)).toEqual(3)
  })

  it("addAtIndex is called", () => {
    const mockFn = jest.spyOn(linkedList, "addAtIndex")

    linkedList.addAtIndex(0,2)

    expect(mockFn).toHaveBeenCalledWith(0, 2)
    expect(linkedList.get(0)).toEqual(2)
  })

  it("get is correct", () => {
    linkedList.addAtHead(1)
    linkedList.addAtTail(3)
    linkedList.addAtIndex(1,2)
    expect(linkedList.get(0)).toEqual(1)
    expect(linkedList.get(1)).toEqual(2)
    expect(linkedList.get(2)).toEqual(3)
  })

  it("deleteAtIndex is called", () => {
    const mockFn = jest.spyOn(linkedList, "deleteAtIndex")

    linkedList.addAtHead(1)
    linkedList.addAtTail(3)
    linkedList.addAtIndex(1,2)
    linkedList.deleteAtIndex(1)

    expect(mockFn).toHaveBeenCalledWith(1)
    expect(linkedList.get(0)).toEqual(1)
    expect(linkedList.get(1)).toEqual(3)
  })
})
