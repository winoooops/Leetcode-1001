import {TreeNode} from "../TreeNode";

export function invertTreeRecursion(root: TreeNode | null): TreeNode | null {
  if(!root) return root;

  const left = invertTreeRecursion(root.left);
  const right = invertTreeRecursion(root.right);

  root.left = right;
  root.right = left;

  return root;
}

export function invertTreeDFS(root: TreeNode | null): TreeNode | null {
  if(!root) return root;
  const queue = [root];
  while(queue.length > 0) {
    const node = queue.shift()!;

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }

  return root;
}
