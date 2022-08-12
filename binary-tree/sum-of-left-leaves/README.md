# 左叶子之和

给定二叉树的根节点 root ，返回所有左叶子之和。


## 示例

![left-sum-trees](../../static/img/binary-tree/left-sum-trees)
```
输入: root = [3,9,20,null,null,15,7] 
输出: 24
解释: 两个左叶子分别为9和15
```

```
输入: root = [1,null,2]
输出: 0 
解释: 不存在左叶子
```

## 思路
这里注意是左叶子的和, 并不是左子树节点的和, 并且判断某个节点是否为左叶子需要通过其父节点来判断

### 递归法

1. 递归需要的参数: `makeSum(node: TreeNode | null, sum: number)`
2. 递归终止的条件
    * `if(!node) return sum += 0`
    * `if(node.left && !node.left.right && !node.left.left){ sum += node.left.val }`
3. 单层的逻辑
   ```typescript
   function makeSum(node: TreeNode | null, sum: number): number {
      if(node.left && !node.left.left && !node.left.right) {
        sum += node.left.val
      } else {
        sum = makeSum(node.left, sum)
      }
      sum = makeSum(node.right, sum)
      return sum
   }

   ```

```typescript 
export function sumOfLeftLeaves(root: TreeNode | null): number {
  return makeSum(root, 0)
}

function makeSum(node: TreeNode | null, sum: number): number {
  if(!node) return sum

  if(node.left && !node.left.left && !node.left.right) {
    sum += node.left.val
  } else {
    sum = makeSum(node.left, sum)
  }

  sum = makeSum(node.right, sum)

  return sum
}
```

### 迭代法 

```typescript 
export function sumOfLeftLeaves(root: TreeNode | null): number {
  const stack: TreeNode[] = []
  let curr: TreeNode | null = root 
  let sum: number = 0 

  if(!curr) return sum

  stack.push(curr)

  while(stack.length) {
    curr = stack.pop()!

    if(!curr) {
      curr = stack.pop()!
      continue
    }

    curr.right && stack.push(curr.right)

    if(curr.left) {
      stack.push(curr.left)
      if(!curr.left.left && !curr.left.right) {
        sum += curr.left.val
      } 
    }
    stack.push(curr)
    stack.push(null)
  }

  return sum
}
```
