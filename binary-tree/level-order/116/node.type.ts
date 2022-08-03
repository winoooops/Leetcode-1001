import { TreeNode } from "../../treenode.type"

export class Node{
  left: Node | null
  right: Node | null
  next: Node | null 
  val: number;
  constructor(val: number, left?: Node, right?: Node, next?: Node){
    this.val = val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.next = next === undefined ? null : next
  }

  static create(list: Array<number>): Node {
    const root = new Node(list[0])
    const queue: Node[] = []
    let curr:Node = root 
    let isLeft: boolean = true 
    let node: Node

    queue.push(curr)

    for(let i = 1; i < list.length ; i++) {
      if(i % 2 === 1) {
        curr = queue.shift()!
      } 
       node = new Node(list[i])
       queue.push(node)

      if(isLeft) {
        curr.left = node
      } else {
        curr.right = node
      }
      
      isLeft = !isLeft
    }
    
    return root
  }
}
