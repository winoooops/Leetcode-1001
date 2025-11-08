# 224. Basic Calculator

Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().



## Example

```
Input: s = "1 + 1"
Output: 2
```

```
Input: s = " 2-1 + 2 "
Output: 3
```

```
Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
```

```
nums: [9,14]
ops: [+]
```


Constraints:

* 1 <= s.length <= 3 * 105
* s consists of digits, '+', '-', '(', ')', and ' '.
* s represents a valid expression.
* '+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
* '-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
* There will be no two consecutive operators in the input.
* Every number and running calculation will fit in a signed 32-bit integer.


## Solution

### Stack with Multiplier
https://leetcode.cn/problems/basic-calculator/solutions/646800/ru-he-xiang-dao-yong-zhan-si-lu-lai-zi-y-gpca/
> `()` only changes if it's "+" or "-", but it doesn't change the direction!!!

```ts
export function calculate(s: string): number {
  const stack: number[] = [];
  let result = 0, item = 0, multiplier = 1;

  for(let c of s) {
    if(c === ' ') continue;
    if(Number(c) || Number(c) === 0) {
      item = 10 * item + Number(c); // maybe larger than 10
    } else if(c === "+") {
      result += multiplier * item;
      item = 0;
      multiplier = 1;
    } else if(c === '-') {
      result += multiplier * item;
      item = 0;
      multiplier = -1;
    } else if(c === '(') {
      stack.push(result);
      stack.push(multiplier);
      result = 0;
      multiplier = 1;
    } else if(c === ')') {
      result += multiplier * item;
      item = 0;
      result *= stack.pop()!;
      result += stack.pop()!;
    }
  }

  result += multiplier * item;
  return result;
}
```
