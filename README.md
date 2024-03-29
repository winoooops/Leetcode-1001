# 算法一千零一夜


## 算法基础: 数组

常见基本思路:

* 搜索有序数组: [二分法](./array/binary-search/README.md)
* 以`O(n)`的空间复杂度修改有序数组: [快慢指针](./array/remove-element/README.md)
* 不一样的有序数组: [前后快慢指针](./array/squares-sorted-array/README.md)
* 需要范围的快慢指针:[滑动窗口](./array/minimal-subarray-length/README.md)
* 螺旋矩阵: [螺旋矩阵](./array/spiral-matrix/README.md)


## Data Structure: [LinkedList](./src/linked-list/README.md)

* create sentinel node
* use two pointers to traverse the linked list
* check if there's loop: two pointer with different speed
* adding or removing nodes: change the prev/next pointer of the node, instead of changing the node itself



## 算法基础: 哈希表

[哈希表基础](./hash-table/)

* 字母异位词
  * [有效的字母异位词](./hash-table/valid-anagram/)
  * [字母异位词分组](./hash-table/group-anagram/)
  * [找到字符串中的所有字母异位词](./hash-table/find-anagrams/)
  * [哈希表统计出现次数](./hash-table/find-common-char/)
* Set作为哈希表(常见于没有限制数值大小的情况)
  * [两个数组的交集](./hash-table/intersections-two-array/)
  * [快乐数](./hash-table/happy-number/)
* Map哈希处理需要多维数据且数量不限制 
  * [两数之和](./hash-table/two-sum/)
  * [四数相加II](./hash-table/four-sum/)
* 哈希表不擅长处理需要去重的情况(用双指针更好)
  * [三数相加](./hash-table/three-sum/)
  * [四数相加I](./hash-table/four-sum/)

## 算法基础: 字符串

* 双指针法
  * [替换空格](./strings/replace-spaces/README.md)
* 常见思路: 反转
  * [反转字符串](./strings/reverse-string/README.md)
* 常见思路: 局部反转 + 整体反转
  * [反转字符串中的单词](./strings/reverse-words)
  * [左旋转字符串](./strings/reverse-left-words)
* 常见思路: **KMP**
  * [实现strStr](./strings/str-str)
  * [重复的子字符串](./strings/repeated-substring/)

## 算法基础: 双指针

双指针法并不隶属于某一种数据结构，在数组，链表，字符串都用到了双指针法.

* 数组
  * [移除元素](../array/remove-element/)
* 字符串
  * [反转字符串](../strings/reverse-string/)
  * [替换空格](../strings/replace-spaces/)
  * [反转字符串中的单词](../strings/reverse-words/)
* 链表
  * [反转链表](../linkedlist/reverse-linkedlist/)
  * [删除链表的倒数第N个节点](../linkedlist/remove-nth-node/)
  * [链表相交](../linkedlist/intersections-of-two-linkedList/)
  * [环形链表](../linkedlist/linkedlist-cycle/)
* 哈希
  * [三数之和](../hash-table/three-sum/)
  * [四数之和](../hash-table/four-sum/)

## 算法基础: 栈和队列

### 栈
> 先进后出, 后进先出 FILO

- [用队列实现栈](https://www.notion.so/f8fb525df1404b56af258359858420c3)
- [判断有效的括号](https://www.notion.so/b694f36fd7db4c2a9dea3c95d38d83e1)
- [删除字符串中相邻的重复项](https://www.notion.so/47c62c8e963347e7988c2d89f92812ff)
- [逆波兰表达式](https://www.notion.so/1f997a2f261641839b4b517a63049e2d)

### 队列
> 先进先出, 后进后出 FIFO

- [用栈(数组)实现队列](https://www.notion.so/f62059d2be1c4cad85b68cea8938c1f0)
- [滑动窗口最大值](https://www.notion.so/c0e8b3b68e6b4f28b5038f31978e6a5b)
- [前K个高频元素](https://www.notion.so/K-008521ac8de84380b82a0edf0ea3c2e3)

## 算法基础: 二叉树 

[概念和常见题型](./binary-tree/README.md)

![review](./static/img/binary-tree/review.png)
