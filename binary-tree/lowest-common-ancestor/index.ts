import { TreeNode } from "../treenode.type"

export function findLCA(node: TreeNode | null, p: number, q: number): TreeNode | null {
  if (!node) return null
  if (node.val === p || node.val === q) return node

  let left = findLCA(node.left, p, q)
  let right = findLCA(node.right, p, q)

  if (left && right) return node
  if (left) return left
  if (right) return right

  return null
}


export function findBSTLCA(node: TreeNode | null, p: number, q: number): TreeNode | null {
  if(!node) return null 

  let left: number = Math.min(p, q)
  let right: number = Math.max(p, q)

  if(node.val >= left && node.val <= right) return node

  if(node.val < left) return findBSTLCA(node.right, p, q)

  if(node.val > right) return findBSTLCA(node.left, p, q)
}


