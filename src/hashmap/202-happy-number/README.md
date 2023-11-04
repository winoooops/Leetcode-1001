# 202. Happy Number

Write an algorithm to determine if a number `n` is happy.

A happy number is a number defined by the following process:

* Starting with any positive integer, replace the number by the sum of the squares of its digits.
* Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
* Those numbers for which this process ends in 1 are happy.
 
Return true if n is a happy number, and false if not.



## Example

```
Input: n = 19
Output: true
Explanation:
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1

```

```
Input: n = 2
Output: false
Explanation: 
2² = 4
4² = 16
1² + 6² = 37
3² + 7² = 58
...
```

## Solution

> To solve a HashMap problem using array typically requires a limited amount of values 
