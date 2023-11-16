import {ListNode, ListNodeLike} from "../ListNode";

export function removeNthFromEndHashMap(head: ListNodeLike, n: number): ListNodeLike {
  if(!head) return null;
  const sentinel = new ListNode(0, head);
  sentinel.next = head;

  const helper: Map<number, ListNodeLike> = new Map();
  let current: ListNodeLike = sentinel.next;
  let index: number = 1;
  while(current) {
    helper.set(index, current);
    current = current.next;
    index++;
  }

  let prev = helper.get(index - n - 1);
  let next = helper.get(index - n + 1) || null;
  if(prev) {
    prev.next = next;
  } else {
    sentinel.next = next;
  }
  return sentinel.next;
}

export function removeNthFromEndIteration(head: ListNodeLike, n: number): ListNodeLike {
  if(!head) return null;
  const sentinel = new ListNode(0, head);
  sentinel.next = head;
  let size = 0;
  let current: ListNodeLike = sentinel.next;
  while(current) {
    size++;
    current = current.next;
  }
  let prev: ListNode = sentinel;
  for(let i = 0; i < size - n; i++) {
    prev = prev.next as ListNode;
  }
  prev.next = prev?.next?.next || null;

  return sentinel.next;
}

// remove nth node form end of stack using stack data structure
export function removeNthNodeFromEndStack(head: ListNodeLike, n: number): ListNodeLike {
  if(!head) return null;
  const sentinel = new ListNode(0, head);
  sentinel.next = head;
  const stack: ListNode[] = [];
  let current: ListNodeLike = sentinel;
  while(current) {
    stack.push(current);
    current = current.next;
  }
  for(let i = 0; i < n; i++) {
    stack.pop();
  }
  let prev = stack.pop()!
  prev.next = prev.next?.next || null;

  return sentinel.next;
}

export function removeNthNodeFromEndTwoPointers(head: ListNodeLike, n: number): ListNodeLike {
  if(!head) return null;
  let sentinel = new ListNode(0, head);
  sentinel.next = head;
  let slow = sentinel;
  let fast: ListNodeLike = sentinel.next;
  let index = 0;
  while(fast) {
    if(index >= n) {
      slow = slow.next as ListNode;
    } else {
      index++;
    }

    fast = fast.next
  }
  slow.next = slow.next?.next || null;

  return sentinel.next;
}
