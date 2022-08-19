import { TreeNode } from "../treenode.type"

export function findLCA(node: TreeNode | null, p: number, q: number): TreeNode | null {
  if(!node) return null 
  if(node.val === p || node.val === q) return node

  let left = findLCA(node.left, p, q)
  let right = findLCA(node.right, p, q)

  if(left && right) return node
  if(left) return left
  if(right) return right
}


