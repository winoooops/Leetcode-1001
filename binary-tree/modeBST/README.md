# 二叉搜索树的众数 

给你一个含重复值的二叉搜索树（BST）的根节点 `root` ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。

如果树中有不止一个众数，可以按 **任意顺序** 返回。

假定 BST 满足如下定义：

结点左子树中所含节点的值 小于等于 当前节点的值
结点右子树中所含节点的值 大于等于 当前节点的值
左子树和右子树都是二叉搜索树

## 思路 

* 因为是二叉搜索树, 所以在中序遍历中是有序的
* 依次中序遍历, 如果出现了出现次数更多的元素, 把结果栈现存的元素都晴空, 然后将新的结果推入结果栈中

### 递归法 
```typescript 
export function findMode(root: TreeNode | null): number[] {
  let result: number[] = []
  let occur: number = 0 
  let max: number = 0 
  let prev: TreeNode | null = null 

  function recur(node: TreeNode | null) {
    if(!node) return result 

    // left 
    if(node.left) recur(node.left)

    // if exist and not equal, reset occurance
    if (prev && prev.val !== node.val) {
      occur = 1
    } else{
    // otherwise, increment occur
      occur++
    }
    prev = node

    if(occur === max) {
      result.push(node.val)
    } else if (occur > max) {
      max = occur
      result = [node.val]
    }

    if(node.right) recur(node.right)
  }

  recur(root)

  return result
}
```

### 中序遍历迭代
```typescript 
function findMode(root: TreeNode | null): number[] {
  let result: number[] = []
  if(!root) return result 
  
  const stack: TreeNode[] = []
  let prev: TreeNode | null = null 
  let curr: TreeNode | null = root 
  let count: number = 0 
  let maxCount: number = 0 

  stack.push(curr)

  while(stack.length) {
    curr = stack.pop()! 
    
    if(!curr) {
      curr = stack.pop()!
      if(prev && prev.val !== curr.val) {
        count = 1
      } else {
        count++
      }
      prev = curr 

      if(count > maxCount) {
        maxCount = count 
        result = [curr.val]
      } else if(count === maxCount) {
        result.push(curr.val)
      }

      continue 
    } 

    curr.right && stack.push(curr.right)
    stack.push(curr)
    stack.push(null)
    curr.left && stack.push(curr.left)
  }

  return result
};
```


