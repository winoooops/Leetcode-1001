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
