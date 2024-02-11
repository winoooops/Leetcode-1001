import {TreeNode} from "../TreeNode";

export function flattenRecursion(root: TreeNode | null): void {
  // modify the node
  if(!root) return;

  // flatten the left and right node
  flattenRecursion(root.left);
  flattenRecursion(root.right);

  let node = root.left;

  while(node) {
    if(node.right) {
      node = node.right;
    } else {
      node.right = root.right;
      root.right = root.left;
      root.left = null;
      break;
    }
  }
}

export function flattenIteration(root: TreeNode | null) {
  if(!root) return;
  const stack = [];
  stack.push(root);
  let prev: TreeNode | null = null;

  while(stack.length > 0) {
    const node: TreeNode = stack.pop()!;
    if(prev) {
      prev.left = null;
      prev.right = node;
    }

    // using array.pop() so push the right node first
    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);

    prev = node;
  }
}

export function flattenIteration2(root: TreeNode | null) {
  // use morris traversal
  if(!root) return;
  let current: TreeNode | null = root;

  while(current) {
    if(current.left) {
      let pre = current.left;
      // find the rightmost node of the left subtree
      while(pre.right) {
        pre = pre.right;
      }
      pre.right = current.right;
      current.right = current.left;
      current.left = null;
    }
    current = current.right;
  }
}
