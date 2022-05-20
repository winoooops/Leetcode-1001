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
