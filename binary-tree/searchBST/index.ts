import { TreeNode } from "../treenode.type"

export function searchBST(root: TreeNode | null, target: number): TreeNode | null {
  let curr: TreeNode | null = root 
  if(!curr) return null 

  const queue: TreeNode[] = [] 
  queue.push(curr)

  while(queue.length) {
    curr = queue.shift()! 

    if(curr.val === target) return curr

    if(curr.val > target) {
      curr.left && queue.push(curr.left)
    } else {
      curr.right && queue.push(curr.right)
    }
  }

  return null
  
}
