import { TreeNode } from "../treenode.type"


export function countNodes(root: TreeNode){
  if(!root) return 0

  let leftNode: TreeNode | null = root.left 
  let leftDep: number = 0

  let rightNode: TreeNode | null = root.right 
  let rightDep: number = 0 

  // 计算左子树的高度
  while(leftNode) {
    leftNode = leftNode.left
    leftDep++
  } 

  // 计算右子树的高度
  while(rightNode) {
    rightNode = rightNode.right
    rightDep++
  }

  // 如果是完全二叉树
  if(leftDep === rightDep) return Math.pow(2, leftDep + 1) - 1 

  // 如果有一棵是完全二叉树, 另一棵不是完全二叉树, 需要递归
  // 不是完全二叉树的那棵树还可以再次被分成完全二叉树和非完全二叉树
  return countNodes(root.left) + countNodes(root.right) + 1
}
