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
