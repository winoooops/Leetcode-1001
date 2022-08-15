# 路径总和II  

给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。


## 示例
![pathSum](../../static/img/binary-tree/pathsum1.jpeg)

```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
```

## 思路

本体思路和[路径总和I](../hasPathSum/README.md)类似, 唯独不同的是这里需要遍历整棵树而不是遍历到满足条件就退出. 所以--**递归函数可以不返回值**. 

```typescript 
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const results: number[][] = [] 

  function recur(node: TreeNode | null, sum: number, path: number[]) {
    if(!node) return 

    if(!node.left && !node.right && sum === targetSum) {
      results.push(path)
    }

    if(node.left) {
      recur(node.left, sum + node.left.val, [...path, node.left.val])
    }

    if(node.right) {
      recur(node.right, sum + node.right.val, [...path, node.right.val])
    }
  }

  if(!root) return results
  recur(root, root.val, [root.val])

  return results
};
```
