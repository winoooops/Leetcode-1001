# 114. Flatten Binary Tree to Linked List

Given the root of a binary tree, flatten the tree into a "linked list":

* The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
* The "linked list" should be in the same order as a pre-order traversal of the binary tree.


## Example

```
Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]
```

```

Input: root = []
Output: []
```

```
Input: root = [0]
Output: [0]
```

## Solution

### Recursion
> Time Complexity: O(n), space complexity: O(n)

```ts
export function flatten(root: TreeNode | null): void {
  // modify the node
  if(!root) return;

  // flatten the left and right node
  flatten(root.left);
  flatten(root.right);

  let node = root.left;

  while(node) {
    if(node.right) {
      node = node.right;
    } else {
      node.right = root.right;
      root.right = root.left;
      root.left = null;
      break;
    }
  }
}
```


### Iteration

If we look into the order of the flattening, it's actually a pre-order traversal. 
We can use a stack to store the right node and then modify the node to the right node.

> Time Complexity: O(n), space complexity: O(n)

```ts
export function flattenIteration(root: TreeNode | null) {
  if(!root) return;
  const stack = [];
  stack.push(root);
  let prev: TreeNode | null = null;

  while(stack.length > 0) {
    const node: TreeNode = stack.pop()!;
    if(prev) {
      prev.left = null;
      prev.right = node;
    }

    // using array.pop() so push the right node first
    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);

    prev = node;
  }
}
```

### Iteration O(1) space complexity

We can use the Morris Traversal to achieve O(1) space complexity.

