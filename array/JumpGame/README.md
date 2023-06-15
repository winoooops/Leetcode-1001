# 55.跳跃游戏 

给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。


## 示例
```
输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
```

```
输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
```

## 思路 

### 贪心算法

其实不需要精确到每一步需要走几步. 贪心地每次都走最大值,然后判断是否能够覆盖最后一个下标即可. 

```typescript 
export function canJump(nums: number[]): boolean {
  let coverage: number = 0 

  // 这里如果i走的比覆盖范围还快, 那么就一定不会成功覆盖到最后一个元素, 所以需要返回false 
  for(let i = 0; i <= coverage; i++) {
    coverage = Math.max(coverage, i + nums[i])

    if(coverage >= nums[nums.length - 1]) return true 
  }

  return false 
}
```

# 45.跳跃游戏II 
给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

## 示例

```
输入: [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
```


```
输入: nums = [2,3,0,1,4]
输出: 2
```

## 思路 

### 贪心法I 

贪心需要关心
* 走出的这步是到达目标点
* 走出的这一步是否超出了当前下标说能够到达的最远处, 如果超过, 那么就必须+1; 


```typescript 
export function jumpOne(nums: number[]): number {
  let currCoverage: number = 0 
  let nextCoverage: number = 0 
  let steps: number = 0 

  for(let i = 0; i < nums.length ; i++) {
    nextCoverage = Math.max(nextCoverage, i + nums[i])

    if(nextCoverage >= nums.length - 1) {
      steps++
      break
    }

    if(i === currCoverage) {
      currCoverage = nextCoverage
      steps++
    }
  }

  return steps
}
```
### 贪心法II

其实上面的特殊情况可以通过一种方式统一处理--我们只需要遍历到倒数第二个元素, 如果当前的最远距离正好等于这个元素的下标,那么还需要走一步才能走到终点

![one](../../static/img/greedy/jump2-1.png)
![two](../../static/img/greedy/jump2-2.png)

```typescript
export function jumpTwo(nums: number[]): number {
  let currCoverage: number = 0 
  let nextCoverage: number = 0 
  let steps: number = 0 

  for(let i = 0; i < nums.length - 1 ; i++) {
    nextCoverage = Math.max(nextCoverage, i + nums[i])

    if(i === currCoverage) {
      currCoverage = nextCoverage
      steps++
    }
  }

  return steps
}
```
