# 100. Same Tree

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Constraints:
* The number of nodes in both trees is in the range [0, 100].
* -104 <= Node.val <= 104

## Example

```
Input: p = [1,2,3], q = [1,2,3]
Output: true
```

```
Input: p = [1,2], q = [1,null,2]
Output: false
```

```
Input: p = [1,2,1], q = [1,1,2]
Output: false
```

## Solution

### DFS Recursion
To check if two trees are the same, we need to check:
* if the root node is the same
* if the left subtree is the same
* if the right subtree is the same

So in this case, we can use recursion to solve this problem.
```ts
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
```
