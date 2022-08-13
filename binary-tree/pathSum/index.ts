import { TreeNode } from "../treenode.type"

export function pathSum(root: TreeNode | null, targetSum: number) {
  const paths: number[][] = []

  function recur(node: TreeNode | null, sum: number, path: number[]) {
    if (!node) return

    if (!node.left && !node.right && sum === targetSum) {
      paths.push(path)
    }

    if (node.left) {
      recur(node.left, sum + node.left.val, [...path, node.left.val])
    }

    if (node.right) {
      recur(node.right, sum + node.right.val, [...path, node.right.val])
    }
  }

  if (!root) return paths

  recur(root, root.val, [root.val])

  return paths
}



