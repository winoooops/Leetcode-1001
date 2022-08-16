import { TreeNode } from "../treenode.type"

export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  return helper(nums, 0, nums.length - 1)
}

function helper(nums: number[], left: number, right: number): TreeNode | null {
  if(right < left) return null

  let idx: number
  for(let i = left; i <= right; i++) {
    if(!idx || nums[idx] < nums[i]) {
      idx = i 
    }
  }

  const root = new TreeNode(nums[idx])

  root.left = helper(nums, left, idx - 1)
  root.right = helper(nums, idx + 1, right)

  return root
}
