export function validParentheses(s: string): boolean {
  const matcher: Map<string, string> = new Map();
  matcher.set(")", "(");
  matcher.set("]", "[");
  matcher.set("}", "{");

  const stack: string[] = [];

  for(let c of s) {
    let found = matcher.get(c);
    if(!found) {
      stack.push(c);
    } else {
      if(found !== stack[stack.length - 1]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
