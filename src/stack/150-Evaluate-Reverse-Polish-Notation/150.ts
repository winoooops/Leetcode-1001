interface operatorSets {
  [key: string] : (a: number, b: number) => number
}

export function evalRPN(tokens: string[]): number {
  const operators: operatorSets   = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => Math.trunc(a / b),
  }

  const stack: number[] = [];

  for(let token of tokens) {
    if(operators[token]) {
      const b = stack.pop()!;
      const a = stack.pop()!;
      stack.push(operators[token](a, b))
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}
