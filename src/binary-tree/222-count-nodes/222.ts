import {TreeNode} from "../TreeNode";

export function countNodesRecursion(root: TreeNode | null): number {
  if(!root) return 0;

  let leftNode = root.left;
  let rightNode = root.right;
  let leftDepth = 0, rightDepth = 0;

  while(leftNode) {
    leftNode = leftNode.left;
    leftDepth++;
  }

  while(rightNode) {
    rightNode = rightNode.right;
    rightDepth++;
  }

  return leftDepth === rightDepth ?
    Math.pow(2, leftDepth + 1) - 1 :
    1 + countNodesRecursion(root.left) + countNodesRecursion(root.right);
}

export function countNodesDFS(root: TreeNode | null): number {
  if(!root) return 0;
  const stack: TreeNode[] = [root];
  let current = root;
  let count = 0;

  while(stack.length > 0) {
    current = stack.pop()!;
    count++;

    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  }

  return count;
}

export function countNodesBFS(root: TreeNode | null): number {
  if(!root) return 0;
  const queue: TreeNode[] = [root];
  let count = 0;

  while(queue.length > 0) {
    let length = queue.length;
    count += length;

    for(let i = 0; i < length; i++) {
      const current = queue.shift()!;
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
  }

  return count;
}
