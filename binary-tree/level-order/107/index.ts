import { TreeNode } from "../../treenode.type"

export function levelOrderBottom(root: TreeNode) {
  const result: number[][] = []
  const queue: TreeNode[] = []
  let level: number[] = []
  let curr: TreeNode = root
  let length: number

  queue.push(curr)

  while(queue.length > 0) {
    level = []
    length = queue.length

    for(let i = 0; i < length ; i++) {
      curr = queue.shift()!
      curr?.val && level.push(curr.val)
      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }

    result.push(level)
  }

  return result.reverse()
}
