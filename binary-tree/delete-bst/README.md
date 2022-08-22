# 删除二叉搜索书的结点

给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

## 示例 

```
输入：root = [5,3,6,2,4,null,7], key = 3
输出：[5,4,6,2,null,null,7]
解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
另一个正确答案是 [5,2,6,null,4,null,7]。
```
![delete-node](../../static/img/binary-tree/del_node_supp.jpg)

## 思路
一般来说，删除节点可分为两个步骤：

首先找到需要删除的节点； 如果找到了，删除它。 说明： 要求算法时间复杂度为 $O(h)$，h 为树的高度

对于二叉搜索树来说, 删除结点有以下5种情况 
1. 节点不存在, 返回`null`
2. 节点的左右子树都为 `null`, 直接删除, 返回null为根节点 
3. 节点的左子树为`null`, 右子树不为空, 删除根节点, 用右子树代替 
4. 节点的右子树为 `null`, 左子树不为空, 删除根节点, 用左子树代替
5. 节点的左右子树均不为空, **将删除节点的左子树头节点放到删除节点的右子树的最左面节点的左子树上**，返回删除节点右孩子为新的根节点。
    ![delete-bst](../../static/img/binary-tree/delete-bst.gif)

### 递归法
```typescript 
export function deleteNode(node: TreeNode | null, key: number): TreeNode | null {
  // if not found, return null, stop the recursion with null
  if (!node) return null

  // if target node is found, stop recursion with node  
  if (node.val === key) {
    // if target node has no children, return null 
    if (!node.left && !node.right) return null
    // if target has no left child, use right child to replace the node
    if (!node.left) return node.right
    // if target has no right child, use left child to replace the node 
    if (!node.right) return node.left

    // if target has both left and right child 
    let leftBottomNode: TreeNode = node.right
    while (leftBottomNode.left) {
      leftBottomNode = leftBottomNode.left
    }
    leftBottomNode.left = node.left
    return node.right
  }

  // start recursion
  if (node.val > key) {
    node.left = deleteNode(node.left, key)
  } else {
    node.right = deleteNode(node.right, key)
  }

  // bubble up 
  return node
}
```


### 迭代法 


