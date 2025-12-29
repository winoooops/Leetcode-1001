import {TreeNode} from "../TreeNode";

export function LCARecursion(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if(!root || root.val === p?.val || root.val === q?.val) return root;

  const left = LCARecursion(root.left, p, q);
  const right = LCARecursion(root.right, p, q);

  if(left && right) return root;
  if(left && !right) return left;
  if(!left && right) return right;

  return null;
}

export function LCADFS(root: TreeNode | null, p: number, q: number): TreeNode | null {
  const pathP: TreeNode[] = [];
  const pathQ: TreeNode[] = [];
  helper(root, p, pathP);
  helper(root, q, pathQ);

  let i = 0;
  while(i < pathP.length && i < pathQ.length && pathP[i].val === pathQ[i].val) {
    i++;
  }

  return pathP[i - 1];
}

function helper(node: TreeNode | null, target: number, path: TreeNode[]) {
  if(!node) return false;
  path.push(node);

  if(node.val === target || helper(node.left, target, path) || helper(node.right, target, path)) {
    return true;
  } else {
    path.pop();
    return false;
  }
}
