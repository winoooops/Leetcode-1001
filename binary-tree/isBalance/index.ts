import { TreeNode } from "../treenode.type"

export function isBalanced(root: TreeNode | null) {
  if(!root) return true

  let height = getHeight(root)

  return height > 0
}


function getHeight(node: TreeNode | null) {
  if(!node) return 0 

  let leftHeight = getHeight(node?.left)
  let rightHeight = getHeight(node?.right)

  if(leftHeight < 0 || rightHeight < 0 || Math.abs(leftHeight-rightHeight) > 1) {
    // 如果不平衡, 递归返回高度-1
    return -1
  }
  // 如果平衡, 返回当前节点高度
  return Math.max(leftHeight, rightHeight) + 1
} 

