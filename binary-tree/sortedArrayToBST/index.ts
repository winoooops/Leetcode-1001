import { TreeNode } from "../treenode.type"

export function arrayToBST(nums: number[]) {
  function helper(left: number, right: number): TreeNode | null {
    if (left > right) return null

    const idx = Math.floor((right + left) / 2)

    const root = new TreeNode(nums[idx])

    root.left = helper(left, idx - 1)
    root.right = helper(idx + 1, right)

    return root
  }

  return helper(0, nums.length - 1)
}


export function preOrder(nums: number[]): TreeNode | null {
  if (!nums.length) return null

  let root = new TreeNode(0)

  const treeQueue: TreeNode[] = []
  const leftQueue: number[] = []
  const rightQueue: number[] = []

  treeQueue.push(root)
  leftQueue.push(0)
  rightQueue.push(nums.length - 1)

  while (treeQueue.length > 0) {
    let curr: TreeNode | null = treeQueue.shift()!
    let left: number = leftQueue.shift()!
    let right: number = rightQueue.shift()!

    let mid: number = Math.floor((left + right) / 2)

    curr.val = nums[mid]

    if (left < mid) {
      curr.left = new TreeNode(0)
      treeQueue.push(curr.left)
      leftQueue.push(left)
      rightQueue.push(mid - 1)
    }

    if (right > mid) {
      curr.right = new TreeNode(0)
      treeQueue.push(curr.right)
      leftQueue.push(mid + 1)
      rightQueue.push(right)
    }
  }

  return root
}
