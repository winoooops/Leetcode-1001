import { TreeNode } from "../../treenode.type"

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  function helper(preStart: number, inStart: number, inEnd: number, preorder: number[], inorder: number[]) {
    if(preStart > preorder.length - 1 || inStart > inEnd) return null
 
    // by deifinition, the root node should be on the preorder's start position
    let root: TreeNode = new TreeNode(preorder[preStart])

    // find root node in the inorder array 
    let inIndex: number = 0 
    for(let i = inStart; i <= inEnd; i++) {
      if(root.val === inorder[i]) {
        inIndex = i
      }
    }

    // 左子树在preorder中的位置 preStart + 1
    // 左子树在inorder中的位置 [inStart, inIndex - 1] 
    root.left = helper(preStart + 1, inStart, inIndex -1, preorder, inorder)
    
    // 右子树在preorder中的位置 preStart + inIndex - inStart + 1 (左子树的全部节点之后)
    // 右子树在inorder中的位置[inIndex + 1, inEnd]
    root.right = helper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd, preorder, inorder)

    return root
  }

  return helper(0,0,preorder.length - 1, preorder, inorder)
}


