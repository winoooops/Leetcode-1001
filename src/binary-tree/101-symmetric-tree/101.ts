import {TreeNode} from "../TreeNode";

export function isSymmetricBFS(root: TreeNode | null): boolean {
  if(!root) return true;

  const queue: Array<TreeNode | null> = [root.left, root.right];
  while(queue.length > 0) {
    const left = queue.shift()!;
    const right = queue.shift()!;

    if(!left && !right) continue;
    if(!left || !right) return false;
    if(left.val !== right.val) return false;

    queue.push(left.left, right.right, left.right, right.left);
  }

  return true;
}

export function isSymmetricRecursion(root: TreeNode | null): boolean {
  if(!root) return true;
  return isMirror(root.left, root.right);
}

function isMirror(p: TreeNode | null, q: TreeNode | null): boolean {
  if(!p && !q) return true;
  if(!p || !q) return false;
  if(p.val !== q.val) return false;

  return isMirror(p.left, q.right) && isMirror(p.right, q.left);
}
