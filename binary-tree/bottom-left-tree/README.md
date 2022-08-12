# 找到树左下角的值

给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

假设二叉树中至少有一个节点。


## 示例

```
输入: root = [2,1,3]
输出: 1
```

```
输入: [1,2,3,4,null,5,6,null,null,7]
输出: 7
```

## 思路

### 层序遍历

取最后一层数组的第一个值即可 

```typescript 
export function findBottomLeftValue(root: TreeNode | null): number {
  const queue: TreeNode[] = []
  let curr: TreeNode = root
  let level: number[] = []

  queue.push(curr)

  while(queue.length) {
    let len = queue.length 
    level = []
    for(let i = 0; i < len ; i++) {
      curr = queue.shift()!
      level.push(curr.val)

      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }
  }

  return level[0]
}
```

### 递归 

> **如果需要遍历整棵树，递归函数就不能有返回值。如果需要遍历某一条固定路线，递归函数就一定要有返回值！**

需要递归找到最深处的叶子节点 

1. 递归需要的参数: `findLeave(node: TreeNode, depth: number)` 以及全局变量`max`记录最大高度, 全局变量`result` 记录结果
2. 递归结束的条件: `if(!node.left && !node.right) {}`
3. 单层需要操作的逻辑 
    ```typescript 
    function findLeave(node: TreeNode, depth: number): number {
      // 遇到叶子节点 
      if(!node.left && !node.right) {
        // 只有出现的节点层数比当前记录更高时才更新
        if(depth > max) {
          max = depth 
          result = node.val
        }

        return result 
      }

      if(node.left) {
        depth++
        result = findLeave(node.left, depth)
        depth-- // 回溯
      }
      
      if(node.right) {
        depth++
        result = findLeave(node.right, depth)
        depth-- // 回溯
      }

      return result
    }
    ```
完整代码: 

```typescript 
function findBottomLeftValue(root: TreeNode | null): number {
    if(!root) return 0

    let max: number = 0 
    let result: number = 0  


    function findLeave(node: TreeNode, depth: number): number {
        if(!node.left && !node.right) {
            if(depth > max) {
                result = node.val
                max = depth
            }

            return result 
        }
        
        if(node.left) {
            depth++ 
            result = findLeave(node.left, depth)
            depth--
        }

        if(node.right) {
            depth++
            result = findLeave(node.right, depth)
            depth--
        }

        return result
    }
    
    return findLeave(root, 1)
};

```
