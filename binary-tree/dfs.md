# 深度优先(DFS: Depth-First-Search)

## 1. 前序遍历
遍历方式为: 父节点 => 左子树 => 右子树

### 1.1 递归法
```typescript
export functionpreorder(node: TreeNode, nodeList: number[] ) {
  traverse(node, nodeList)
  return nodeList
}

function traverse(node:TreeNode, nodeList: number[]) {
  if(!node?.val)return

  // root
  nodeList.push(node.val)
  // left
  traverse(node.left, nodeList)
  // right
  traverse(node.right, nodeList)
}
```

## 1.2 迭代

不再需要储存 `list` 变量, 借助栈来储存节点, 当遍历到当前节点是吧当前节点的`val` push到结果中, 然后一次push 右子节点和左子节点(这样出栈顺序才是正确的)

```typescript
export functionpreorder(node: TreeNode) {
  const result: number[] = []
  const stack: TreeNode[] = []
  
  let currNode = node
    stack.push(currNode)
  
  while(stack.length > 0) {
    currNode = stack.pop()!
    currNode?.val && result.push(currNode.val)
  
    currNode?.right && stack.push(currNode.right)
    currNode?.left && stack.push(currNode.left)
  }
  
  return result
}

```

## 2. 后序遍历

### 2.1 递归法 
```typescript
export functionpostorder(node: TreeNode, list: number[]):number[] {
  traverse(node, list)
  return list
}

function traverse(node: TreeNode, list: number[]) {
  if(!node?.val)return

  // left
  traverse(node.left, list)
  // right
  traverse(node.right, list)
  // root
  list.push(node.val)
}
```

### 2.2 迭代法

后续遍历就是在某种程度上就是前序遍历的逆转, 遍历方式为 左子树=> 父节点 => 右子树
```typescript
export function postorder(root: TreeNode) {
  const result: number[] = []
  const stack: TreeNode[] = []

  let curr: TreeNode | null = root

  stack.push(curr)

  while(stack.length > 0) {
    curr = stack.pop()!
    curr?.val && result.push(curr.val)
    // 左右子树的入栈顺序和前序遍历相反
    curr?.left && stack.push(curr.left)
    curr?.right && stack.push(curr.right)
  }

  return result.reverse()
}
```

## 3. 深度优先中序遍历
遍历方式为: 左子树 => 父节点 => 右子树

### 3.1 递归法
```typescript
export functioninorder(node: TreeNode, list: number[]):number[] {
  traverse(node, list)
  return list
}

function traverse(node: TreeNode, list: number[]) {
  if(!node?.val)return

  // left
  traverse(node.left, list)
  // root
  list.push(node.val)
  // right
  traverse(node.right, list)
}
```

### 3.2 迭代法

中序遍历是左中右，先访问的是二叉树顶部的节点，然后一层一层向下访问，直到到达树左面的最底部，再开始处理节点（也就是在把节点的数值放进result数组中），这就造成了处理顺序和访问顺序是不一致的。

那么在使用迭代法写中序遍历，就需要借用指针的遍历来帮助访问节点，栈则用来处理节点上的元素。

```typescript
export functioninorder(root: TreeNode) {
  const result: number[] = []
  const stack: TreeNode[] = []

  let curr: TreeNode = root

  while(stack.length > 0 || curr) {
    if(curr) {
      stack.push(curr)
      curr = curr.left
    } else {
      curr = stack.pop()!

      if(curr?.val !== null) {
        result.push(curr.val)
      }
      curr = curr.right
    }
  }

  return result
}
```

> 推荐使用标记法模拟中序遍历 

```typescript
export functionu Inorder(root: TreeNode) {
  const result: number[] = []
  const stack: TreeNode[] = []
  let curr: TreeNode = root

  stack.push(curr)

  while(stack.length > 0) {
    curr = stack.pop()!

    if(!curr) {
      result.push(stack.pop()!.val)
      continue;
    }

    curr?.right && stack.push(curr.right)
    stack.push(curr)
    stack.push(null)
    curr?.left && stack.push(curr.left)
  }

  return result
}
```

