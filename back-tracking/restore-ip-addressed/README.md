# 93.复原IP地址

有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。


## 示例

```
输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
```

```
输入：s = "0000"
输出：["0.0.0.0"]```
```

```
输入：s = "101023"
输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
```


## 思路 

这题和[回文子串](../partition/README.md)类似, 也是通过回溯法去切割穷举所有可能出现的结果. 需要注意合法ip的判断和必须全部字符都用到这两个限定条件. 

```typescript 
function restoreIpAddresses(s: string): string[] {
    const result: string[] = []
    function backTracking(startIdx: number, path: string[]) {
        if(path.length === 4 && startIdx >= s.length) {
            return result.push(path.join("."))
        }

        for(let i = startIdx; i < s.length; i ++) {
            const target = s.substring(startIdx, i+1)
            if(!isValidIP(target)) continue 

            path.push(target)
            backTracking(i + 1, path)
            path.pop()
        }
    }

    backTracking(0, [])
    return result 
};

function isValidIP(s: string): boolean {
    let num = Number(s)
    if(
        s.length === 0 || 
        (s.length > 1 && s[0] === "0") || 
        num > 255 || 
        num < 0 || 
        isNaN(num)
    ) return false 
    else return true
}
```


