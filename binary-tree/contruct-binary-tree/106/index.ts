import { TreeNode } from "../../treenode.type"

export function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if(!inorder.length) return null
  return helper(inorder, postorder, 0, inorder.length - 1, postorder.length -1)    
};

function helper(inorder: number[], postorder: number[], inStart: number, inEnd: number, postEnd: number): TreeNode | null {
  if(inStart > inEnd || postEnd < 0) return null

  let root = new TreeNode(postorder[postEnd])
  let inIndex: number = 0 

  for(let i = inStart; i <= inEnd ; i++) {
    if(inorder[i] === root.val) {
        inIndex = i
    }
  }

  root.left = helper(inorder, postorder, inStart, inIndex-1, postEnd-(inEnd - inIndex)-1)
  root.right = helper(inorder, postorder, inIndex + 1, inEnd, postEnd-1)

  return root
}
