import { TreeNode } from "../../treenode.type"

export function rightSideView(root: TreeNode): number[] {
  const result: number[] = []
  const queue: TreeNode[] = []
  let curr: TreeNode = root
  let length: number

  queue.push(curr)

  while(queue.length > 0) {
    length = queue.length
    
    for(let i = 0; i < length ; i++) {
      curr = queue.shift()!

      if(i === length - 1) {
        result.push(curr.val)
      }

      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }
  }

  return result
}
