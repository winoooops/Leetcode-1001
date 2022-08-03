import { TreeNode } from "../../treenode.type"

export function largestFromBinary(root: TreeNode): number[] {
  const result: number[] = []
  const queue: TreeNode[] = []

  let curr: TreeNode = root
  let len: number
  let max: number = 0 

  queue.push(curr)

  while(queue.length > 0) {
    len = queue.length
    max = 0

    for(let i = 0 ; i < len ; i++) {
      curr = queue.shift()! 
      curr.val > max ? (max = curr.val) : max
      
      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }
    result.push(max)
  }



  return result
} 
