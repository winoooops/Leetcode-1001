# 二叉树的所有路径 

给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

## 示例

```
输入: [1,2,3,null,5]

  1 
 / \
2   3 
 \   
  5

输出: ["1->2->5", "1->3"] 
```

## 思路

### 回溯

要求从根节点走到叶子节点的路径, 那么用 **前序遍历** 的话可以比较方便的让父节点指向子节点
需要把路径记录下来之后用回溯算法来进行回退, 以便来进入另外一个路径

![binary-path](../../static/img/binary-tree/binary-path.png)

### 递归 

1. 需要的参数: `findPath(node: TreeNode | null, path: string)`
2. 递归终止的条件: 
   ```typescript
   if(!node?.left && !node?.right) {
     path += node.val 
     result.push(path)
     return 
   }
   ```
3. 单层需要的逻辑:
   * `path += node.val+"->" `
   * `node?.left && findPath(node.left, path)`
   * `node?.right && findPath(node.right, path)`

```typescript 
export function binaryPaths(root: TreeNode | null): string[] {
  const result: string[] = []
  if(!root) return result

  findPath(root, "", result)
  return result
}


function findPath(node: TreeNode | null, path: string, paths: string[]) {
  if(!node.left && !node.right) {
    path += node.val
    paths.push(path)
    return 
  }

  path += node.val + "->"

  // path为父系传递过来的路径, 这里实质上是运用了回溯的思想
  node?.left && findPath(node.left, path, paths)
  node?.right && findPath(node.right, path, paths)
}
```


### 迭代 

采用前序迭代遍历方式, 这里可以创建一个路径栈, 每当有新的路径产生的时候, 就推入更新过后的路径. 只有当某个节点为叶子节点(没有左右子节点)的时候再把最后的路径推入结果中. 

```typescript 
export function binaryPaths(root: TreeNode | null): string[] {
  const result: string[] = []
  if(!root) return result

  const stack: TreeNode[] = []
  const paths: string[] = []
  let curr: TreeNode | null = root 
  let path: string = curr.val.toString()

  stack.push(curr) 
  paths.push(path)

  while(stack.length) {
    curr = stack.pop()!
    path = paths.pop()!

    if(!curr) {
      curr = stack.pop()!
      paths.push(path)
      continue;
    }

    if(curr?.right) {
      stack.push(curr.right)
      paths.push(path + "->" + curr.right.val)
    }

    if(curr?.left) {
      stack.push(curr.left)
      paths.push(path + '->' + curr.left.val)
    }

    stack.push(curr)
    stack.push(null)

    if(!curr.right && !curr.left) {
      result.push(path)
    }
  }
```

