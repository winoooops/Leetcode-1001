import { TreeNode } from "../../treenode.type"

export function minDepth(root: TreeNode | null): number {
  let depth: number = 0 
  const queue: TreeNode[] = []

  let curr: TreeNode = root
  let levelLength: number 
  queue.push(curr)

  while(queue.length > 0) {
    levelLength = queue.length
    depth++
    for(let i = 0; i < levelLength ; i++) {
      curr = queue.shift()!
      if(!curr?.left && !curr?.right) return depth
      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }
  }

  return depth
}
