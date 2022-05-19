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
