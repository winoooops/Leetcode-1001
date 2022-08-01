import { TreeNode } from "../treenode.type"

export function postorder(root: TreeNode) {
  const result: number[] = []
  const stack: TreeNode[] = []

  let curr: TreeNode | null = root

  stack.push(curr)
  
  while(stack.length > 0) {
    curr = stack.pop()!
    result.push(curr.val)
    curr?.left && stack.push(curr.left)
    curr?.right && stack.push(curr.right)
  }
  
  return result.reverse()
}








