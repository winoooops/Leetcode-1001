# 236. Lowest Common Ancestor of a Binary Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Constraints:

* The number of nodes in the tree is in the range [2, 105].
* `-109 <= Node.val <= 109`
* All Node.val are unique.
* `p != q`
* p and q will exist in the tree.

## Example

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
```

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
```

```
Input: root = [1,2], p = 1, q = 2
Output: 1
```

## Solution

### Recursion

> Time Complexity is O(n), where n is the number of nodes in the tree. Space complexity is O(n) because of the recursion stack.

1. Recursion arguments: `LCA(node: TreeNode, p: number, q: number): number` 
2. Recursion ends: 
    * if the current node is null or equal to p or q, return the current node.
    * if the node is null, return null
    * if LCA on both subtree returns non-null, return the current node.
    * if either side the LCA returns non-null, return the non-null value.
3. Logics in each recursion layer

```typescript
export function LCARecursion(root: TreeNode | null, p: number, q: number): TreeNode | null {
  if(!root || root.val === p || root.val === q) return root;

  const left = LCARecursion(root.left, p, q);
  const right = LCARecursion(root.right, p, q);

  if(left && right) return root;
  if(left && !right) return left;
  if(!left && right) return right;

  return null;
}
```

### Iteration with Backtracking

> Time Complexity is O(n), where n is the number of nodes in the tree. Space complexity is O(n) because of the recursion stack.

1. We can maintain 2 stacks: `pathQ` and `pathP` to store the path from the root to the node `p` and `q`. The target is the last element in the stack that meets: `pathQ[i] === pathP[i]`
2. BackTracking: 
   * ending condition: if the current node is `null` return `false`
   * on each iteration, we check if the current node is `p` or `q` and if its subtrees contains `p` or `q` 
     * if so, return `true`
     * if not, backtrack and remove the current node from the path stack. return `false`
3. Go through the `pathQ` and `pathP`, return the last element that meets `pathQ[i] === pathP[i]`

```typescript
export function LCADFS(root: TreeNode | null, p: number, q: number): TreeNode | null {
  const pathP: TreeNode[] = [];
  const pathQ: TreeNode[] = [];
  helper(root, p, pathP);
  helper(root, q, pathQ);

  let i = 0;
  while(i < pathP.length && i < pathQ.length && pathP[i].val === pathQ[i].val) {
    i++;
  }

  return pathP[i - 1];
}

function helper(node: TreeNode | null, target: number, path: TreeNode[]) {
  if(!node) return false;
  path.push(node);

  if(node.val === target || helper(node.left, target, path) || helper(node.right, target, path)) {
    return true;
  } else {
    path.pop();
    return false;
  }
}
```




