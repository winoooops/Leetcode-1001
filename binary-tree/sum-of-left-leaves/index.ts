import { TreeNode } from "../treenode.type"

export function sumOfLeftLeaves(root: TreeNode | null): number {
  const stack: TreeNode[] = []
  let curr: TreeNode | null = root 
  let sum: number = 0 

  if(!curr) return sum

  stack.push(curr)

  while(stack.length) {
    curr = stack.pop()!

    if(!curr) {
      curr = stack.pop()!
      continue
    }

    curr.right && stack.push(curr.right)

    if(curr.left) {
      stack.push(curr.left)
      if(!curr.left.left && !curr.left.right) {
        sum += curr.left.val
      } 
    }
    stack.push(curr)
    stack.push(null)
  }

  return sum
}

