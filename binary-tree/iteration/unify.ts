import { TreeNode } from "../treenode.type"

export function uInorder(root: TreeNode) {
  const result: number[] = []
  const stack: TreeNode[] = []
  let curr: TreeNode = root

  stack.push(curr)

  while(stack.length > 0) {
    curr = stack.pop()!

    if(!curr) {
      result.push(stack.pop()!.val)
      continue;
    }

    curr?.right && stack.push(curr.right)
    stack.push(curr)
    stack.push(null)
    curr?.left && stack.push(curr.left)
  }

  return result
}

export function uPreOrder(root: TreeNode) {
  const result: number[] = []
  const stack: TreeNode[] = []
  let curr: TreeNode = root

  stack.push(curr)

  while(stack.length > 0) {
    curr = stack.pop()!

    if(!curr) {
      result.push(stack.pop()!.val)
      continue;
    }

    curr?.right && stack.push(curr.right)
    curr?.left && stack.push(curr.left)
    stack.push(curr)
    stack.push(null)
  }

  return result
}

export function uPostOrder(root: TreeNode): number[] {
  const result: number[] = []
  const stack: TreeNode[] = []
  let curr: TreeNode = root
  stack.push(curr)

  while(stack.length > 0) {
    curr = stack.pop()!

    if(!curr) {
      result.push(stack.pop()!.val)
      continue
    }
    stack.push(curr)
    stack.push(null)
    curr?.right && stack.push(curr.right)
    curr?.left && stack.push(curr.left)
  }

  return result
}

