import { TreeNode } from "../treenode.type"

export function inorder(root: TreeNode) {
  const result: number[] = []
  const stack: TreeNode[] = []

  let curr: TreeNode = root

  while(stack.length > 0 || curr) {
    if(curr) {
      stack.push(curr)
      curr = curr.left
    } else {
      curr = stack.pop()!
      result.push(curr.val)
      curr = curr.right
    } 
  }

  return result
}

