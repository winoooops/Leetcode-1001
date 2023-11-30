import {ListNode, ListNodeLike} from "../ListNode";

export function hasCycle(head: ListNode | null) {
  if(head === null) return false;

  const helper: Set<ListNode> = new Set();
  let curr: ListNode | null = head;

  while(curr !== null) {
    if(helper.has(curr)) return true;

    helper.add(curr);
    curr = curr.next;
  }

  return false;
}

export function hasCycleFloyd(head: ListNode | null) {
  if(head === null) return false;

  let slow: ListNodeLike = head;
  let fast: ListNodeLike = head;

  while(slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if(slow === fast) return true;
  }

  return false;
}
