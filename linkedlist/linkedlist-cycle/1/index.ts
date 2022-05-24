import { ListNode } from '../linkedlist.types'

export function hasCycle(head: ListNode<number> | null): boolean {
  if(!head) return false

  let slow = head
  let fast = head.next
  
  while(slow !== fast) {
    if(fast === null || fast.next === null) return false

    slow = slow.next
    fast = fast.next.next
  }
  return true
}
