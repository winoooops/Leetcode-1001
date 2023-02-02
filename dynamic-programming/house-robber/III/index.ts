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
  // i can either take or not take the child treenodes 
  let NOTAKE = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

  return [NOTAKE, TAKE];
}


export function rob2(treeNode: TreeNode | null): number {
  const memory: Map<TreeNode, number> = new Map();
  return recursive(treeNode, memory);
}

export function recursive(treeNode: TreeNode | null, memory: Map<TreeNode, number>): number {
  if (!treeNode) return 0;

  if (memory.has(treeNode)) return memory.get(treeNode) as number;

  // not taking the current node
  let res1 = recursive(treeNode.left, memory) + recursive(treeNode.right, memory);
  // taking the current node 
  let res2 = treeNode.val;

  if (treeNode.left) {
    res2 += recursive(treeNode.left.left, memory) + recursive(treeNode.left.right, memory);
  }

  if (treeNode.right) {
    res2 += recursive(treeNode.right.left, memory) + recursive(treeNode.right.right, memory);
  }

  let res: number = Math.max(res1, res2);

  memory.set(treeNode, res);

  return res;
}