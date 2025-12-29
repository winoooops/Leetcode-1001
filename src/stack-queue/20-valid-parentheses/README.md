# 20. Valid Parentheses

Given a string s containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.

An input string is valid if:

* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.
* Every close bracket has a corresponding open bracket of the same type.

**Constraints**

* 1 <= s.length <= 104
* `s` consists of parentheses only `()[]{}`.

## Example
```
Input: s = "()"
Output: true
```

```
Input: s = "()[]{}"
Output: true
```

```
Input: s = "(]"
Output: false
```

```
Input: s = "{[()]}"
Output: true
```

## Solution

### Stack with HashMap
* use a hashmap to store the matching pattern(only for ")", "]", "}")
* iterate through `s`,  and maintain a `stack` which save all the **unmatched parentheses**
  * if there's no matching pair or `stack` is empty, push the new parenthesis to `stack`
  * if there's a matching pair, remove the last element in the stack
* check if there's any remaining unmatched element in the stack

```ts
export function validParentheses(s: string): boolean {
  const matcher: Map<string, string> = new Map();
  matcher.set(")", "(");
  matcher.set("]", "[");
  matcher.set("}", "{");

  const stack: string[] = [];

  for(let i = 0; i < s.length; i++) {
    let found = matcher.get(s[i]);
    if(stack.length > 0 && found === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
}
```

### Improvement



