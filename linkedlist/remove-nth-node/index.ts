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
