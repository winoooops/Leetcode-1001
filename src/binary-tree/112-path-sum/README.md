# 112. Path Sum

Given the root of a binary tree and an integer targetSum, return `true` if the tree has a root-to-leaf path such that 
adding up all the values along the path equals targetSum.

A *leaf* is a node with no children.

Constraints:

* The number of nodes in the tree is in the range [0, 5000].
* -1000 <= Node.val <= 1000
* -1000 <= targetSum <= 1000


## Example 1:

```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.
```

```
Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
```

```
Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
```

## Solution

### Recursion

> Space Complexity: O(n) because of the recursion stack, time complexity is O(n) as well.

> Make sure to use `if(condition && helper())` instead of `if(condition) helper()`, because if one of the subtree failed to find a match, 
> I'll still need to go down the other subtree.

we can recursively calculate what's the remaining sum for the current node, inside each recursion:
* if the node is a leaf node, return if the remaining sum is equal to the node value
* if has left subtree, recursively call the left subtree with the remaining sum
* if has right subtree, recursively call the right subtree with the remaining sum
* if didn't find any match, return `false`

```typescript
export function pathSumRecursion(root: TreeNode | null, targetSum: number): boolean {
  if(!root) return false;
  return helper(root, targetSum - root.val);
}

function helper(node: TreeNode, remainingSum: number): boolean {
  if(!node.left && !node.right) return remainingSum === 0;
  // if left subtree exists, recursively check if the target sum can be found
  if(node.left && helper(node.left, remainingSum - node.left.val)) return true;
  // if right subtree exists, recursively check if the target sum can be found
  if(node.right && helper(node.right, remainingSum - node.right.val)) return true;

  return false;
}
```

### BackTracking
> Space Complexity is O(n) in light of backTracking, time complexity is O(n) as well.

still using DFS, but instead of using recursion, we can use backtracking to exit the deeper level of the tree and try another path.


```typescript
export function backTracking(node: TreeNode, targetSum: number, currentSum: number): boolean {
  if(!node.left && !node.right) {
    return currentSum + node.val === targetSum;
  }

  // if left subtree exists and match is found return true
  // currentSum + node.val is the currentsSum, if not met, a backtracking is performed
  if(node.left && backTracking(node.left, targetSum, currentSum + node.val)) return true;

  if(node.right && backTracking(node.right, targetSum, currentSum + node.val)) return true;

  return false;
}
```

### BFS
> Space Complexity is O(n) in light of the queue, time complexity is O(n) as well.

Now we can also use BFS to solve the problem, 
we can use a queue to store the nodes and the remaining sum for each node at each level.

```typescript
export function pathSumBFS(root: TreeNode | null, targetSum: number): boolean {
  if(!root) return false;

  const queue = [{ node: root, sum: 0 }];
  while(queue.length > 0) {
    const levelSize = queue.length;
    for(let i= 0; i < levelSize; i++) {
      const { node, sum } = queue.shift()!;
      if(!node.left && !node.right && sum + node.val === targetSum) return true;
      if(node.left) {
        queue.push({ node: node.left, sum: sum + node.val })
      }
      if(node.right) {
        queue.push({ node: node.right, sum: sum + node.val});
      }
    }
  }
  return false;
}
```

### Iteration

We can also use iteration to solve the problem, which requires a stack to keep track of the nodes and the remaining sum for each node.

```typescript
export function pathSumDFS(root: TreeNode | null, targetSum: number) {
  if(!root) return false;
  const queue = [{ node: root, sum: 0 }];
  while(queue.length) {
    const { node, sum } = queue.pop()!;
    const currSum = sum + node.val;
    if(!node.left && !node.right && currSum === targetSum) return true;

    if(node.right) {
      queue.push({ node: node.right, sum: currSum });
    }

    if(node.left) {
      queue.push({ node: node.left, sum: currSum });
    }
  }

  return false;
}
```
