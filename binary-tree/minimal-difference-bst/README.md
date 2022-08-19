# 二叉搜索树的最小差值

给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。

## 示例 

```
输入: [1,null,3,null,null,2]
   1 
    \
     3 
    / 
   2
输出: 1 

```

## 思路 

> 二叉搜索树其实本质上就是一个有序的数组, 利用这点可以最大话提升效率

### 特性递归 

* 利用中序递归, 那么遍历的节点就是有序的. 只记录下当前递归节点之前的一个节点,然后取出现过的最小值即可

1. 递归需要的参数: `node: TreeNode | null`, `prev: TreeNode | null`
2. 递归终止的条件: `if(node === null) return `
3. 单词递归需要的逻辑:
  ```tyepscript 
  // 中序遍历 
  function inOrder(node: TreeNode | null) {
    if(node === null) return 

    inOrder(node.left)

    if(prev) {
      diff = Math.min(diff, node.val - prev.val)
    } 
    prev = node 

    inOrder(node.right)
  }
  
  ```
```typescript 
function getMinimumDifference(root: TreeNode | null): number {
  let prev: TreeNode | null = null 
  let diff: number = Infinity

  function inOrder(node: TreeNode | null) {
    if(node === null) return 

    inOrder(node.left)

    if(prev) {
      diff = Math.min(diff, node.val - prev.val)
    } 
    prev = node 

    inOrder(node.right)
  }

  inOrder(root)

  return diff
}
```

### 中序遍历 

```typescript
export function minimalDifference(root: TreeNode | null): number {
  const stack: TreeNode[] = []
  let curr: TreeNode = root 
  let prev: TreeNode = null 
  let diff: number = Infinity

  stack.push(curr)

  while(stack.length > 0) {
    curr = stack.pop()! 
    if(curr === null) {
      curr = stack.pop()!

      if(prev) {
        diff = Math.min(diff, curr.val - prev.val)
      }
      prev = curr

      continue;
    }  

    curr.right && stack.push(curr.right)
    stack.push(curr)
    stack.push(null)
    curr.left && stack.push(curr.left)
  }

  return diff
}
```

```typescript 
export function minimalDifference(root: TreeNode | null): number {
  const stack: TreeNode[] = []
  let curr: TreeNode = root 
  let prev: TreeNode = null 
  let diff: number = Infinity

  while(curr || stack.length > 0) {
    if(curr) {
      stack.push(curr)
      curr = curr.left
    } else {
      curr = stack.pop()! 
      if(prev) diff = Math.min(diff, curr.val - prev.val)

      prev = curr
      curr = curr.right
    }
  }

  return diff
}
```

