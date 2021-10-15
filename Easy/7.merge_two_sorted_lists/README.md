# 合并两个有序列表

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的.

- 两个链表的节点数目范围是 [0, 50]
- 100 <= Node.val <= 100
- l1 和 l2 均按 非递减顺序 排列

已知链表定义为
```typescript
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
```

![image](merge_ex1.jpg)
```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

```
输入：l1 = [], l2 = []
输出：[]
```

```
输入：l1 = [], l2 = [0]
输出：[0]
```


## 递归
```typescript
const mergeTwoList(l1: ListNode, l2: ListNode): ListNode | null => {
  // 如果其中任意一个链表结束,直接把当前链表指向另一个链表(链表内顺序永远正确)
  if(!l1) return l2
  if(!l2) return l1 
  

  // 链表指向比较小的那个数字,并且那个数字的下一个node也是比较小的那个
  if(l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
  } else {
      l2.next = mergeTwoLists(l1, l2.next)
      return l2
  }
}
 
```