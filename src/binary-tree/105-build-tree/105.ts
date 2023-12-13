import {TreeNode} from "../TreeNode";

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if(preorder.length === 0) return null;
  const root = new TreeNode(preorder[0]);

  // find the root in the inorder array
  const rootAt = inorder.indexOf(preorder[0]);
  const leftIn = inorder.slice(0, rootAt);
  const rightIn = inorder.slice(rootAt+1);

  // because preorder and inorder are of the same length
  const leftPre = preorder.slice(1, rootAt+1);
  const rightPre = preorder.slice(rootAt+1);


  // recursively build leftSub and rightSub
  root.left = buildTree(leftPre, leftIn);
  root.right = buildTree(rightPre, rightIn);

  return root;
}

export function buildTreeIterative(preorder: number[], inorder: number[]): TreeNode | null {
  if(preorder.length === 0) return null;
  const stack = [];
  const root = new TreeNode(preorder[0]);
  let curr = root;

  for(let i = 1, j = 0; i < preorder.length; i++) {
    // scenario 1: the next node is the left child of the current node
    console.log(curr.val, inorder[j]);
    if(curr.val !== inorder[j]) {
      console.log(`${preorder[i]} is the left child of ${curr.val}`);
      curr.left = new TreeNode(preorder[i]);
      stack.push(curr);
      curr = curr.left;
    } else {
      // scenario 2: the next node is the right child of the current node or the parent of the current node
      j++;
      while(stack.length > 0 && stack[stack.length-1].val === inorder[j]) {
        curr = stack.pop()!;
        j++;
      }
      curr.right = new TreeNode(preorder[i]);
      curr = curr.right;
    }
  }

  return root;
}
