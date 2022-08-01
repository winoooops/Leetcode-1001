import { TreeNode } from "../treenode.type"

export function postorder(node: TreeNode, list: number[]): number[] {
  traverse(node, list)
  return list
}

function traverse(node: TreeNode, list: number[]) {
  if(!node?.val) return 

  traverse(node.left, list)
  traverse(node.right, list)
  list.push(node.val)
}
