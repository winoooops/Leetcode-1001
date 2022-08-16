# 最大二叉树 

给定一个**不重复** 的整数数组 `nums` 。 *最大二叉树* 可以用下面的算法从 nums 递归地构建:

创建一个根节点，其值为 nums 中的最大值。
递归地在最大值 左边 的 子数组前缀上 构建左子树。
递归地在最大值 右边 的 子数组后缀上 构建右子树。
返回 nums 构建的 最大二叉树。


## 示例

```
输入: [3,2,1,6,0,5]
输出: [6,3,5,null,2,0,null,null,1]

- [3,2,1,6,0,5] 中的最大值是 6 ，左边部分是 [3,2,1] ，右边部分是 [0,5] 。
- [3,2,1] 中的最大值是 3 ，左边部分是 [] ，右边部分是 [2,1] 。
  - 空数组，无子节点。
  - [2,1] 中的最大值是 2 ，左边部分是 [] ，右边部分是 [1] 。
    - 空数组，无子节点。
    - 只有一个元素，所以子节点是一个值为 1 的节点。
- [0,5] 中的最大值是 5 ，左边部分是 [0] ，右边部分是 [] 。
        - 只有一个元素，所以子节点是一个值为 0 的节点。
        - 空数组，无子节点。
```
![example1](../../static/img/binary-tree/max-tree.jpeg)


```
输入: [3,2,1]
输出: [3,null,2,null,1]
```


## 思路

### 递归法(左闭右闭)

1. 递归需要的参数: `helper(nums: number[], left: number, right:number)`
2. 递归终止的条件: `if(left > right || right < 0) return null`
3. 单层递归处理的逻辑: 
   ```typescript 
   helper(nums:number[], left: number, right: number) {
      if(right < left) return null

      // 找到最大值 
      let idx: number
      for(let i = left; i <= right; i++) {
        if(!idx || nums[idx] < nums[i]) {
          idx = i 
        }
      }

      // 用最大值构建根节点
      const root = new TreeNode(nums[idx])

      // 遍历
      root.left = helper(nums, left, idx - 1)
      root.right = helper(nums, idx + 1, right)

      // 返回
      return root
   }

   ```
```typescript
export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  return helper(nums, 0, nums.length - 1)
}

function helper(nums: number[], left: number, right: number): TreeNode | null {
  if(right < left) return null

  let idx: number
  for(let i = left; i <= right; i++) {
    if(!idx || nums[idx] < nums[i]) {
      idx = i 
    }
  }

  const root = new TreeNode(nums[idx])

  root.left = helper(nums, left, idx - 1)
  root.right = helper(nums, idx + 1, right)

  return root
}
```

### 递归法(左闭右开)

```typescript
export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  return helper(nums, 0, nums.length)
}

function helper(nums: number[], left: number, right: number): TreeNode | null {
  if(right <= left) return null

  let idx: number
  for(let i = left; i < right; i++) {
    if(!idx || nums[idx] < nums[i]) {
      idx = i 
    }
  }

  const root = new TreeNode(nums[idx])

  root.left = helper(nums, left, idx)
  root.right = helper(nums, idx + 1, right)

  return root
}
```


