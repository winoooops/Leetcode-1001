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
