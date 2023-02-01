import { TreeNode } from "../../../binary-tree/treenode.type"

export function rob(treeNode: TreeNode): number {
  let dp: number[] = helper(treeNode);

  return Math.max(dp[0], dp[1])
}

export function helper(treeNode: TreeNode | null): number[] {
  if (!treeNode) return [0, 0];

  let left = helper(treeNode.left);
  let right = helper(treeNode.right);

  // take the current node, so not taking its child 
  let TAKE = treeNode.val + left[0] + right[0];

  // not taking the current node 
  let NOTAKE = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

  return [NOTAKE, TAKE];
}
