# 124. Binary Tree Maximum Path Sum 

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. 

A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

Constraints:
* The number of nodes in the tree is in the range [1, 3 * 104].
* -1000 <= Node.val <= 1000

## Example

```
Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
```

```
Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
```

## Solutions 

### Recursion

For any given node, We can design a recursive DFS function which determines the maximum path sum between those 3 cases: 
1. only take the value of node itself
2. take the value of node and the maximum path sum of its left child
3. take the value of node and the maximum path sum of its right child

Specifically, when enter a new level of recursion, it's doing 3 things: 
1. recursively call dfs function on left and right subtree, If the calculated path sum from either side is negative, it's not beneficial to include that path in the sum (since we're looking for the maximum path sum), so it defaults to 0 using Math.max(helper(node.left/right), 0).
2. update the global max: the max path sum that includes the current node, which potentially have `node.val + left + right`(since left and right could be 0s)
3. return the maximum path sum: since only the left or the right node should be included in the path, we return the maximum path sum of the left and right subtree plus the value of the current node.

```typescript
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
```

### Tree Traversal

