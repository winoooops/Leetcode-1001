import { TreeNode } from "../treenode.type"

export function deleteNode(node: TreeNode | null, key: number): TreeNode | null {
  // if not found, return null, stop the recursion with null
  if (!node) return null

  // if target node is found, stop recursion with node  
  if (node.val === key) {
    // if target node has no children, return null 
    if (!node.left && !node.right) return null
    // if target has no left child, use right child to replace the node
    if (!node.left) return node.right
    // if target has no right child, use left child to replace the node 
    if (!node.right) return node.left

    // if target has both left and right child 
    let leftBottomNode: TreeNode = node.right
    while (leftBottomNode.left) {
      leftBottomNode = leftBottomNode.left
    }
    leftBottomNode.left = node.left
    return node.right
  }

  // start recursion
  if (node.val > key) {
    node.left = deleteNode(node.left, key)
  } else {
    node.right = deleteNode(node.right, key)
  }

  // bubble up 
  return node
}
