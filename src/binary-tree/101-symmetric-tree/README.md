# 101. Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).



## Example

```
Input: root = [1,2,2,3,4,4,3]
Output: true
```

```
Input: root = [1,2,2,null,3,null,3]
Output: false
```

## Solution

### BFS (Queue)

We could use BFS to traverse the tree level by level, and check whether each level is symmetric.
The way to check whether a level is symmetric is to check whether the values in the level is symmetric.

> Time complexity: O(n), where n is the number of nodes in the tree; Space Complexity is O(n), where n is the number of nodes in the tree.

```ts
export function isSymmetricBFS(root: TreeNode | null): boolean {
  if(!root) return true;

  const queue: Array<TreeNode | null> = [root.left, root.right];
  while(queue.length > 0) {
    const left = queue.shift()!;
    const right = queue.shift()!;

    if(!left && !right) continue;
    if(!left || !right) return false;
    if(left.val !== right.val) return false;

    queue.push(left.left, right.right, left.right, right.left);
  }

  return true;
}
```

### Recursion

if for a given node, its left subtree is a mirror reflection of its right subtree, then the tree is symmetric.
to check this, we need to make sure: 
* if both left and right are null, return true
* if either left or right is null, return false
* if left.val !== right.val, return false

> Time Complexity is O(n), where n is the number of nodes in the tree; Space Complexity is O(n), where n is the number of nodes in the tree.

```ts
export function isSymmetricRecursion(root: TreeNode | null): boolean {
  if(!root) return true;
  return isMirror(root.left, root.right);
}

function isMirror(p: TreeNode | null, q: TreeNode | null): boolean {
  if(!p && !q) return true;
  if(!p || !q) return false;
  if(p.val !== q.val) return false;
  return isMirror(p.left, q.right) && isMirror(p.right, q.left);
}
```
