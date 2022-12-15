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
 