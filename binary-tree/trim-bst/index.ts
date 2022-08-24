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

export function trimBST2(root: TreeNode | null, left: number, right: number): TreeNode | null {
  if (!root) return root

  // 处理头结点，让root移动到[L, R] 范围内，注意是左闭右闭
  while (root && (root.val < left || root.val > right)) {
    if (root.val < left) root = root.right
    if (root.val > right) root = root.left
  }

  let curr: TreeNode | null = root

  // 此时root已经在[L, R] 范围内，处理左孩子元素小于left的情况
  while (curr) {
    while (curr.left && curr.left.val < left) {
      curr.left = curr.left.right
    }
    curr = curr.left
  }

  curr = root

  // 此时root已经在[L, R] 范围内，处理右孩子元素大于right的情况
  while (curr) {
    while (curr.right && curr.right.val > right) {
      curr.right = curr.right.left
    }
    curr = curr.right
  }

  return root
}
