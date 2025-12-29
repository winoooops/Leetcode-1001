# 104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Constraints:
* The number of nodes in the tree is in the range [0, 104].
* -100 <= Node.val <= 100

## Example

```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

```
Input: root = [1,null,2]
Output: 2
```

## Solution

### Depth First Search
if for a given node, we know the depth of left child node as `l`, 
the depth of right child node as `r`, then the max depth of this node is `max(l, r) + 1` 
More importantly, we could recursively calculate this on its left and right child node, which will exit when the node is `null`

> The space complexity is `O(height)`, as it will depend on the actual height of the tree node; the time complexity is `O(n)`, as it will iterate each node once.

```ts
export function maxDepth(node: TreeNode | null): number {
  if(!node) return 0;
  return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}
```

### Breadth First Search
We could also use BFS to solve this problem, as we could use a queue to store the node in each level, and iterate the queue until it is empty.
on each level, we simply add the left and right child node to the queue, and increase the depth by 1.

```ts
export function maxDepth(node: TreeNode | null): number {
  if(!node) return 0;
  const queue: TreeNode[] = [node];
  let depth = 0;
  while(queue.length) {
    const size = queue.length;
    for(let i = 0; i < size; i++) {
      const node = queue.shift()!;
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    depth++;
  }
  return depth;
}
```

