# 222. Count Complete Tree Nodes

Given the root of a **complete binary tree**, return the number of the nodes in the tree.

> In a complete binary tree, every level, except possibly the last, 
> is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Design an algorithm that runs in less than `O(n)` time complexity.

Constraints:

* The number of nodes in the tree is in the range [0, 5 * 104].
* 0 <= Node.val <= 5 * 104
* The tree is guaranteed to be complete.

## Example

```
Input: root = [1,2,3,4,5,6]
Output: 6
```

```
Input: root = []
Output: 0
```

```
Input: root = [1]
Output: 1
```

## Solutions

> A full binary tree is a binary tree in which every node has either 0 or 2 children.
 
![full-binary-tree](/static/img/binary-tree/full-binary-tree.png)

> A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.
 
![complete-binary-tree](/static/img/binary-tree/complete-binary-tree.png)

> A perfect binary tree is a binary tree in which all interior nodes have two children and all leaves have the same depth or same level.

![perfect-binary-tree](/static/img/binary-tree/perfect-binary-tree.jpg)


To determine a complete binary tree, we must check:
1. every level, except possibly the last, is completely filled.  
2. the nodes in the last level are as far left as possible.
3. the height of a binary tree is the number of edges between the root and the deepest leaf node.
4. if the height of the left and right subtrees are the same, then the tree is a **perfect binary tree**.


### Recursion

> Time Complexity: `O(log n)`, where `n` is the number of nodes in the tree.
> Space Complexity: `O(log n)`, where `n` is the number of nodes in the tree.

since the tree is complete, then there's a pattern that we can use to solve this problem: `2^h - 1` where `h` is the height of the tree. 

also, for any given subtrees in the complete binary tree, includes leaf nodes, is also a complete binary tree.

1. Needed arguments for the recursion: `countNodes(node: TreeNode)` 
2. Recursion Stops when
   * the currentNode is `null` return 0
   * if the node is a *full* binary tree, then the number of nodes is `2^h - 1` where `h` is the height of the tree.
   * if the node is not a *full* binary tree, then the number of nodes is `1 + countNodes(left) + countNodes(right)`
3. Logics in each recursion 
   * count the height of the left and right subtrees respectively, we named it as `leftHeight` and `rightHeight` 
   * if `leftHeight === rightHeight`, then this is a **perfect binary tree**
   * if `leftHeight !== rightHeight`, then then left is a **perfect binary tree** and right is a **full binary tree** 

```typescript
export function countNodesRecursion(root: TreeNode | null): number {
  if(!root) return 0;

  let leftNode = root.left;
  let rightNode = root.right;
  let leftDepth = 0, rightDepth = 0;

  while(leftNode) {
    leftNode = leftNode.left;
    leftDepth++;
  }

  while(rightNode) {
    rightNode = rightNode.right;
    rightDepth++;
  }

  return leftDepth === rightDepth ?
    Math.pow(2, leftDepth + 1) - 1 :
    1 + countNodesRecursion(root.left) + countNodesRecursion(root.right);
}
```

### DFS Iteration
> Time Complexity: `O(n)`, space complexity is `O(n)`.

```typescript
export function countNodesDFS(root: TreeNode | null): number {
  if(!root) return 0;
  const stack: TreeNode[] = [root];
  let current = root;
  let count = 0;

  while(stack.length > 0) {
    current = stack.pop()!;
    count++;

    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  }

  return count;
}
```

### BFS Iteration

> Time Complexity: `O(n)`, space complexity is `O(n)`.

```typescript
export function countNodesBFS(root: TreeNode | null): number {
  if(!root) return 0;
  const queue: TreeNode[] = [root];
  let count = 0;

  while(queue.length > 0) {
    let length = queue.length;
    count += length;

    for(let i = 0; i < length; i++) {
      const current = queue.shift()!;
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
  }

  return count;
}
```
