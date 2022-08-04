# 二叉树

```typescript

```

## 二叉树的存储方式

### 链式存储

用指针存储. 通常用链式存储存储二叉树.

![linkedlist](../static/img/binary-tree/linkedlist-store.png)

### 顺序存储

用数组存储. 如果父节点的数组下标是 i，那么它的左孩子就是 i * 2 + 1，右孩子就是 i * 2 + 2。
![array](../static/img/binary-tree/array-store.png)

## 二叉树的种类

### 满二叉树 | Full Binary Tree

> 如果一棵二叉树只有度为0的结点和度为2的结点，并且度为0的结点在同一层上，则这棵二叉树为满二叉树。

![full-binary-tree](../static/img/binary-tree/full-binary-tree.png)


### 完全二叉树 | Complete Binary Tree

> 在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2^(h-1)  个节点。

![complete-binary-tree](../static/img/binary-tree/complete-binary-tree.png)

> [!WARNING]
> 满二叉树必为完全二叉树, 完全二叉树不一定是满二叉树.

### 二叉搜索树 | Binary Search Tree

* 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
* 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
* 它的左、右子树也分别为二叉排序树

![binary-search-tree](../static/img/binary-tree/binary-search-tree.png)


### 平衡二叉搜索树 | AVL Tree

> 它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。

![AVL](../static/img/binary-tree/avl.png)


## 二叉树的遍历方式
> 我们做二叉树相关题目，经常会使用递归的方式来实现深度优先遍历，也就是实现前中后序遍历，使用递归是比较方便的。之前我们讲栈与队列的时候，就说过栈其实就是递归的一种是实现结构，也就说前中后序遍历的逻辑其实都是可以借助栈使用非递归的方式来实现的。而广度优先遍历的实现一般使用队列来实现，这也是队列先进先出的特点所决定的，因为需要先进先出的结构，才能一层一层的来遍历二叉树。

二叉树主要有深度优先, 和广度优先两种遍历方式.

> 深度遍历中的前序, 中序和后序遍历方式见下图
> 这里前中后，其实指的就是中间节点的遍历顺序，只要大家记住 前中后序指的就是中间节点的位置就可以了。
> ![depth-order](../static/img/binary-tree/depth-order.png)

### 深度优先前序遍历

### 深度优先中序遍历

### 深度优先后序遍历

### [广度优先层次遍历](./level-order/README.md)

## 常见题型

![topics](../static/img/binary-tree/topics.png)
