import { TreeNode } from "../treenode.type"

export function isSymmetric(root: TreeNode) {
  if(!root) return true

  return iterator(root.left, root.right)
}

function iterator(left: TreeNode | null, right: TreeNode | null): boolean {
  if(!left && !right) return true
  else if(!left || !right) return false  
  else if(left.val !== right.val) return false

  let outer = iterator(left.left, right.right)
  let inner = iterator(left.right, right.left)

  return outer && inner
}
