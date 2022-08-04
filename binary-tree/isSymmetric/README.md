# 对称二叉树 

给你一个二叉树的根节点 root ， 检查它是否轴对称。

## 示例

![sys](../../static/img/binary-tree/symtree1.jpeg)
```
输入: [1,2,2,3,4,4,3]
输出: true
```

![sys2](../../static/img/binary-tree/symtree2.jpeg)
```
输入: [1,2,2,null,3,null,3]
输出: false
```

## 思路


### 层级遍历

```typescript
export function isSymmetric(root: TreeNode) {
  const queue: Array<TreeNode | null> = []
  let curr: TreeNode | null = root
  let lvlen: number 
  let level: Array<number | null> 

  queue.push(curr)

  while(queue.length > 0) {
    lvlen = queue.length 
    level = []

    for(let i = 0 ; i < lvlen ; i++) {
      curr = queue.shift()! 

      if(!curr) {
        level.push(null)
      } else {
        level.push(curr.val)
        queue.push(curr?.left)
        queue.push(curr?.right)
      }
    }

    let i = 0 
    let j = level.length - 1

    while(i < j) {
      if(level[i] !== level[j]) {
        return false
      }
      i++
      j--
    }
  }

  return true
}
```

### 迭代法 

因为要比较两个子节点**树** 是否相等, 所以需要判断
* 左子树和右子树的外侧相等
* 左子树和右子树的内侧相等

```typescript 
export function isSymmetric(root: TreeNode) {
  const queue: TreeNode[] = []
  let leftNode: TreeNode | null 
  let rightNode: TreeNode | null

  if(root) {
    queue.push(root.left)
    queue.push(root.right)
  }

  while(queue.length > 0) {
    leftNode = queue.shift()!
    rightNode = queue.shift()! 

    if(!leftNode && !rightNode) continue
    if(!leftNode || !rightNode || leftNode.val !== rightNode.val) return false


    // only compare the nodes on the same side
    queue.push(leftNode.left)
    queue.push(rightNode.right)

    queue.push(leftNode.right)
    queue.push(rightNode.left)
  }

  return true
}
```

### 递归法

1. 确定需要的参数: 左节点, 右节点
2. 确定终止条件
  * 左节点 和 右节点 均为空 => true 
  * 左节点 或者 右节点 有一个为空 => false 
  * 左节点的值 不等于 右节点的值 => false
3. 确定单层的逻辑
  * 递归比较内侧节点
  * 递归比较外侧节点
  * 返回前两者的结果


```typescript
export function isSymmetric(root: TreeNode) {
  if(!root) return true

  return iterator(root.left, root.right)
}

function iterator(left: TreeNode | null, right: TreeNode | null): boolean {
  if(!left && !right) return true
  else if(!left || !right) return false  
  else if(left.val !== right.val) return false

  let outer = iterator(left.left, right.right)
  let inner = iterator(left.right, right.left)

  return outer && inner
}
```
