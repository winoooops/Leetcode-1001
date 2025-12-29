import {TreeNode} from "../TreeNode";

export function averageOfLevelsBFS(root: TreeNode | null): number[] {
  const result: number[] = [];
  if(!root) return result;
  const queue = [root];
  while(queue.length > 0) {
    const length = queue.length;
    let sum = 0;
    for(let i = 0; i < length; i++) {
      const node = queue.shift()!;
      sum += node.val;
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    result.push(sum / length);
  }

  return result;
}

export function averageOfLevelsDFS(root: TreeNode | null): number[] {
  function dfs(node: TreeNode | null, depth: number) {
    if(!node) return;

    count[depth] = (count[depth] || 0) + 1;
    sum[depth] = (sum[depth] || 0) + node.val;

    if(node.left) dfs(node.left, depth + 1);
    if(node.right) dfs(node.right, depth + 1);
  }


  const result: number[] = [];
  const sum: number[] = [];
  const count: number[] = [];
  if(!root) return result;

  dfs(root, 0);
  for(let i = 0; i < sum.length; i++) {
    result.push(sum[i] / count[i]);
  }

  return result;
}


