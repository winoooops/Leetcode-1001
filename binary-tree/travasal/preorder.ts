import { TreeNode } from "../treenode.type"

export function preorder(node: TreeNode, nodeList: number[] ) {
  traverse(node, nodeList)
  return nodeList
}

function traverse(node:TreeNode, nodeList: number[]) {
  if(!node?.val) return 

  nodeList.push(node.val)
  traverse(node.left, nodeList)
  traverse(node.right, nodeList)
}

