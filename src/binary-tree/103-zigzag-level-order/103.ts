import {TreeNode} from "../TreeNode";

export function zigzagLevelOrderBFS(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if(!root) return result;
  let isLeftToRight = true;
  const queue: TreeNode[] = [root];

  while(queue.length) {
    const length = queue.length;
    const level: number[] = [];
    for(let i = 0; i < length; i++) {
      const node= queue.shift()!;
      if(isLeftToRight) {
        level.push(node.val);
      } else {
        level.unshift(node.val);
      }

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }

    result.push(level);
    isLeftToRight = !isLeftToRight;
  }

  return result;
}


export function zigZagLevelOrderDFS(root: TreeNode | null): number[][] {
  const result: number[][] = [];


  function dfs(node: TreeNode | null, depth: number) {
    if(!node) return;
    if(!result[depth]) result[depth] = [];

    if(depth % 2 === 0) {
      result[depth].push(node.val);
    } else {
      result[depth].unshift(node.val);
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);

  return result;
}
