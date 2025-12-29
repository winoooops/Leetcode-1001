import {ListNode, ListNodeLike} from "../ListNode";

export function partition(head: ListNodeLike, x: number): ListNodeLike {
  if(!head) return null;
  let curr: ListNodeLike = head;
  let left: ListNode = new ListNode(-1);
  let right: ListNode = new ListNode(-1);
  let leftNode = left;
  let rightNode = right;

  while(curr) {
    if(curr.val < x) {
      leftNode.next = curr;
      leftNode = leftNode.next;
    } else {
      rightNode.next = curr;
      rightNode = rightNode.next;
    }
    curr = curr.next;
  }
  rightNode.next = null;
  leftNode.next = right.next;

  return left.next;
}
