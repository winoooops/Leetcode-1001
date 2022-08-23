import { TreeNode } from "../treenode.type"

export function insertBST(root: TreeNode | null, val: number): TreeNode {
  if(!root) return new TreeNode(val)

  if(root.val > val) { 
    root.left = insertBST(root.left, val)
  }

  else if(root.val < val) {
    root.right = insertBST(root.right, val)
  }

  return root
}
