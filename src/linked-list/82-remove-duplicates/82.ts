import {ListNode, ListNodeLike} from "../ListNode";

export function removeDuplicatesIteration(head: ListNodeLike): ListNodeLike {
  if(!head) return null;
  let sentinel = new ListNode(0, head);
  let prev = sentinel;
  let curr = sentinel.next;
  while(curr) {
    while(curr.next && curr.val === curr.next.val) {
      curr = curr.next;
    }
    if(prev.next !== curr) {
      prev.next = curr.next;
    } else {
      // make sure when the duplicates are deleted, the prev is still the same
      prev = prev.next as ListNode;
    }
    curr = curr.next;
  }

  return sentinel.next;
}

export function removeDuplicatesRecursion(head: ListNodeLike): ListNodeLike {
  if(!head || !head.next) return head;

  if(head.next && head.val === head.next.val) {
    // find the last duplicated node
    while(head.next && head.val === head.next.val) {
      head = head.next;
    }
    // return the next node of the last duplicated node
    return removeDuplicatesRecursion(head.next);
  } else {
    // return the next node of the current node
    head.next = removeDuplicatesRecursion(head.next);
  }

  return head;
}
