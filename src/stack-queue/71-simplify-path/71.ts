export function simplifyPath(path: string): string {
  const root = "/";
  const stack: string[] = [];
  const items = path.split("/");

  for(let item of items) {
    if(item === '' || item === '.') continue;
    if(item === '..') {
      if(stack.length > 0) stack.pop();
      continue;
    }
    stack.push(item);
  }

  return root + stack.join("/");
}
