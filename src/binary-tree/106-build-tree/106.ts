import {TreeNode} from "../TreeNode";

export function buildTreeRecursive(inorder: number[], postorder: number[]): TreeNode | null {
  // if none of the arrays have any elements, return null
  if(postorder.length === 0) return null;
  if(postorder.length === 1) return new TreeNode(postorder[0]);

  const rootNum = postorder.pop()!;
  // create the root node with the last element of the postorder array
  const root = new TreeNode(rootNum);

  // find the root in the inorder array, then split the inorder array into left and right subtrees
  const rootAt = inorder.indexOf(rootNum);
  const leftIn = inorder.slice(0, rootAt);
  const rightIn = inorder.slice(rootAt+1);


  // since the length is of the same, postOrder subtrees could be also calculated
  const leftPost = postorder.slice(0, leftIn.length);
  const rightPost = postorder.slice(leftIn.length);


  root.left = buildTreeRecursive(leftIn, leftPost);
  root.right = buildTreeRecursive(rightIn, rightPost);

  return root;
}
