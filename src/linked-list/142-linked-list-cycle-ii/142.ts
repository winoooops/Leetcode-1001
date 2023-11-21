import {ListNode, ListNodeLike} from "../ListNode";

export function detectCycleSet(head: ListNodeLike): ListNodeLike {
  if(!head || !head.next) return null;
  const set = new Set();
  let curr: ListNodeLike = head;
  while(curr) {
    if(set.has(curr)) return curr;
    set.add(curr);
    curr = curr.next;
  }

  return null;
}


export function detectCycleFloyed(head: ListNodeLike): ListNodeLike {
  if(!head || !head.next) return null;
  let slow: ListNodeLike = head;
  let fast: ListNodeLike = head;
  while(slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) {
      slow = head;
      while(slow !== fast) {
        slow = slow.next as ListNode;
        fast = fast?.next as ListNode;
      }
      return slow;
    }
  }

  return null;
}
