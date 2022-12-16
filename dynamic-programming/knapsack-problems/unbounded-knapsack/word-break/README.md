# 139. 单词拆分

给你一个字符串 `s` 和一个字符串列表 `wordDict` 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。

注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

 

## 示例

```
输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
```

```
输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
     注意，你可以重复使用字典中的单词。
```

```
输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
```


## 思路 

### 回溯算法 


```typescript
export function wordBreakWithBackTracking(s: string, wordDict: string[]): boolean {
  // only remember when the outcome is false
  const memory: boolean[] = [];

  function backTracking(index: number, memory: boolean[]) {
    if (index >= s.length) return true;
    if (memory[index] === false) return false;

    for (let i = index; i < s.length; i++) {
      const word = s.substring(index, i + 1);

      if (wordDict.includes(word) && backTracking(i + 1, memory)) {
        return true
      }
    }
    
    // reset to last state
    memory[index] = false
    return false;
  }

  return backTracking(0, memory);
}
```

### 完全背包 

注意到字典中的单词可以重复使用, 并且判断目标字符串是否只由字典中的单词组成. 所以可以通过转化成完全背包解题. 

#### 动态规划5部曲 

1. 定义`dp: boolean[]`, 那么 `dp[j]` 中表示 目标为`j`的字符串 是否能够恰好由字典中的单词组成. 
2. 遍历顺序: 因为字符串只能有一种顺序, 所以这里是排列问题, 所以就要先遍历背包重量`j`, 再遍历
3. 递推公式: 满足条件的情况是, 截取出来的单词`s.substring(i, j)`恰好在字典中, 并且`dp[i]`, 即这个单词开始前`dp[i] === true`(这样才能满足恰好由字典中的单词组成)
4. 初始化: 因为判断的条件`dp[i] === true`, 也就是初始的时候需要保证 `dp[0] === true`; dp数组中的其他元素初始值为 `false`
5. 实例
   ![139-example](/static/img/dp/139.jpg)


```typescript 
export function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = new Array(s.length + 1).fill(false);

  dp[0] = true

  for (let j = 0; j <= s.length; j++) {
    for (let i = 0; i <= s.length; i++) {
      let word: string = s.substring(j, i);
      if (wordDict.includes(word) && dp[j]) {
        dp[i] = true;
      }
    }
  }

  return dp[s.length];
}
```