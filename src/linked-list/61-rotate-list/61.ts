import {ListNode, ListNodeLike} from "../ListNode";

export function rotateRight(head: ListNodeLike, k: number): ListNodeLike {
  if(!head || k === 0 || !head.next) return head;
  let curr = head;
  let length = 1;
  while(curr.next) {
    length++;
    curr = curr.next;
  }

  // find out how many operations need to happen
  let n = length - k % length;
  if(n === length) return head;

  // making a loop
  curr.next = head;

  // go to the last node
  while(n > 0) {
    curr = curr.next as ListNode;
    n--;
  }

  // cut off the link
  let next = curr.next
  curr.next = null;

  return next;
}
