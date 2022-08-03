import { Node } from "./node.type"


describe("Test Functionality of Node Class", () => {
  it("Test with 3 layers ", () => {
    // const list = [1, null, 3, 2, 4, null, 5, 6 ]
    const list = [1, null, 3, 2, 4, null, 5, 6, null, null,7, 8]
    
    let node = Node.create(list)

    expect(node.children[0].val).toEqual(3)
    expect(node.children[0].children.map(i=>i.val)).toEqual([5,6])

    expect(node.children[1].val).toEqual(2)
    expect(node.children[1].children).toHaveLength(0)

    expect(node.children[2].val).toEqual(4)
    expect(node.children[2].children.map(i => i.val)).toEqual([7,8])
  })

  it("test with 5 layers", () => {
    const list = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]

    let node = Node.create(list)
 })
})
