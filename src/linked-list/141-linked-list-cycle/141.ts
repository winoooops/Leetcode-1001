import {ListNode} from "../ListNode";

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
  if(head === null || head.next === null) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while(fast !== slow && fast !== null) {
    if(slow) slow = slow.next;

    if(fast.next === null) return false;

    fast = fast.next.next;

    if(fast === slow) return true;
  }

  return false;
}
