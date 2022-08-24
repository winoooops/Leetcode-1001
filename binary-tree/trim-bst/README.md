# 修建二叉搜索树 

给你二叉搜索树的根节点 root ，同时给定最小边界low 和最大边界 high。通过修剪二叉搜索树，使得所有节点的值在[low, high]中。修剪树 不应该 改变保留在树中的元素的相对结构 (即，如果没有被移除，原有的父代子代关系都应当保留)。 可以证明，**存在唯一** 的答案 。

所以结果应当返回修剪好的二叉搜索树的新的根节点。注意，根节点可能会根据给定的边界发生改变。

## 示例 

![trim1](../../static/img/binary-tree/trim1.jpg)
```
输入：root = [1,0,2], low = 1, high = 2
输出：[1,null,2]
```

![trim2](../../static/img/binary-tree/trim2.jpg.crdownload)
```
输入：root = [3,0,4,null,2,null,null,1], low = 1, high = 3
输出：[3,2,null,1]
```

## 思路 

> 如果使用递归在遇到不符合条件的节点就删除返回null的话是错误的, 因为可能存在不符合条件的节点的子节点符合条件的情况
> ![trim3](../../static/img/binary-tree/trim3.png)

### 递归

1. 确定递归需要的参数: `root: TreeNode | null, left: number, right: number`, 需要返回`root: TreeNode | null`
2. 递归终止的条件: 
    * `if(!root) return null`
    * 即使这个节点不符合条件, 也需要查找子节点是否满足范围
        * `if(root.val > right) return recur(root.left, left, right)`
        * `if(root.val < left) return recur(root.right, left, right)`
3. 单层需要操作的逻辑
    ```typescript 
    export function trimBST(root: TreeNode | null, left: number, right: number): TreeNode | null {
      if (!root) return root

      // recursively look for a node's subtree even if it doesn't fit in the range
      if (root.val > right) return trimBST(root.left, left, right)
      if (root.val < left) return trimBST(root.right, left, right)

      root.left = trimBST(root.left, left, right)
      root.right = trimBST(root.right, left, right)

      return root
    }
    ```

### 迭代 

因为二叉搜索树的有序性，不需要使用栈模拟递归的过程。

```typescript
export function trimBST2(root: TreeNode | null, left: number, right: number): TreeNode | null {
  if (!root) return root

  // 处理头结点，让root移动到[L, R] 范围内，注意是左闭右闭
  while (root && (root.val < left || root.val > right)) {
    if (root.val < left) root = root.right
    if (root.val > right) root = root.left
  }

  let curr: TreeNode | null = root

  // 此时root已经在[L, R] 范围内，处理左孩子元素小于left的情况
  while (curr) {
    while (curr.left && curr.left.val < left) {
      curr.left = curr.left.right
    }
    curr = curr.left
  }

  curr = root

  // 此时root已经在[L, R] 范围内，处理右孩子元素大于right的情况
  while (curr) {
    while (curr.right && curr.right.val > right) {
      curr.right = curr.right.left
    }
    curr = curr.right
  }

  return root
}
```
