import { TreeNode } from "../treenode.type"

export function isBalanced(root: TreeNode | null) {
  if(!root) return true

  const stack: TreeNode[] = []
  let curr: TreeNode | null = root
  let left: number = 0
  let right: number = 0 

  stack.push(curr)

  while(stack.length > 0) {
    curr = stack.pop()!

    if(!curr) stack.push(curr)

    if(curr?.right) {
      right++
      stack.push(curr.right)
    }

    if(curr?.left) {
      left++
      stack.push(curr.left)
    }
    if(Math.abs(left-right) > 0) return false 
  }

  return true

}
