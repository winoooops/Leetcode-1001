# 二叉树的迭代遍历 

递归的实现就是：每一次递归调用都会把函数的局部变量、参数值和返回地址等压入调用栈中，然后递归返回的时候，从栈顶弹出上一次递归的各项参数，所以这就是递归为什么可以返回上一层位置的原因。

## 前序迭代遍历

不再需要储存 `list` 变量, 借助栈来储存节点, 当遍历到当前节点是吧当前节点的`val` push到结果中, 然后一次push 右子节点和左子节点(这样出栈顺序才是正确的)

```typescript
import { TreeNode } from "../treenode.type"

export function preorder(node: TreeNode) {
  const result: number[] = []
  const stack: TreeNode[] = []

  let currNode = node
  stack.push(currNode)

  while(stack.length > 0) {
    currNode = stack.pop()!
    result.push(currNode.val)

    if(currNode?.right) stack.push(currNode.right)
    if(currNode?.left) stack.push(currNode.left)
  }

  return result
}

```

## 后续迭代遍历

后续遍历就是在某种程度上就是前序遍历的逆转

```typescript 
import { TreeNode } from "../treenode.type"

export function postorder(root: TreeNode) {
  const result: number[] = []
  const stack: TreeNode[] = []

  let curr: TreeNode | null = root

  stack.push(curr)
  
  while(stack.length > 0) {
    curr = stack.pop()!
    result.push(curr.val)
    // 顺序和前序遍历相反
    curr?.left && stack.push(curr.left)
    curr?.right && stack.push(curr.right)
  }

  
  return result.reverse()
}

```

## 中序迭代遍历

那么再看看中序遍历，中序遍历是左中右，先访问的是二叉树顶部的节点，然后一层一层向下访问，直到到达树左面的最底部，再开始处理节点（也就是在把节点的数值放进result数组中），这就造成了处理顺序和访问顺序是不一致的。

那么在使用迭代法写中序遍历，就需要借用指针的遍历来帮助访问节点，栈则用来处理节点上的元素。

```typescript
import { TreeNode } from "../treenode.type"

export function inorder(root: TreeNode) {
  const result: number[] = []
  const stack: TreeNode[] = []

  let curr: TreeNode = root

  while(stack.length > 0 || curr) {
    if(curr) {
      stack.push(curr)
      curr = curr.left
    } else {
      curr = stack.pop()!
      result.push(curr.val)
      curr = curr.right
    } 
  }

  return result
}

```

