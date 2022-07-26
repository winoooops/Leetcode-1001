# 逆波兰表达式运算

> Reverse Polish notation was proposed by Burks, Warren and Wright in 1954 and so named because it was simply the reverse of Polish notation (prefix notation), invented by the Polish logician Jan Lukasiewicz, which puts the operator before the operands. 

> 逆波兰表达式：是一种后缀表达式，所谓后缀就是指算符写在后面。
> 平常使用的算式则是一种中缀表达式，如 `( 1 + 2 ) * ( 3 + 4 )` 。
> 该算式的逆波兰表达式写法为 `( ( 1 2 + ) ( 3 4 + ) * )` 。

逆波兰表达式主要有以下两个优点：

* 去掉括号后表达式无歧义，上式即便写成 1 2 + 3 4 + * 也可以依据次序计算出正确结果。

* 没有操作符的优先级, 适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中。



根据 逆波兰表示法，求表达式的值。

* 有效的算符包括 `+`、`-`、`*`、`/` 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

* 注意: 两个整数之间的除法只保留整数部分。可以保证给定的逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

## 示例


## 思路
遇到数字字符串把数字压入栈, 遇到符号运栈顶的两个数字

```typescript
export function evalRPN(tokens: string[]) {

  let stack: number[] = []

  for(let i of tokens) {
    let result: number

    switch(i) {
      case "+": 
        result = stack.pop()! + stack.pop()!
        stack.push(result)
        break;
      case "-":
        result = stack.pop()!
        result = stack.pop()! - result
        stack.push(result)
        break;
      case "/":
        result = stack.pop()!
        result = Math.trunc(stack.pop()! / result) 
        stack.push(result)
        break;
      case "*":
        result = stack.pop()! * stack.pop()!
        stack.push(result)
        break;
      default:
        stack.push(Number(i));
        break;
    }
  }

  return stack.pop()!
}
```

如果对运算符号进行哈希优化
```typescript 
export function evalRPN(tokens: string[]) {
  let stack: number[] = []
  let operationsMap: Map<string, (a: number, b: number) => number> = new Map([
    ["+", (a, b) => a + b], 
    ["-", (a, b) => a - b],
    ["/", (a, b) => Math.trunc(a / b)],
    ["*", (a, b) => a * b]
  ])

  for(let i of tokens) {
    let operation = operationsMap.get(i)

    if(!operation) {
      stack.push(Number(i))
    } else{
      let b = stack.pop()!;
      let a = stack.pop()!;
      stack.push(operation(a, b))
    }
  }

  return stack.pop()!
}
```
