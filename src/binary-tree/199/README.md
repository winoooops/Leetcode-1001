# 199. Binary Tree Right Side View

Given the root of a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.

Constraints:
* The number of nodes in the tree is in the range [0, 100].
* -100 <= Node.val <= 100

## Example

```
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
```

```
Input: root = [1,null,3]
Output: [1,3]
```

```
Input: root = []
Output: []
```

## Solutions

### BFS

using BFS, we can get the last elements from each level, which are the elements that we can see from the right side.

> Time Complexity: O(n), where n is the number of nodes in the tree.
> Space Complexity: O(n), since we're maintaining a queue here.

```typescript 
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
```

### DFS w/ Recursion

* To use DFS, the order of traversal should be right -> left -> root. 
* And we need to have a mechanism to keep track of the rightest node(not just right subtree as right subtree might not exist).
  * we can maintain the Depth of the node, so if a node is the first one that exists in a depth, we can add it to the result.

#### Recursion Logics

1. Recursion Arguments: `dfs(node: TreeNode | null, depth: number)`
2. Recursion Ends: if node is null, return.
3. Logics in each recursion:
   * if the depth is the first one, add the node to the result.
   * call the recursion for right and left subtree
   * `depth++`

```typescript
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
```


