import {TreeNode} from "../treenode.type"

export function findBottomLeftValue(root: TreeNode | null): number {
  if(!root) return 0

  let result: number = 0
  let max: number = 0 

  return findLeave(root, 1)

  function findLeave(node: TreeNode | null, depth: number): number {
    if(!node) return depth

    if(!node.left && !node.right) {
      if(depth > max) {
        result = node.val
        max = depth
      }
      return result 
    }


    if(node.left) {
      depth++
      result = findLeave(node.left, depth)
      depth--
    }

    if(node.right) {
      depth++
      result = findLeave(node.right, depth)
      depth--
    }

    return result 
  }
}

