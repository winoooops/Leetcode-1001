import { TreeNode } from "../treenode.type"

export function trimBST(root: TreeNode | null, left: number, right: number): TreeNode | null {
  if (!root) return root

  // recursively look for a node's subtree even if it doesn't fit in the range
  if (root.val > right) return trimBST(root.left, left, right)
  if (root.val < left) return trimBST(root.right, left, right)

  root.left = trimBST(root.left, left, right)
  root.right = trimBST(root.right, left, right)

  return root
}