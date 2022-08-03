import { TreeNode } from "../../treenode.type"

export function averageOfLevels(root: TreeNode) {
  const result: number[] = []
  const queue: TreeNode[] = []

  let curr: TreeNode = root
  let length: number 
  let sum: number

  queue.push(curr)

  while(queue.length > 0) {
    length = queue.length
    sum = 0 
    for(let i = 0 ; i < length; i++) {
      curr = queue.shift()!
      sum += curr.val
      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }

    result.push(sum / length)
  }

  return result
}
