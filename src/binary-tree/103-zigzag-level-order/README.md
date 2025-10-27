# 103. Binary Tree Zigzag Level Order Traversal

Given the root of a binary tree, return the *zigzag* level order traversal of its nodes' values. 
(i.e., from left to right, then right to left for the next level and alternate between).

Constraints:

* The number of nodes in the tree is in the range [0, 2000].
* -100 <= Node.val <= 100


# Example

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
```

```
Input: root = [1]
Output: [[1]]
```

```
Input: root = []
Output: []
```


## Solutions

### BFS

It's basically the same as [102. Binary Tree Level Order Traversal](../102-level-order/README.md), but with a direction reverse for each level. We can use a flag to indicate the direction.

```typescript
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
```

### DFS
