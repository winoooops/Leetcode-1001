# 637. Average of Levels in Binary Tree

Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

Constraints:

* The number of nodes in the tree is in the range [1, 104].
* -231 <= Node.val <= 231 - 1

## Example

```
Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].
```

```
Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]
```

## Solutions

### BFS

> Time Complexity: O(n), Space Complexity: O(n)

using BFS, it's quite straightforward to solve this problem.
all we have to do is to first reset the sum of the current level, and then calculate the average of the current level.

```typescript
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
```


### DFS
> Time Complexity: O(n), Space Complexity: O(n)

We can maintain 2 arrays to help us solve this problem using DFS.
* one array `sum` to store the sum of the nodes on each level
* one array `count` to store the count of the nodes on each level
* then we can calculate the average of the nodes by `sum[i] / count[i]`

```typescript
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
```
