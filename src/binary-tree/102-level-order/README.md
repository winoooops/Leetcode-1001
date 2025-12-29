# 102. Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Constraints:

* The number of nodes in the tree is in the range [0, 2000].
* -1000 <= Node.val <= 1000

## Example

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
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

Because the problem requires to traverse the tree level by level, we can use BFS to solve the problem. 

We can use a queue to store the nodes of the tree. 
* We can start from the root node and add it to the queue. 
* Then we can iterate through the queue and add the children of the nodes to the queue. We can also keep track of the level of the nodes and add the nodes to the result list based on the level.

```typescript
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
```


### DFS

we can use a variable called `depth` to help us keep track of the level of the nodes. use a helper function to traverse the tree and add the nodes to the result list based on the level.

```typescript
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
```
