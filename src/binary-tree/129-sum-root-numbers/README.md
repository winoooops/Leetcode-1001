# Sum Root to Leaf Numbers

You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.

Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.



## Example

```
Input: root = [1,2,3]
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
```


```
Input: root = [4,9,0,5,1]
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.
```

## Solutions

### DPS

> Time complexity: O(n), space  complexity: O(n)

We can use DFS to traverse the tree and calculate the sum of the root-to-leaf numbers.

This will require a stack to keep track of the nodes need to be visited.

```typescript
export function sumNumbersDFS(root: TreeNode | null): number {
  if(!root) return 0;
  let total = 0;
  const queue = [{ node: root, sum: 0 }];

  while(queue.length) {
    const { node, sum } = queue.pop()!;
    const currSum = sum * 10 + node.val;

    if(!node.left && !node.right) total += currSum;

    if(node.right) {
      queue.push({ node: node.right, sum: currSum });
    }

    if(node.left) {
      queue.push({ node: node.left, sum: currSum });
    }
  }

  return total;
}
```

### Recursion

we can also use recursion to solve this problem.
* if the node is a leaf node, we can return the value of the current sum.
* if the node is not a leaf node, we can return the sum of the left recursion and right recursion.

```typescript
export function sumNumbersRecursion(root: TreeNode | null): number {
  return helper(root, 0);
}

function helper(node: TreeNode | null, sum: number): number {
  if(!node) return 0;

  const currSum = sum * 10 + node.val;

  if(!node.left && !node.right) return currSum;

  return helper(node.left, currSum) + helper(node.right, currSum);
}
```
