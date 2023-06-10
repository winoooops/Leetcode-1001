# 169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than `⌊n / 2⌋` times. 
You may assume that the majority element always exists in the array.



## Example

```
Input: nums = [3,2,3]
Output: 3
Example 2:
```

```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

## Solution

### Sort First 
> The time complexity is `O(nlog(n))`, the space complexity is `O(n)`
>   * the sorting algorithm's time complexity is `O(n log(n))`, the space complexity is `O(n)` since it create a new array.
>   * the looping's time complexity is `O(n)`, the space complexity is `O(1)`

* sort the array first, then we can just compare the adjacent elements 
* compare the current repetition and the max repetition

```java
public class Solution {
    public int majorityElementOne(int[] nums)
    {
       int[] sorted = Arrays.stream(nums).sorted().toArray();
       int count = 1;
       int max = 0;
       int target = sorted[0];
       for(int i = 1; i < sorted.length; i++)
       {
           if(sorted[i] == sorted[i - 1])
           {
               count++;
               if(count > max){
                   target = sorted[i];
                   max = count;
               }
           } else {
               count = 1;
           }
       }

       return target;
    }
}
```

### Moore's Voting Algorithm
Here the breakdown of the Moore's Voting Algorithm

```
* `int count = 0` to keep track of the current repeat, `int el = 0` to keep track of the current element
* loop through the array
    * if count is equal to 0, then count++ and let the element to be currentElement
    * if count is not 0 and stored `ele == currentElement`, `count++`
    * otherwise, `count--`
    
Example: nums = [2,2,1,1,1,2,2]

(i=0) => (count==0) => (ele==0) => (count=1), (ele=2)  
(i=1) => (count==1) => (ele==2) => (2==2) => (count=2), (ele=2)
(i=2) => (count==2) => (ele==2) => (1!=2) => (count=1), (ele=2)
(i=3) => (count==1) => (ele==2) => (1!=2) => (count=0), (ele=2)
(
```

```java
public class Solution {
    public int mooreVoting(int[] nums)
    {
        int length = nums.length;
        int count = 0;
        int element = 0;

        // applying Moore's Voting Algorithm
        for(int i = 0; i < length; i++)
        {
            if(count == 0)
            {
                count = 1;
                element = nums[i];
            } else if(element == nums[i]) {
                count++;
            } else {
                count--;
            }
        }
        return element;
    }
}
```

> if the problem doesn't state **the array must contain a majority element**, we need to check if the majority element exists

```
* init a new count variable: `count2`
* loop the araay again, if the `currentElement == ele`, `count2++`
* check if the count2 >= (nums.length / 2)
```

```java
public class Solution{
    public int mooreVotingImproved(int[] nums)
    {
        int length = nums.length;
        int count = 0;
        int element = 0;

        // applying Moore's Voting Algorithm
        for(int i = 0; i < length; i++)
        {
            if(count == 0)
            {
                count = 1;
                element = nums[i];
            } else if(element == nums[i]) {
                count++;
            } else {
                count--;
            }
        }
        
        int cnt = 0;
        for(int j = 0; j < nums.length; j++)
        {
            if(nums[j] == element) {
                cnt++;
            }
        }
        
        if(cnt >= nums.length / 2) return element;
        return -1;
        
        return element;
    }
} 

```
    


