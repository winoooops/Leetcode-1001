import { ListNode } from "../../linkedlist.types"

export function detectCycle(head: ListNode<number>): ListNode<number> | null {
  if(!head || !head.next) return null;
  let slow = head
  let fast = head
  
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next 
    
    if(slow === fast) {
      slow = head
      while(slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow 
    }
  }
    
  return null
}

export function detectCycleTwo(head: ListNode<number> | null): ListNode<number> | null {
  if(!head || !head.next) return null;
  let slow = head.next
  let fast = head.next.next

  while(fast!== slow) {
    if(!fast || !fast.next ) return null;
    slow = slow.next;
    fast = fast.next.next; 
  }
  slow = head;
  while (fast !== slow) {
      slow = slow.next;
      fast = fast.next;
  }
  return slow;
}
