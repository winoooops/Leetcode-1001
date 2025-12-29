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
