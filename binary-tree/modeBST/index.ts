import { TreeNode } from "../treenode.type"

export function findMode(root: TreeNode | null): number[] {
  let result: number[] = []
  let occur: number = 0 
  let max: number = 0 
  let prev: TreeNode | null = null 

  function recur(node: TreeNode | null) {
    if(!node) return result 

    // left 
    if(node.left) recur(node.left)

    // if exist and not equal, reset occurance
    if (prev && prev.val !== node.val) {
      occur = 1
    } else{
    // otherwise, increment occur
      occur++
    }
    prev = node

    if(occur === max) {
      result.push(node.val)
    } else if (occur > max) {
      max = occur
      result = [node.val]
    }

    if(node.right) recur(node.right)
  }

  recur(root)

  return result
}
