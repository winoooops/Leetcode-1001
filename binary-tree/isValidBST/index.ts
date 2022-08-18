import { TreeNode } from "../treenode.type"

export function isValidBST(root: TreeNode | null) {
  // return isNodeInRange(root, -Infinity, Infinity)
  let max: number = -Infinity; 
  function inOrder(node: TreeNode | null): boolean {
    if(!node) return true 

    let isLeft: boolean = inOrder(node.left) 

    if(max >= node.val) return false 
    
    max = node.val

    let isRight: boolean = inOrder(node.right)

    return isLeft && isRight;
  }

  return inOrder(root)
}

function isNodeInRange(node: TreeNode | null, left: number, right: number): boolean {

  if(!node) return true

  if(node.val <= left || node.val >= right) return false 

  return isNodeInRange(node.left, left, node.val) && isNodeInRange(node.right, node.val, right)
}
