# 链表相交
 
 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。

![intersection](../../static/img/linkedlist/intersection.png)


## 思路

这个题目的本质: **如果两个链表有相交的地方, 那么就代表链表的终点一定相同, 问题只在于相同的节点有多少个**.

### 利用HashMap 

### 首先计算长度
``` typescript 
function getIntersectionNode(headA:ListNode<number> | null, headB: ListNode<number> | null) {
  if(!headA ||!headB) return null

  let nodeA = headA
  let nodeB = headB

  let sizeA = 0
  let sizeB = 0 
  let sizeGap = 0 

  // calculate sizeA 
  while(nodeA) {
    sizeA++
    nodeA = nodeA.next
  }

  // calculate sizeB
  while(nodeB) {
    sizeB++
    nodeB = nodeB.next
  }

  sizeGap = sizeA - sizeB 

  // move the longer linkedlist to fit the size of the shorter one
  if(sizeGap > 0) {
    while(sizeGap !== 0) {
      sizeGap --
      headA = headA.next
    }
  } else {
    while(sizeGap !== 0) {
      sizeGap ++
      headB = headB.next
    }
  }

  // comparison
  while(headA !== headB) {
    headA = headA.next
    headB = headB.next
  }

  return headA
};
```
 
### 拼接链表(两链表总长度固定)
```typescript 
import { ListNode } from '../linkedlist.types'

export function getIntersectionNode(headA: ListNode<number> | null, headB: ListNode<number> | null){
  if(!headA || !headB) return null 
    
  let pointerA = headA
  let pointerB = headB
  
  // TODO: in LeetCode, plz use while(pointerA !== pointerB) {}
  while(pointerA?.val != pointerB?.val) {
    if(pointerA === null) {
      pointerA = headB 
    } else {
      pointerA = pointerA.next
    }

    if(pointerB === null) {
      pointerB = headA 
    } else {
      pointerB = pointerB.next
    }

  }
    
  return pointerA
}
```
