# 打家劫舍专题


## 198. 打家劫舍

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

 

### 示例

```
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

```
输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

### 思路 

#### 动态规划5部曲 

1. `dp[i]` 表示 截至到第`i`家, 目前我能抢劫的最大金额. 
2. 递推公式: `dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])`
3. 遍历顺序: 按照房屋顺序依次遍历 
4. 初始值: `dp[0] = 0;`; dp数组中的每一个元素初始值都为0, 并且`dp[1] = nums[1]; dp[2] = Math.max(nums[0], nums[1])`
5. 实例 
    ![rob1](/static/img/dp/rob-1.jpg)


```typescript
export function rob(nums: number[]) {
  if (nums.length === 1) return nums[0];

  const dp: number[] = new Array(nums.length).fill(0);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
}
```

## 213. 打家劫舍

你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

 

### 示例

```
输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
```
```
输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

```
输入：nums = [1,2,3]
输出：3
```

### 思路 

本题目的思路和[198.打家劫舍]类似, 也是不可以连续偷, 但是多了一个限制条件--不可以同时偷头一家和最后一家, 所以这里其实有三种情况:
* 偷头一家 不偷最后一家
* 不偷头一家 偷最后一家
* 只偷中间的

```typescript
export function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  // 1. rob head, no tail
  const nums1 = nums.slice(0, nums.length - 1);
  // 2. rob tail, no head 
  const nums2 = nums.slice(1, nums.length);
  // 3. rob no head no tail
  const nums3 = nums.slice(1, nums.length - 1);

  return Math.max(helper(nums1), helper(nums2), helper(nums3));
}

function helper(nums: number[]): number {
  if (nums.length <= 1) return nums.length === 0 ? 0 : nums[0];

  const dp: number[] = new Array(nums.length).fill(0);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
}
```

## 337. 打家劫舍III

小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。

除了 `root` 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。

给定**二叉树**的 `root` 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。
 

### 示例
```
输入: root = [3,2,3,null,3,null,1]
输出: 7 
解释: 小偷一晚能够盗取的最高金额 3 + 3 + 1 = 7
```
![tree](/static/img/dp/rob3-tree.jpg)

```
输入: root = [3,4,5,1,3,null,1]
输出: 9
解释: 小偷一晚能够盗取的最高金额 4 + 5 = 9
```
![tree2](/static/img/dp/rob3-tree2.jpg)

### 思路 
#### 递归三部曲 
1. 递归函数需要的参数和返回值: 参数为当前节点 `treeNode`, 返回的数组就是`dp`数组, 只需要为二维数组, 即只含有两个元素 `dp[0]` 和 `dp[1]`
    * `dp[0]` 表示不选取当前节点能够获取的最大值    
    * `dp[1]` 表示选取当前节点能够获取的最大值
  > 因为在二叉树递归的过程中, 系统实际上会记录下每一层递归的参数, 所以一个长度为2的dp即可记录.
2. 确定终止条件: `if(!treeNode) return [0, 0]`
3. 二叉树的遍历顺序: 因为需要对左右子节点递归返回回来的值进行计算: 通过递归左节点，得到左节点偷与不偷的金钱; 通过递归右节点，得到右节点偷与不偷的金钱。
`let left = rob(treeNode.left); let right = rob(treeNode.right)`
4. 单层递归的逻辑: 
  * 如果偷当前节点: `dp[1] = treeNode.val + left[0] + right[0]`
  * 如果不偷当前节点: `dp[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1])`
  最后返回dp:
5. 推导dp数组
  ![house-robber](/static/img/dp/337.jpg)