import { TreeNode } from "../../treenode.type"

export function maxDepth(root: TreeNode | null): number {
  return getDepth(root)
}

function getDepth(node: TreeNode | null) {
  if(!node) return 0

  let left = getDepth(node?.left)
  let right = getDepth(node?.right)

  return Math.max(left, right) + 1
}
