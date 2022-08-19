# 二叉树的最近公共祖先 
 
 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

## 示例  
> The lowest common ancestor is the lowest node in the tree that has both n1 and n2 as descendants, where n1 and n2 are the nodes for which we wish to find the LCA. Hence, the *LCA* of a binary tree with nodes n1 and n2 is the shared ancestor of n1 and n2 that is located **farthest** from the root. 

![lca1](../../static/img/binary-tree/lca1.png)
``` 
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
```
```
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出：5
解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
```


## 思路

### 搜索的过程
1. 从根节点开始遍历
    * 如果 根节点是 `n1` 或者 `n2` 节点的话, 那么就返回根节点(LCA可以是节点本身)
    * 如果根节点不是 `n1` 或者 `n2` 的话, 后序遍历左子树和右子树 
2. 重复步骤1), 知道找到 某个根节点为 `n1` 或者 `n2`, 返回这个节点
3. 这样就可以找到某个节点满足: 左子树返回 `n1`, 右子树返回 `n2`

``` 
Root is pointing to the node with value 1, as its value doesn�t match with { 5, 6 }. We look for the key in left subtree and right subtree.

Left Subtree :
 New Root = { 2 } � 5 or 6, hence we will continue our recursion
 New Root = { 4 } , it�s left and right subtree is null, we will return NULL for this call
 New Root = { 5 } , value matches with 5 so will return the node with value 5
 The function call for root with value 2 will return a value of 5

Right Subtree :
 Root = { 3 } � 5 or 6 hence we continue our recursion
 Root = { 6 } = 5 or 6 , we will return the this node with value 6 
 Root = { 7 } � 5 or 6, we will return NULL

So the function call for root with value 3 will return node with value 6
As both the left subtree and right subtree of the node with value 1 is not NULL, so 1 is the LCA
```

### 回溯(后序递归)

> 二叉树回溯的过程就是从低到上. 而后序遍历就是天然的回溯过程, 因为它优先处理的是叶子节点. 


### 递归

1. 递归需要的参数:`node: TreeNode | null`, `p: number`, `q: number`, 因为不需要完全遍历这棵树, 所以需要返回值: `TreeNode`
2. 递归终止的条件: 
    * `if(!node) return null` 
    * `if(node.val === q || node.val === q) return node` 
    * 如果这个节点的两个返回值都不为空, 返回这个节点 
    * 如果一个返回值为空, 返回不为空的那一个
3. 单词递归循环的逻辑就是整个函数的逻辑 
```typescript
export function findLCA(node: TreeNode | null, p: number, q: number): TreeNode | null {
  if(!node) return null 
  if(node.val === p || node.val === q) return node

  let left = findLCA(node.left, p, q)
  let right = findLCA(node.right, p, q)

  if(left && right) return node
  if(left) return left
  if(right) return right
}
```

