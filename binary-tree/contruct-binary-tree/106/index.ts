import { TreeNode } from "../../treenode.type"

export function buildTree(inorder: number[], postorder: number[]): TreeNode | null {

  function helper(inStart: number, inEnd: number, postEnd: number) {
    if(inStart > inEnd || postEnd < 0) return null 

    const root = new TreeNode(postorder[postEnd])

    let idx: number = inStart; 

    for(let i = inStart ; i <= inEnd; i ++) {
      if(inorder[i] === root.val) {
        idx = i
      }
    }

    root.left = helper(inStart, idx - 1, postEnd - (inEnd - idx) - 1)
    root.right = helper(idx + 1, inEnd, postEnd - 1)

    return root 
  }

  return helper(0, inorder.length - 1, postorder.length -1)    
};


