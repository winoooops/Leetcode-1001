## 二叉树的层序遍历

给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点).

![level-order](../../static/img/binary-tree/level-order-sample.png)

层序遍历一个二叉树。就是从左到右一层一层的去遍历二叉树。这种遍历的方式和我们之前讲过的都不太一样。

需要借用一个辅助数据结构即队列来实现，队列先进先出，符合一层一层遍历的逻辑，而是用栈先进后出适合模拟深度优先遍历也就是递归的逻辑。

而这种层序遍历方式就是图论中的广度优先遍历，只不过我们应用在二叉树上。

![animation](../../static/img/binary-tree/level-order-animation.gif)


## [简单的层序遍历](./102/)

* 利用队列先进先出的机制按顺序推入元素
* 循环的长度为进入循环的初始长度
* 因为转换为队列, 所以遍历的时间和空间复杂度为`O(n)`, 其中`n`为队列的长度

```typescript
export function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = []
  const helperQueue: TreeNode[] = []

  let curr: TreeNode = root

  helperQueue.push(curr)

  while(helperQueue.length > 0) {
    let level: number[] = []
    let length = helperQueue.length 

    for(let i = 0 ; i < length; i++){
      curr = helperQueue.shift()!
      level.push(curr.val);

      curr?.left && helperQueue.push(curr.left)
      curr?.right && helperQueue.push(curr.right)
    }
    result.push(level);
  }
  return result
}
```

## [层序遍历II](./107/README.md) 

给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

把正序层序遍翻转过来即可.

```typescript
export function levelOrderBottom(root: TreeNode) {
  const result: number[][] = []
  const queue: TreeNode[] = []
  let level: number[] = []
  let curr: TreeNode = root
  let length: number

  queue.push(curr)

  while(queue.length > 0) {
    level = []
    length = queue.length

    for(let i = 0; i < length ; i++) {
      curr = queue.shift()!
      curr?.val && level.push(curr.val)
      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }

    result.push(level)
  }

  return result.reverse()
}
```
## [二叉树的右视图](./199/README.md)

给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

![rightside-view](../../static/img/binary-tree/rightside-view.png)

判断下是否是右侧节点, 即最后一个节点即可

```typescript
export function rightSideView(root: TreeNode): number[] {
  const result: number[] = []
  const queue: TreeNode[] = []
  let curr: TreeNode = root
  let length: number

  queue.push(curr)

  while(queue.length > 0) {
    length = queue.length
    
    for(let i = 0; i < length ; i++) {
      curr = queue.shift()!

      if(i === length - 1) {
        result.push(curr.val)
      }

      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }
  }

  return result
}
```

## [二叉树的最大值](./515/README.md)

在二叉树中的每一行中找到最大的值

```
输入: [1, 3, 2, null, 5, 3, null, 9 ]
输出: [1, 3, 9]

```

```typescript
export function largestFromBinary(root: TreeNode): number[] {
  const result: number[] = []
  const queue: TreeNode[] = []

  let curr: TreeNode = root
  let len: number
  let max: number = 0 

  queue.push(curr)

  while(queue.length > 0) {
    len = queue.length
    max = 0

    for(let i = 0 ; i < len ; i++) {
      curr = queue.shift()! 
      curr.val > max ? (max = curr.val) : max
      
      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }
    result.push(max)
  }



  return result
}
```

## [二叉树的层平均值](./637/README.md)

给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。与实际答案相差 10-5 以内的答案可以被接受。

```
输入：root = [3,9,20,null,null,15,7]
输出：[3.00000,14.50000,11.00000]
解释：第 0 层的平均值为 3,第 1 层的平均值为 14.5,第 2 层的平均值为 11 。
因此返回 [3, 14.5, 11] 。

```

```typescript 
export function averageOfLevels(root: TreeNode) {
  const result: number[] = []
  const queue: TreeNode[] = []

  let curr: TreeNode = root
  let length: number 
  let sum: number

  queue.push(curr)

  while(queue.length > 0) {
    length = queue.length
    sum = 0 
    for(let i = 0 ; i < length; i++) {
      curr = queue.shift()!
      sum += curr.val
      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }

    result.push(sum / length)
  }

  return result
}
```



