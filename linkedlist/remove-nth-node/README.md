# 删除链表的倒数第N个节点

给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

进阶：你能尝试使用一趟扫描实现吗？

## 示例

```
输入：head = [1,2,3,4,5], n = 2 
输出：[1,2,3,5]
```

## 思路

双指针的经典应用，如果要删除倒数第n个节点，让fast移动n步，然后让fast和slow同时移动，直到fast指向链表末尾。删掉slow所指向的节点就可以了。

```typescript 
import { ListNode } from "../linkedlist.types" 

export function removeNthFromEnd(head: ListNode<number> | null, n: number): ListNode<number> | null {
  if(!head) return head

  const tmp = new ListNode(0, head)

  let slow: ListNode<number> = tmp
  let fast: ListNode<number> = tmp

  for(let i = 0 ; i < n; i++) {
    fast = fast.next
  }

  while(fast.next) {
    slow = slow.next
    fast = fast.next
  }

  slow.next = slow.next.next
  return tmp.next
}
```
