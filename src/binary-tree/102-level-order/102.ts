import {TreeNode} from "../TreeNode";

export function levelOrderBFS(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if(!root) {
    return result;
  }
  const queue: TreeNode[] = [root];
  while(queue.length) {
    const length = queue.length;
    const level: number[] = [];
    for(let i = 0; i < length; i++) {
      const node = queue.shift()!;
      level.push(node.val);
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
    }
    result.push(level);
  }

  return result;
}

export function levelOrderDFS(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if(!root) return result;
  function dfs(node: TreeNode | null, depth: number) {
    if(!node) return;
    if(!result[depth]) {
      result[depth] = [];
    }
    result[depth].push(node.val);
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);

  return result;
}
