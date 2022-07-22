# 算法一千零一夜


## 算法基础: 数组

常见基本思路:

* 搜索有序数组: [二分法](./array/binary-search/README.md)
* 以`O(n)`的空间复杂度修改有序数组: [快慢指针](./array/remove-element/README.md)
* 不一样的有序数组: [前后快慢指针](./array/squares-sorted-array/README.md)
* 需要范围的快慢指针:[滑动窗口](./array/minimal-subarray-length/README.md)
* 螺旋矩阵: [螺旋矩阵](./array/spiral-matrix/README.md)


## 算法基础: 链表

[链表基础](./linkedlist/README.md)

常见基本思路:
* 虚拟头节点 
  * [删除链表元素](./linkedlist/remove-linkedlist-element/)
  * [设计链表](./linkedlist/design-linked-list/README.md)
  * [两两交换节点](./linkedlist/swap-nodes-in-pairs/) 
* 快慢指针
  * [逆转链表](./linkedlist/reverse-linkedlist/README.md)
  * [删除列表倒数第n位](./linkedlist/remove-nth-node/)
  * [环形链表](./linkedlist/linkedlist-cycle/)
* 双指针拼接
  * [链表相交](./linkedlist/intersections-of-two-linkedList/)

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
