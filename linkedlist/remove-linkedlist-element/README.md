# 移除链表元素

给你一个链表的头节点 *head* 和一个整数 *val* ，请你删除链表中所有满足 `Node.val == val` 的节点，并返回**新的头节点**。

示例1 
![remove](../../static/img/linkedlist/remove.png)

示例2

如果移除的是处在链表头部的节点, 例如

![remove2](../../static/img/linkedlist/remove2.png)



## 解题思路: 创造虚拟头节点
如果按照一般的思路, 我们会想到直接吧头节点往后移动以为即可, 但是这样会造成两种判断, 更好的方式示例用统一的逻辑来处理这两种情况: 我们可以在头部增加一个新的虚拟节点, 那么即使是需要从原链表的头部删除元素, 我们也不需要去更改头节点的位置, 直接删除即可(当然在返回结果的时候需要去掉虚拟节点). 


```typescript
import { ListNode } from '../linkedlist.types'

export function removeElement(head: ListNode<number> | null, val: number ) {
  let dummy = new ListNode(null, head)
  let pre: ListNode<number> = dummy
  let curr: ListNode<number> | null = dummy.next

  while(curr) {
    if(curr.val === val) {
      pre.next = curr.next
    } else {
      pre = curr
    }
    curr = curr.next
  }

  return dummy.next 
}


export function createListNode(list: number[]) {
  let head = null

  for(let i = list.length - 1 ; i >= 0; i --) {
    let item = list[i]
    let newNode = new ListNode<number>(item, head)
    head = newNode
  }
  return head
}
```

