# 合并二叉树 

给你两棵二叉树： root1 和 root2 。

想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。

返回合并后的二叉树。


## 示例 
![merge](../../static/img/binary-tree/merge.jpeg)
```
输入: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
输出: [3,4,5,5,4,null,7]
```


## 思路 

### 递归法
 
1. 递归需要的参数: `function mergeTree(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null`
2. 递归终止的条件: 1) root1 root2 均为null; 2) roo1为null, 返回root2; 3)root2为null, 返回root1
3. 单层需要操作的逻辑: 
  ```typescript 
  function mergeTree(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    // 两者均为空 返回 null 
    if(!root && !root2) return null

    // 其中一个节点为空, 返回另一个 
    if(!root) return root2 
    if(!root2) return root1 

    // 均不为空, 新建节点, 值为两者当前节点值的和 
    const root = new TreeNode(root1.val + root2.val)

    // 递归左子树 
    root.left = mergeTree(root1.left, root2.left)
    // 递归右子树 
    root.right = mergeTree(root1.right, root2.right)

    // 返回新节点 
    return root
  }
  ```

### 迭代法
* 如果两棵树的节点都不为空,将两棵树的节点储存在同一个队列中
  * 递归, 第二颗树的节点值加在第一棵树上 
  * 返回第一棵树
* 如果第一棵树的节点为空, 并且第二颗树的节点为非空, 用第二课树的节点代替

```typescript 
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if(!root1 && !root2) return null 
  
  if(!root1) return root2
  if(!root2) return root1 

  const queue: TreeNode[] = []

  queue.push(root1)
  queue.push(root2)

  while(queue.length > 0) {
    let node1 = queue.shift()! 
    let node2 = queue.shift()! 

    node1.val += node2.val 

    if(node1.left && node2.left) {
     queue.push(node1.left)
     queue.push(node2.left) 
    }

    if(node1.right && node2.right) {
      queue.push(node1.right)
      queue.push(node2.right)
    }

    if(!node1.left && node2.left) {
      node1.left = node2.left 
    }
    if(!node1.right && node2.right) {
      node1.right = node2.right
    }
  } 

  return root1 
};
```
