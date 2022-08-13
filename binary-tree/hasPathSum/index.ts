import { TreeNode } from "../treenode.type"

export function hasPathSum(root: TreeNode | null, targetSum: number) {
  function hasMet(node: TreeNode, sum: number): boolean {
    if(!node.left && !node.right && sum === 0) {
      return true
    }

    if(node.left) {
      if(hasMet(node.left, sum - node.left.val)) return true
    }

    if(node.right) {
      if(hasMet(node.right, sum - node.right.val)) return true
    }

    return false
  }


  if(!root) return false 
  return hasMet(root, targetSum - root.val)
}


