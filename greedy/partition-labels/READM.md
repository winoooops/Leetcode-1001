# 763. 划分字母区间 

字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。

## 示例

```
输入：S = "ababcbacadefegdehijhklij"
输出：[9,7,8] 解释： 划分结果为 "ababcbaca", "defegde", "hijhklij"。 每个字母最多出现在一个片段中。 像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
提示：
```

* S的长度在[1, 500]之间。
* S只包含小写字母 `a` 到 `z` 。

## 思路 

![partition-labels](../../static/img/greedy/partition-labels.png)

1. 首先统计每一个字符最后出现的位置
2. 从头遍历字符，并更新字符的最远出现下标，如果找到字符最远出现位置下标和当前下标相等了，则找到了分割点
### 贪心 

统计字符串中所有字符的起始和结束位置，记录这些区间(实际上也就是[435.无重叠区间](../erase-overlap-interval/)题目里的输入)，将区间按左边界从小到大排序，找到边界将区间划分成组，互不重叠。找到的边界就是答案。
```typescript
export function partitionLabels(s: string): number[] {
  const result: number[] = []; 

  const helper: Map<string, number> = new Map(); 

  for(let i = 0; i < s.length; i++) {
    helper.set(s[i], i)
  }

  let left: number = 0; 
  let right: number = 0; 


  for(let j = 0; j < s.length; j++) {
    right = Math.max(helper.get(s[j])!, right);

    if(j === right) {
      result.push(j - left + 1);
      left = right + 1;
    }
  }

  return result;
}
```