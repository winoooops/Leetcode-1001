import { TreeNode } from "../treenode.type"

export function minimalDifference(root: TreeNode | null): number {
  const stack: TreeNode[] = []
  let curr: TreeNode = root 
  let prev: TreeNode = null 
  let diff: number = Infinity

  stack.push(curr)

  while(stack.length > 0) {
    curr = stack.pop()! 
    if(curr === null) {
      curr = stack.pop()!

      if(prev) {
        diff = Math.min(diff, curr.val - prev.val)
      }
      prev = curr

      continue;
    }  

    curr.right && stack.push(curr.right)
    stack.push(curr)
    stack.push(null)
    curr.left && stack.push(curr.left)
  }

  return diff
}
