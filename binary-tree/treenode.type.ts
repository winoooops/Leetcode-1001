export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val: number, left?: TreeNode, right?: TreeNode) {
    this.val = val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }

  create(list: Array<number | null>):TreeNode {
    const root = new TreeNode(list[0])
    const queue: TreeNode[] = []
    let curr:TreeNode = root 
    let isLeft: boolean = true 
    let node: TreeNode

    queue.push(curr)

    for(let i = 1; i < list.length ; i++) {
      if(!list[i] && list[i] !== 0) {
        curr = queue.shift()!
        continue;
      } 
      node = new TreeNode(list[i])
      queue.push(node)

      isLeft ? (curr.left = node) : (curr.right = node)
      isLeft = !isLeft
    }
    
    return root
  }
}
