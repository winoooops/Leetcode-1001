# 逆转链表

题意：反转一个单链表。


## 示例:

```
输入: 1->2->3->4->5->NULL 
输出: 5->4->3->2->1->NULL
```
![reverse](../../static/img/linkedlist/reverse1.png)

## 思路

### 双指针法

利用快慢指针, 逆转next指针的指向方向.

![reverse2](../../static/img/linkedlist/reverse2.gif)

因为要不断在链表中往前走, 所以需要每一步都需要记下当前的节点


```typescript 
import { ListNode } from "../linkedlist.types"

export function reverseLinkedList(head: ListNode<number> | null): ListNode<number> | null {
  if(!head) return head

  let dummy = new ListNode(0, head)
  let curr: ListNode<number> = dummy.next
  let prev: ListNode<number> | null = null
  let next: ListNode<number>

  while(curr){
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}
```

### 递归法
```typescript 
import { ListNode } from "../linkedlist.types"

export function reverseLinkedList(head: ListNode<number> | null): ListNode<number> | null {
  if(!head) return head

  return reverse(null, head)
}


export function reverse(prev: ListNode<number> | null, curr: ListNode<number> | null) {
  if(!curr) return prev
  
  let next: ListNode<number> | null = curr.next
  curr.next = prev 
  prev = curr
  curr = next

  return reverse(prev, curr)
}

```