## [N叉树的层序遍历](./429/README.md) 

给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。

![n-treenode](../../static/img/binary-tree/n-tree.png)

```
上面这个3叉树返回的层序遍历为
[[1], [3,2,4], [5, 6]]
```
### N叉树的定义 

```typescript
export class Node {
  val: number;
  children: Node[]

  constructor(val?: number) {
    this.val = val === undefined ? 0 : val
    this.children = []
  }

  static create(list: Array<number | null>) {
    const queue: Node[] = []
    const root = new Node(list[0])
    let curr: Node 

    queue.push(root)

    for(let i = 1 ; i < list.length ; i++) {
      if(list[i]) {
        let node = new Node(list[i])
        queue.push(node)
        curr.children.push(node)
      } else {
        curr = queue.shift()
      }
    }
    return root
  }
}

```


### 思路

依次把当前节点下的子节点推入队列即可

```typescript 
export function levelOrder(root: Node | null):number[][] {
  const result: number[][] = []
  const queue: Node[] = []

  let curr: Node = root
  let level: number[] = []
  let levelLenth: number 

  queue.push(curr)

  while(queue.length > 0) {
    levelLenth = queue.length;
    level = []

    for(let i = 0 ; i < levelLenth ; i++) {
      curr = queue.shift()!
      level.push(curr.val)

      while(curr.children.length > 0) {
        queue.push(curr.children.shift()!)
      }
    }
    result.push(level)
  }

  return result
}
```



## [填充每个节点的下一个右侧节点指针](./116/README.md)

给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
```
class Node{
  left: Node | null
  right: Node | null
  next: Node | null 
  val: number;

  constructor(val: number, left?: Node, right?: Node, next?: Node){
    this.val = val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.next = next === undefined ? null : next
  }
}

```
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。

### 示例
```
输入：root = [1,2,3,4,5,6,7]
输出：[1,#,2,3,#,4,5,6,7,#]
解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。

```

![116_sample](../../static/img/binary-tree/116_sample.png)

### 思路

增加一个`prev`变量来记录上一个节点
* 如果是每一层的第一个节点, `prev`节点计作它本身, 供下一位使用
* 如果是每一层最后一个节点, `prev` 指向`null`

```typescript
export function connect(root: Node): Node {
  const queue: Node[] = []
  let curr: Node = root
  let prev: Node 
  let len: number 

  queue.push(curr)

  while(queue.length > 0) {
    len = queue.length
    prev = null
    for(let i = 0 ; i < len ; i++) {
      if(i === 0) {
        curr = queue.shift()!
        prev = curr
      } else {
        curr = queue.shift()!
        prev.next = curr 
        prev = curr
      }

      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }

    prev.next = null
  }

  return root
}
```

## [二叉树的最大深度](./104/README.md)

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

```
给定二叉树 [3,9,20,null,null,15,7]
    3
   / \
  9  20
    /  \
   15   7

返回最大深度: 3
```


```typescript 
export function maxDepth(root: TreeNode | null): number {
  let depth: number = 0 
  const queue: TreeNode[] = []

  let curr: TreeNode = root
  let levelLength: number 
  queue.push(curr)

  while(queue.length > 0) {
    levelLength = queue.length
    depth++

    for(let i = 0; i < levelLength ; i++) {
      curr = queue.shift()!

      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }
  }

  return depth
}
```

# [二叉树的最小深度](./111/README.md)

同二叉树的最大深度类似, 也是通过depth变量来记录层级, 如果出现左子节点和右子节点同时为空的情况, 返回深度. 

```typescript
export function minDepth(root: TreeNode | null): number {
  let depth: number = 0 
  const queue: TreeNode[] = []

  let curr: TreeNode = root
  let levelLength: number 
  queue.push(curr)

  while(queue.length > 0) {
    levelLength = queue.length
    depth++
    for(let i = 0; i < levelLength ; i++) {
      curr = queue.shift()!
      if(!curr?.left && !curr?.right) return depth
      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }
  }

  return depth
}
```




