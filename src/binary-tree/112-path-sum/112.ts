import {TreeNode} from "../TreeNode";

export function pathSumRecursion(root: TreeNode | null, targetSum: number): boolean {
  if(!root) return false;
  return helper(root, targetSum - root.val);
}

function helper(node: TreeNode, remainingSum: number): boolean {
  if(!node.left && !node.right) return remainingSum === 0;
  // if left subtree exists, recursively check if the target sum can be found
  if(node.left && helper(node.left, remainingSum - node.left.val)) return true;
  // if right subtree exists, recursively check if the target sum can be found
  if(node.right && helper(node.right, remainingSum - node.right.val)) return true;

  return false;
}


export function pathSumBackTracking(root: TreeNode | null, targetSum: number): boolean {
  if(!root) return false;
  return backTracking(root, targetSum, 0);
}

export function backTracking(node: TreeNode, targetSum: number, currentSum: number): boolean {
  if(!node.left && !node.right) {
    return currentSum + node.val === targetSum;
  }

  // if left subtree exists and match is found return true
  // currentSum + node.val is the currentsSum, if not met, a backtracking is performed
  if(node.left && backTracking(node.left, targetSum, currentSum + node.val)) return true;

  if(node.right && backTracking(node.right, targetSum, currentSum + node.val)) return true;

  return false;
}

export function pathSumBFS(root: TreeNode | null, targetSum: number): boolean {
  if(!root) return false;

  const queue = [{ node: root, sum: 0 }];
  while(queue.length > 0) {
    const levelSize = queue.length;
    for(let i= 0; i < levelSize; i++) {
      const { node, sum } = queue.shift()!;
      if(!node.left && !node.right && sum + node.val === targetSum) return true;
      if(node.left) {
        queue.push({ node: node.left, sum: sum + node.val })
      }
      if(node.right) {
        queue.push({ node: node.right, sum: sum + node.val});
      }
    }
  }
  return false;
}

export function pathSumDFS(root: TreeNode | null, targetSum: number) {
  if(!root) return false;
  const queue = [{ node: root, sum: 0 }];
  while(queue.length) {
    const { node, sum } = queue.pop()!;
    const currSum = sum + node.val;
    if(!node.left && !node.right && currSum === targetSum) return true;

    if(node.right) {
      queue.push({ node: node.right, sum: currSum });
    }

    if(node.left) {
      queue.push({ node: node.left, sum: currSum });
    }
  }

  return false;
}
