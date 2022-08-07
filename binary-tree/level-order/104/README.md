# 二叉树的最大深度 

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

```
给定二叉树 [3,9,20,null,null,15,7]
    3
   / \
  9  20
    /  \
   15   7

返回最大深度: 3
```
## 迭代

### 层级遍历

```typescript 
export function maxDepth(root: TreeNode | null): number {
  let depth: number = 0 
  const queue: TreeNode[] = []

  let curr: TreeNode = root
  let levelLength: number 
  queue.push(curr)

  while(queue.length > 0) {
    levelLength = queue.length
    depth++

    for(let i = 0; i < levelLength ; i++) {
      curr = queue.shift()!

      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }
  }

  return depth
}
```

## 递归法

```typescript
export function maxDepth(root: TreeNode | null): number {
  return getDepth(root)
}

function getDepth(node: TreeNode | null) {
  if(!node) return 0

  let left = getDepth(node?.left)
  let right = getDepth(node?.right)

  return Math.max(left, right) + 1
}
```

## 回溯Backtrack

> 每次搜索一个分支, 会首先记录当前节点的状态, 尝试完某个分之后, 需要把状态回溯到记录的状态, 然后再尝试另外的分支. 这样做能够避免A分支的状态被带入到B分支中,从而避免影响结果.


