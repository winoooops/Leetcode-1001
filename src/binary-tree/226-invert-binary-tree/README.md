# 226. Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root.

Constraints:
* The number of nodes in the tree is in the range [0, 100].
* -100 <= Node.val <= 100

## Example

```
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
```

```
Input: root = [2,1,3]
Output: [2,3,1]
```

```
Input: root = []
Output: []
```

## Solution

### Recursion
To invert a binary tree, all we need to do is to swap the left subtree and the right subtree. So we can use a recursive approach to solve this problem.

```ts
export function invertTreeRecursion(root: TreeNode | null): TreeNode | null {
  if(!root) return root;

  const left = invertTreeRecursion(root.left);
  const right = invertTreeRecursion(root.right);

  root.left = right;
  root.right = left;

  return root;
}
```

### DFS(node->left-right)
We can also use a DFS approach to solve this problem. We can use a stack to store the node that should be iterated.

```ts
export function invertTreeDFS(root: TreeNode | null): TreeNode | null {
  if(!root) return root;
  const queue = [root];
  while(queue.length > 0) {
    const node = queue.shift()!;

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }

  return root;
}
```



