import {ListNode, ListNodeLike} from "../ListNode";

export function reverseListIteration(head: ListNodeLike): ListNodeLike {
  if(!head) return null;
  let curr: ListNodeLike = head;
  let prev: ListNodeLike = null;
  let temp: ListNodeLike;
  while(curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

export function reverseListRecursion(head: ListNodeLike): ListNodeLike {
  if(!head) return null;

  return doReverse(head, null);
}

function doReverse(curr: ListNodeLike, prev: ListNodeLike) {
  if(!curr) return prev;
  const next = curr.next;
  curr.next = prev;
  prev = curr;
  curr = next;

  return doReverse(curr, prev);
}
