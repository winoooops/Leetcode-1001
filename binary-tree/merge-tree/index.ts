import { TreeNode } from "../treenode.type"

export function mergeTree(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if(!root1 && !root2) return null 
  if(!root1) return root2
  if(!root2) return root1 

  const root = new TreeNode(root2.val + root1.val) 

  root.left = mergeTree(root1.left, root2.left)
  root.right = mergeTree(root1.right, root2.right)

  return root 
}
