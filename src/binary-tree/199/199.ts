import {TreeNode} from "../TreeNode";

export function rightSideViewBFS(root: TreeNode | null): number[] {
  const result: number[] = [];
  if(!root) return result;
  const stack: TreeNode[] = [root];
  while(stack.length) {
    const length = stack.length;
    let node: TreeNode | null = null;
    for(let i = 0; i < length; i++) {
      node = stack.shift()!;
      if(node.left) stack.push(node.left);
      if(node.right) stack.push(node.right);
    }
    if(node) {
      result.push(node.val);
    }
  }

  return result;
}

export function rightSideViewDFS(root: TreeNode | null): number[] {
  function dfs(node: TreeNode | null, depth: number) {
    if(!node) return;

    if(result.length === depth) {
      result.push(node.val);
    }

    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  }


  const result: number[] = []
  if(!root) return result;

  dfs(root, 0);

  return result;
}

