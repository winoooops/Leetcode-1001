import { TreeNode } from "../treenode.type"

export function invertTree(root: TreeNode) {
  const queue: TreeNode[] = []
  let curr: TreeNode = root 
  let tmp: TreeNode
  let lvlen: number 
  
  queue.push(curr)

  while(queue.length > 0) {
    lvlen = queue.length 

    for(let i = 0; i < lvlen; i++) {
      curr = queue.shift()!

      tmp = curr?.left
      curr.left = curr?.right
      curr.right = tmp

      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }

  }
  
  return root
}

