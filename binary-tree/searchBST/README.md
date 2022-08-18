# 二叉搜索树

给定二叉搜索树（BST）的根节点 root 和一个整数值 val。

你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 null 。

> 二叉搜索树是一个有序的树 
> * 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
> * 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
> * 它的左、右子树也分别为二叉搜索树

## 示例

![bst1](../../static/img/binary-tree/bst1.jpeg)
```
输入: root = [4,2,7,1,3] val = 2
输出: [2,1,3]
```

![bst2](../../static/img/binary-tree/bst2.jpeg)
```
输入: root = [4,2,7,1,3] val = 5 
输出: null
```

## 思路 

如果当前节点的值和目标相等, 返回当前节点
如果当前节点的值比目标大, 搜索左子树; 否则搜索右子树

### 递归搜索
```typescript
export function searchBST(root: TreeNode | null, target: number): TreeNode | null {
  if(!root || root.val === target) return root 

  if(root.val > target) {
    return searchBST(root.left, target)
  } else {
    return searchBST(root.right, target)
  }
}
```


### 迭代搜索 

```typescript 
export function searchBST(root: TreeNode | null, target: number): TreeNode | null {
  let curr: TreeNode | null = root 
  if(!curr) return null 

  const queue: TreeNode[] = [] 
  queue.push(curr)

  while(queue.length) {
    curr = queue.shift()! 

    if(curr.val === target) return curr

    if(curr.val > target) {
      curr.left && queue.push(curr.left)
    } else {
      curr.right && queue.push(curr.right)
    }
  }

  return null
}
```
