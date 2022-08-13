# 路径总和

给你二叉树的根节点`root` 和一个表示目标和的整数 `targetSum` 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 `targetSum` 。如果存在，返回 `true` ；否则，返回 `false` 。

## 示例

![pathSum](../../static/img/binary-tree/pathsum1.jpeg)
```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
解释：等于目标和的根节点到叶节点路径如上图所示。
```

```
输入：root = [1,2,3], targetSum = 5
输出：false
解释：树中存在两条根节点到叶子节点的路径：
(1 --> 2): 和为 3
(1 --> 3): 和为 4
不存在 sum = 5 的根节点到叶子节点的路径。
```

## 思路

### 递归I 

先把全部可能出现的结果都推入到栈中, 然后再去比较是否相等

1. 递归需要的参数: `makeSum(node: TreeNode | null) {}`
2. 递归终止的条件: `if(!node.left && !node.right) { }`
3. 单层处理的逻辑: 
    ```typescript 
    function makeSumTillLeave(node: TreeNode, sum: number) {
      if(!node.left && !node.right) {
        // 推入结果并返回
        list.push(sum + node.val)
        return 
      }

      if(node.left) {
        // 递归, 体现了回溯
        makeSumTillLeave(node.left, sum + node.val)
      }

      if(node.right) {
        // 递归, 体现了回溯
        makeSumTillLeave(node.right, sum + node.val)
      }
    }

    ```

```typescript 
export function hasPathSum(root: TreeNode | null, targetSum: number) {
  let list: number[] = []

  function makeSumTillLeave(node: TreeNode, sum: number) {
    if(!node.left && !node.right) {
      list.push(sum + node.val)
      return 
    }

    if(node.left) {
      // backtrack
      makeSumTillLeave(node.left, sum + node.val)
    }

    if(node.right) {
      // backtrack
      makeSumTillLeave(node.right, sum + node.val)
    }
  }

  makeSumTillLeave(root, 0)

  return list.includes(targetSum)
}
```

### 递归II

如果想要更加高效一点, 就直接在叶子节点判断 当前这条路径的和是否和目标相等, 并返回true或者false 

```typescript
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  function hasMet(node: TreeNode | null, sum: number): boolean {
    let left: boolean = false
    let right: boolean = false
    
    if(!node.left && !node.right) {
      if(sum + node.val === targetSum) return true 
      else return false 
    }

    if(node.left) {
      left = hasMet(node.left, sum + node.val)
    }

    if(node.right) {
      right = hasMet(node.right, sum + node.val)
    }
    return left || right
}
  if(!root) return false
  return hasMet(root, 0)
}
```

> **这里注意到其实很多情况下我们不需要遍历完整棵树, 只需要遇到满足条件的叶子节点时返回true并终止就好, 所以可以作如下改动**

```typescript 
export function hasPathSum(root: TreeNode | null, targetSum: number) {
  function hasMet(node: TreeNode, sum: number): boolean {
    if(!node.left && !node.right && sum === 0) {
      return true
    }

    if(node.left) {
      if(hasMet(node.left, sum - node.left.val)) return true
    }

    if(node.right) {
      if(hasMet(node.right, sum - node.right.val)) return true
    }

    return false
  }

  if(!root) return false
  return hasMet(root, targetSum - root.val)
}
```
