import { ListNode } from '../linkedlist.types'

export function swapPairs(head: ListNode<number> |null): ListNode<number> | null {
  if(!head) return head

  let temp = new ListNode(0, head)
  let curr = temp

  
  while(curr.next && curr.next?.next) {
    let left: ListNode<number> = curr.next
    let right: ListNode<number> = curr.next.next

    left.next = right.next
    curr.next = right
    curr.next.next = left
    curr = curr.next.next
  }

  return temp.next
}
