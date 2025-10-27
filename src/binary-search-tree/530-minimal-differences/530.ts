import {TreeNode} from "../../binary-tree/TreeNode";

export function getMinimumDifference(root: TreeNode | null): number {
  if(!root) return 0;

  let curr: TreeNode | null = root;
  let prev: TreeNode | null = null;
  let minDiff = Infinity;
  const stack: TreeNode[] = [];

  while(stack.length > 0 || curr) {
    if(curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop()!;
      if(prev) minDiff = Math.min(curr.val - prev.val, minDiff);
      prev = curr;
      curr = curr.right;
    }
  }

  return minDiff;
}
