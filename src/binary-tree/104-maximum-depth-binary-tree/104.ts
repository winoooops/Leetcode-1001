import {TreeNode} from "../TreeNode";

export function maxDepthDFS(node: TreeNode | null): number {
  if(!node) return 0;
  return Math.max(maxDepthDFS(node.left), maxDepthDFS(node.right)) + 1;
}

export function maxDepthBFS(node: TreeNode | null): number {
  let depth = 0;
  const queue: TreeNode[] = [];
  let curr = node;
  curr && queue.push(curr)
  while(queue.length > 0) {
    // use size to iterate the children
    const size = queue.length;

    for(let i = 0; i < size; i++) {
      curr = queue.shift()!;
      curr?.left && queue.push(curr.left);
      curr?.right && queue.push(curr.right);
    }
    depth++;
  }
  return depth;
}
