import { TreeNode } from "../treenode.type"

export function convertBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  let sum: number = 0

  function recur(root: TreeNode | null): TreeNode | null {
    if (!root) return

    // right 
    recur(root.right)

    // root
    sum += root.val
    root.val = sum

    // left
    recur(root.left)

    return root
  }

  recur(root)

  return root
}

export function reverseInOrder(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  let prev: TreeNode | null = null
  let curr: TreeNode | null = root

  const stack: TreeNode[] = []
  stack.push(curr)

  while (stack.length > 0) {
    curr = stack.pop()!

    if (!curr) {
      curr = stack.pop()!
      if (prev) {
        curr.val += prev.val
      }
      prev = curr
      continue
    }

    curr.left && stack.push(curr.left)
    stack.push(curr)
    stack.push(null)
    curr.right && stack.push(curr.right)
  }

  return root
}
