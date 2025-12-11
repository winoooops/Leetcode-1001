# 30. Substring with Concatenation of All Words
You are given a string s and an array of strings words. All the strings of words are of the same length.
A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.

Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.


## Example

```
Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
The output order does not matter. Returning [9,0] is fine too.
```

```
Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
Explanation: Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.
There is no substring of length 16 in s that is equal to the concatenation of any permutation of words.
We return an empty array.
```

```
Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]
Explanation: Since words.length == 3 and words[i].length == 3, the concatenated substring has to be of length 9.
The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"] which is a permutation of words.
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"] which is a permutation of words.
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"] which is a permutation of words.
```

## Solution Walkthrough (中文)

此题使用滑动窗口的方式，即窗口内放入 `words.length` 个单词，然后开始滑动，每次滑动一个词(词的长度都是一样)，并判断窗口内的单词是否由 `words` 组成，比如 `s = "barfoofoobarthefoobarman"`, `words = ["bar","foo","the"]` 的情况。

**第一次滑动流程**
- 初始窗口 `['bar', 'foo','foo']` 未命中
- 入'bar'出'bar' `['foo','foo','bar']` 未命中
- 入'the'出'foo' `['foo','bar', 'the']` 命中 index 6
- 入'foo'出'foo' `['bar','the', 'foo']` 命中 index 9
- 入'bar'出'bar' `['the','foo','bar']` 命中 index 12
- 入'man'出'the' `['foo','bar','man']` 未命中
- 结束

**第二次滑动流程**
- 初始窗口 `['arf','oof','oob']` 未命中
- 滑动过程略

**第三次滑动流程**
- 初始窗口 `['rfo','ofo','oba']` 未命中
- 滑动过程略

无需第四次滑动，因为第四次滑动，初始窗口就是第一次滑动流程划入一个词后的结果 `['foo','foo','bar']`，后续流程与第一次滑动流程一模一样。

```ts
export function findSubstringII(s: string, words: string[]) {
  const result: number[] = [];
  if (!s || s.length === 0) return result;

  const wordSize = words[0].length;
  const numWords = words.length;
  const windowSize = wordSize * numWords;

  if (s.length < windowSize) return result;

  const wordMap: Map<string, number> = new Map();
  for (const c of words) {
    wordMap.set(c, (wordMap.get(c) ?? 0) + 1);
  }

  for (let i = 0; i < s.length - windowSize; i++) {
    let matched = 0;
    const map = new Map(wordMap);
    let left = i;

    for (let j = i + wordSize; j <= i + windowSize; j += wordSize) {
      console.log(s.slice(left, j));
      const currentWord = s.slice(left, j);

      if (map.has(currentWord)) {
        matched++;
        map.set(currentWord, map.get(currentWord)! - 1);
      }

      if (matched === numWords) {
        result.push(i);
        break;
      }

      left += wordSize;
    }
  }

  return result;
}
```

### 如何高效判断窗口内的词与 `words` 完全匹配是此题的另一个关键

不考虑效率，自然可以复制一份窗口内容，然后遍历一次 `words`，每次命中一个单词则删除掉 copy window 内该单词，遍历结束查看 copy windows 内是否有单词剩余，如果没有，则表示全部命中。

这里使用 `hashmap` 的方式，窗口是一个 `hashmap`，存储每个单词出现的次数，以第一次滑动窗口为例：

- 预置 `{'bar':-1, 'foo':-1,'the':-1}`
- 初始窗口 `{'bar':0,'foo':1, 'the':-1}` 未命中
- 入'bar'出'bar' `{'bar':0,'foo':1, 'the':-1}` 未命中
- 入'the'出'foo' `{'bar':0,'foo':0, 'the':0}` 命中 index 6
- 入'foo'出'foo' `{'bar':0,'foo':0, 'the':0}` 命中 index 9
- 入'bar'出'bar' `{'bar':0,'foo':0, 'the':0}` 命中 index 12
- 入'man'出'the' `{'bar':0,'foo':0, 'the':-1,'man':1}` 未命中

每次删除窗口 `map` 内计数为0的词，窗口 `map` 的大小为0，则命中。
