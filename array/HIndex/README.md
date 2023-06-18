# 274. H-Index
Given an array of integers citations where `citations[i]` is the number of citations a researcher received for their ith paper, 
return the researcher's h-index.

According to the definition of h-index on Wikipedia: 
The h-index is defined as the maximum value of h such that the given researcher has published at least `h` papers, 
that have each been cited at least `h` times.



## Example
```
Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
```

```
Input: citations = [1,3,1]
Output: 1
```

## Solution
> 这里的H指数不是被引用的次数, 而是引用次数大于某个阈值的**文章数**.

### 二分法
考虑到这是猜数字问题, 并且一定在数组区间内. 所以使用二分法求解. 这里使用双闭合区间(左闭右闭合)进行二分法.
> 空间复杂度为`O(n logN), 时间复杂度为`O(1)`, 其中n为`citations`数组的长度 

* `while (left < right)` 与 `left = mid`、`right = mid - 1` 配合使用表示退出循环以后有 `left == right` 成立；
* 看到 `left = mid` 与 `right = mid - 1` ，取 `int mid = (left + right) / 2` 的时候就需要**上取整**，因此加 1，如果不想看那么多东西，简单一句话，就是为了避免死循环；
退出循环以后，left 就来到了合适的位置，题目要返回的是论文篇数，所以需要返回 len - left；
* `int mid = (left + right + 1) / 2`; 写成这样是因为题目给出的数据范围不会使得 `left + right` 越界，所以不写成 `int mid = left + (right -left + 1) / 2`

```java
public class Solution {
    public int hIndexBinarySorted(int[] citations)
    {
        Arrays.sort(citations);
        int left = 0;
        int right = citations.length - 1;
        int h = 0;
        
        while(left < right) {
            int count = 0;
            h = (left + right) / 2;

            for(int citation : citations) {
                if(citation >= h) {
                    count++;
                }
            }

            if(count >= h) {
                left = h + 1;
            } else {
                right = h - 1;
            }

        }

        return h;
    }
}
```

### Counting Sort 借助数组来比较

* 对于有n个元素的`citations`数组来说, 我们可以创造一个有n+1个元素的`buckets`数组(+1是为了不需要对下标进行转换); 
* 遍历`citation数组中的`每个元素, 如果这个元素的值`v`大于`n`, 那么`buckets[n]++`; 否则就是直接`buckets[v]++`;
* 从后往前开始累加`buckets`数组中元素出现的个数, 直到 **出现的个数 >= i**, 这个i就是我们想要的结果

> 时间复杂度是`O(n)`(需要遍历长度为n的citations数组和长度为n+1的bucket数组), 空间复杂度是`O(n)`(需要创建长度为n+1的buckets数组), 其中n为citasion数组的长度

```java
class Solution {
    public int hIndexBucketSort(int[] citations)
    {
        int n = citations.length;
        int[] buckets = new int[n + 1];
        for(int citation: citations){
            if(citation >= n) {
                buckets[n]++;
            } else {
                buckets[citation]++;
            }
        }

        int counter = 0;
        for(int k = n; k >= 0; k--){
            counter += buckets[k];
            if(counter >= k) {
                return k;
            }
        }

        return 0;
    }
}
```

