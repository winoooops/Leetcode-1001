# 131.分割回文串

给你一个字符串`s`，请你将 `s` 分割成一些子串，使每个子串都是 **回文串** 。返回 `s` 所有可能的分割方案。

## 示例 

```
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
```

```
输入：s = "a"
输出：[["a"]]
```

## 思路 

> 切割问题类似于组合问题
> 
> 例如对于字符串abcdef：
>   * 组合问题：选取一个a之后，在bcdef中再去选取第二个，选取b之后在cdef中在选组第三个.....。
>   * 切割问题：切割一个a之后，在bcdef中再去切割第二段，切割b之后在cdef中在切割第三段.....。

![../../static/img/back-tracking/partition.jpg]
```
// substring(0, 1) => "a" => path.push("a") => ["a"]
    // substring(1,2) => "a" => path.push("a") => ["a", "a"]
        // substring(2,3) => "b" => path.push("b") => ["a", "a", "b"]
        // 3 === s.length return ["a", "a", "b"]
        // end of for-loop
    // substring(1,3) => "ab" => continue => end of for-loop
// substring(0, 2) => "aa" => path.push("aa") => ["aa"]
    // substring(2,3) => "b" => path.push("b") => ["aa", "b"]
    // 3 === s.length return ["aa", "b"]
```

### 回溯

回溯三步走
1. 递归需要的参数: 子串`path: number[]`, 结果集`result: number[][]`,切割的起点`startIdx: number`
2. 递归终止的条件: `if(startIdx >= str.length)`
3. 单层递归需要处理的逻辑: 
  ```typescript
  function backTracking(startIdx: number, path: string[]) {
    // 如果切到最后一个字符, 返回path

    // for循环, 开始递归 
    // 切割起点为startIdx, 终点为s.length - 1, 切割的指针为i
    for(let i = startIdx ; i < s.length ; i++) {
      // 如果当前切割的不是回文串, 继续下一个循环 
      
      // 如果是回文串, path推入当前子串 
      path.push(str.substring(startIdx, i + 1))

      backTracking(i + 1, path)

      // 回溯 
      path.pop()
    }
  }
  ```

#### 完整代码
```typescript 
function partition(s: string): string[][] {
  const result: string[][] = []
  if(!s.length) return result 

  function backTracking(startIdx: number, path: string[]) {
    if(startIdx >= s.length) {
      return result.push([...path])
    }

    for(let i = startIdx ; i < s.length ; i++) {
      if(!isPalidome(startIdx, i, s)) {
        continue
      }
      path.push(s.substring(startIdx, i + 1)) 
      
      backTracking(i + 1, path)

      path.pop()
    }
  }

  backTracking(0, [])
  return result
};

function isPalidome(left: number, right: number, s: string) {
  while(left < right) {
    if(s[left] !== s[right]) return false 
    left++
    right--
  }
  return true 
}
```
