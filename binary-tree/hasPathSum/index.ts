import { TreeNode } from "../treenode.type"

export function hasPathSum(root: TreeNode | null, targetSum: number) {
  if (!root) return false
  const queue: Array<TreeNode | null> = []
  let curr: TreeNode | null = root
  let sum: number = root.val
  let sumQueue: number[] = []


  queue.push(curr)
  sumQueue.push(sum)

  while (queue.length) {
    curr = queue.shift()!
    sum = sumQueue.shift()!

    if (!curr.left && !curr.right && sum === targetSum) {
      return true
    }

    if (curr.left) {
      queue.push(curr.left)
      sumQueue.push(sum + curr.left.val)
    }

    if (curr.right) {
      queue.push(curr.right)
      sumQueue.push(sum + curr.right.val)
    }
  }

  return false
}


