# 189. Rotate Array
Given an integer array nums, rotate the array to the right by `k` steps, 
where k is non-negative.


## Example

```
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

```
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```

## Solution

### 1.Brute Super Slow
> The efficiency of this algorithm is too slow, it won't pass the LeetCode Submission Test!

```java
public class Solution {
    public void RotateArray(int[] nums, int k)
    {
        if(nums.length == 1 || k == 0 || k == nums.length){
          return;
        }

        int rotate = 0;
        int temp;

        while(rotate < k)
        {
            int prev = nums[0];
            for(int i = 0; i < nums.length; i++)
            {
                if(i == 0){
                    prev = nums[i];
                    nums[i] = nums[nums.length - 1];
                } else {
                    temp = nums[i];
                    nums[i] = prev;
                    prev = temp;
                }
            }

            rotate++;
        }
    }
}

```



> Only discussing where the time complexity of each rotate is `O(n)`, or otherwise using *dequeue* to solve this would be of no meaning


### 2.Brute Faster


* first check k, make sure it less than `nums.length`; if k==0, should be the original nums
* then create an array `temp` of k to store the kth element that should be rotated
* rotate the array once, check if `idx >= k`, if so `nums[idx] = nums[idx - k]`; otherise, `nums[idx] = temp[k - idx - 1]`

> the time complexity is `O(n)` becuase it looped the nums once, created an array to store the kth element, so the space complexity is `O(k)`

```java
public class Solution
{
    public void rotateArray2(int[] nums, int k)
    {
        if(nums.length == 1 || k == 0 || k == nums.length){
          return;
        } 
        int len = nums.length;
        int[] temp = new int[k];

        // copy the kth last element
        for(int i = 0; i < k; i++)
        {
            temp[i] = nums[len - i - 1];
        }

        // loop through the array, if j >= k, do the rotation
        for(int j = len - 1; j >=0; j--)
        {
            if(j >= k) {
                nums[j] = nums[j - k];
            } else {
                nums[j] = temp[k - j - 1];
            }
        }
    }
}
```

### 3.Brute Optimized

核心思路: 我们每处理一个位置，就跳转到 `k` 个位置之后的位置。 

> Without using any additional arrays, so the space complexity is `O(1)` while the time complexity is still `O(n)` 

* first check k, make sure it less than `nums.length`; if k==0, should be the original nums
* declare `count` to keep track of numbers of elements looped, `pointer` to represent the current looped index, `prev` for last altered value, `start` for starting position
* loop until `count == nums.length`
  * `pointer = (pointer + k) % nums.length`
  *  swap the value of `nums[pointer]` with `prev`
  *  `count++`
  * if `pointer == start`, means a cycle of rotation has finished
    * move `start` to the next index
    * update value of `start` and `prev`

```java
public class Solution {
  public void rotateArray3(int[] nums, int k)
  {
    if(nums.length == 1 || k == 0 || k == nums.length){
      return;
    }
    int len = nums.length;
    k = k % len;

    int count = 0; // number of element moved.
    int start = 0;
    int pointer = start;
    int prev = nums[pointer];
    int tmp;

    while(count < len)
    {
      pointer = (pointer + k) % len;
      tmp = nums[pointer];
      nums[pointer] = prev;
      prev = tmp;
      count++;

      // when a rotation cycle is complete
      if(pointer == start)
      {
        start++;
        pointer = start;
        prev = nums[start];
      }
    }
  }
}
```
### 4.Swap

> Make sure the `k < nums.length`, if not just use the remained

* reverse the whole array
* divide the products into 2 arrays of length: `k` and `n - k`
* reverse those 2 arrays

```java
public class Solution{
    public void rotateArray4(int[] nums, int k)
    {
        if(nums.length == 1 || k == 0 || k == nums.length){
          return;
        }
        if(k > nums.length){
            k = k % nums.length;
        }

        reverse(nums, 0, nums.length-1);
        reverse(nums, 0, k-1);
        reverse(nums, k, nums.length - 1);
    }

    private void reverse(int[] nums, int left, int right)
    {
        int tmp;
        while(left < right)
        {
            tmp = nums[left];
            nums[left] = nums[right];
            nums[right] = tmp;
            left++;
            right--;
        }
    }

}
```

### Bezout's Equation 
这里需要借助的定理是--裴蜀定理(Bézout's equation).

> 裴蜀定理:根据维基百科，裴蜀定理（Bézout's identity or Bézout's lemma）是数论中的一个定理，它说：对于任意两个整数a和b，以及它们的最大公约数d，存在整数x和y使得：
> ax + by = d
> 这个方程叫做裴蜀等式（Bézout's equation）。这个方程有整数解当且仅当d是a和b的倍数。当方程有解时，它有无穷多个整数解。可以用扩展欧几里得算法找到一个解。

```java
public class Solution {
  public void rotateArray5(int[] nums, int k){
    int n = nums.length;
    k = k % n;
    int g = gcd(k, n);
    int count = n / g;

    for(int i = 0; i < g; i++)
    {
      int j = i;
      int curr = 0;
      int prev = nums[j];
      int temp;

      while(curr < count)
      {
        j = (j + k) % n;
        temp = nums[j];
        nums[j] = prev;
        prev = temp;
        curr++;
      }
    }
  }

  private int gcd(int x, int y)
  {
    return y == 0 ? x : gcd(y, x % y);
  } 
}
```