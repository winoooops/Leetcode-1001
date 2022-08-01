import { TreeNode } from "../treenode.type"

export function inorder(node: TreeNode, list: number[]): number[] {
  traverse(node, list)
  return list
}

function traverse(node: TreeNode, list: number[]) {
  if(!node?.val) return 

  traverse(node.left, list)
  list.push(node.val)
  traverse(node.right, list)
}
