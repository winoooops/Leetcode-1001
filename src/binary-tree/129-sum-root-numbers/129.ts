import {TreeNode} from "../TreeNode";

export function sumNumbersDFS(root: TreeNode | null): number {
  if(!root) return 0;
  let total = 0;
  const queue = [{ node: root, sum: 0 }];

  while(queue.length) {
    const { node, sum } = queue.pop()!;
    const currSum = sum * 10 + node.val;

    if(!node.left && !node.right) total += currSum;

    if(node.right) {
      queue.push({ node: node.right, sum: currSum });
    }

    if(node.left) {
      queue.push({ node: node.left, sum: currSum });
    }
  }

  return total;
}

export function sumNumbersRecursion(root: TreeNode | null): number {
  return helper(root, 0);
}

function helper(node: TreeNode | null, sum: number): number {
  if(!node) return 0;

  const currSum = sum * 10 + node.val;

  if(!node.left && !node.right) return currSum;

  return helper(node.left, currSum) + helper(node.right, currSum);
}
