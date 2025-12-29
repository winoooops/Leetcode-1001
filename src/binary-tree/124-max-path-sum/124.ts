import {TreeNode} from "../TreeNode";

export function maxPathSum(root: TreeNode | null): number {
  // max is a global variable to store the maximum path sum
  // otherwise, it's just update the copy of max in the helper function
  let max = Number.MIN_SAFE_INTEGER;
  function helper(node: TreeNode | null): number {
    if (!node) return 0;
    const left = Math.max(helper(node.left), 0);
    const right = Math.max(helper(node.right), 0);
    max = Math.max(max, left + right + node.val);
    return Math.max(left, right) + node.val;
  }

  helper(root);
  return max;
}

export function maxPathSumDP(root: TreeNode | null): number {
  if(!root) return 0;
  // a map is used to save the max path sum of : [parentNode, leftNode, rightNode]
  const map: Map<TreeNode, number[]> = new Map();
  let max = Number.MIN_SAFE_INTEGER;

  dfsDown(root, null);
  dfsUp(root, null);

  for(let [curr, info] of map) {
    let temp = curr.val;
    info.sort((a,b) => a - b);
    // so that we can pick the top 2 nodes for the path
    if(info[2] >= 0) temp += info[2];
    if(info[1] >= 0) temp += info[1];

    max = Math.max(max, temp);
  }

  return max;


  function dfsDown(node: TreeNode | null, parent: TreeNode | null): number {
    if(!node) return 0;
    const left: number = dfsDown(node.left, node);
    const right: number = dfsDown(node.right, node);
    const info = map.get(node) || new Array(3).fill(0);
    info[1] = left;
    info[2] = right;
    map.set(node, info);

    return Math.max(node.val, node.val + Math.max(left, right));
  }

  function dfsUp(node: TreeNode | null, parent: TreeNode | null) {
    // if the node is null
    if(!node) return;

    const info = map.get(node) || new Array(3).fill(0);
    if(node.left) {
      const leftInfo = map.get(node.left) || new Array(3).fill(0);
      leftInfo[0] = Math.max(node.val, node.val + Math.max(leftInfo[1], leftInfo[2]));
      map.set(node.left, leftInfo);
    }

    if(node.right) {
      const rightInfo = map.get(node.right) || new Array(3).fill(0);
      rightInfo[0] = Math.max(node.val, node.val + Math.max(rightInfo[1], rightInfo[2]));
      map.set(node.right, rightInfo);
    }

    dfsUp(node.left, node);
    dfsUp(node.right, node);
  }
}
