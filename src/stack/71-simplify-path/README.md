# 71. Simplify Path

Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.

The canonical path should have the following format:

* The path starts with a single slash '/'.
* Any two directories are separated by a single slash '/'.
* The path does not end with a trailing '/'.
* The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')

Return the simplified canonical path.



## Example

```
Input: path = "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.
```

```
Input: path = "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
```

```
Input: path = "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
```

## Solution 

### Simulation with stack

go through the file path, every `item` is actually the string in between `/`, maintain a stack, and check:  
* if `item === '..'`, then pop the last element in the stack(if exists) 
* if `item === '.' || item === null`, then nothing needs to be done
* if `item === actualText`, push into the stack

last, just go through stack's head to tail, join by `/` again, and output the string

```ts
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
```
