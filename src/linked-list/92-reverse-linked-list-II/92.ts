import {ListNode, ListNodeLike} from "../ListNode";
import {reverseListIteration} from "../206-reverse-linked-list/206";

export function reverseBetween(head: ListNodeLike, left: number, right: number): ListNodeLike {
  if(!head) return null;

  const sentinel = new ListNode(0);
  sentinel.next = head;

  let prev: ListNode = sentinel;
  let rightNode: ListNode = sentinel;
  let count = 0;

  // prev -> [leftNode, rightNode] -> succ
  while(count < right) {
    if(count < left - 1) {
      prev = prev.next as ListNode;
    }

    rightNode = rightNode.next as ListNode;
    count++;
  }

  let leftNode = prev.next as ListNode;
  let succ: ListNode = rightNode.next as ListNode;

  // cut off the link
  prev.next = null;
  rightNode.next = null;

  // reverse the link
  reverseListIteration(leftNode);

  // since leftNode is on the right now, rightNode is on the left
  leftNode.next = succ;
  prev.next = rightNode


  return sentinel.next;
}


export function reverseBetweenOneTime(head: ListNodeLike, left: number, right: number): ListNodeLike {
  if(!head) return null;

  let sentinel = new ListNode(0);
  sentinel.next = head;
  let prev = sentinel;

  for(let i = 0; i < left - 1; i++) {
    prev = prev.next as ListNode;
  }

  let curr = prev.next as ListNode;
  for(let i = 0; i < right - left; i++) {
    const next = curr.next as ListNode;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return sentinel.next;
}
