# 把二叉搜索树转换为累加树 

给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。

提醒一下，二叉搜索树满足下列约束条件：

节点的左子树仅包含键 小于 节点键的节点。 节点的右子树仅包含键 大于 节点键的节点。 左右子树也必须是二叉搜索树。

## 示例 
![convert-bst](../../static/img/binary-tree/convert-bst.png)
```
输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
```

```
输入：root = [0,null,1]
输出：[1,null,1]
```

```
输入：root = [3,2,4,1]
输出：[7,9,4,10]
```

## 思路

其实本质上就是对有序数组从后到前进行累加.  

### 递归法 

1. 递归需要的参数`root: TreeNode`, 需要递归整棵树不需要返回值
2. 递归终止的条件:`if(!root) return`
3. 单层递归需要处理的逻辑: 
    ```typescript
    function recur(root: TreeNode | null): TreeNode | null{
      if(!root) return 

      // right 
      recur(root.right)

      // root
      sum += root.val
      root.val = sum

      // left
      recur(root.left)

      return root
    }

    recur(root)

    return root
    ```
```typescript 
export function convertBST(root: TreeNode | null): TreeNode | null {
  if(!root) return null 

  let sum: number = 0 

  function recur(root: TreeNode | null): TreeNode | null{
    if(!root) return 

    // right 
    recur(root.right)

    // root
    sum += root.val
    root.val = sum

    // left
    recur(root.left)

    return root
  }

  recur(root)

  return root
}
```

### 迭代法(逆中序遍历)

因为迭代的顺序是 `右子树-> 父节点-> 左子树 `, 所以实质上就是更改了下中序遍历中左右子树入栈的顺序即可. 

```typescript 
export function reverseInOrder(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  let prev: TreeNode | null = null
  let curr: TreeNode | null = root

  const stack: TreeNode[] = []
  stack.push(curr)

  while (stack.length > 0) {
    curr = stack.pop()!

    if (!curr) {
      curr = stack.pop()!
      if (prev) {
        curr.val += prev.val
      }
      prev = curr
      continue
    }

    curr.left && stack.push(curr.left)
    stack.push(curr)
    stack.push(null)
    curr.right && stack.push(curr.right)
  }

  return root
}
```
