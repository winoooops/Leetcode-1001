import {ListNode, ListNodeLike} from "../ListNode";

export function mergeTwoListsIteration(l1: ListNodeLike, l2: ListNodeLike): ListNodeLike {
  let dummy = new ListNode(0);
  let curr = dummy;

  // merge two lists as l1
  while(l1 && l2) {
    if(l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if(l1) {
    curr.next = l1;
  }
  if(l2) {
    curr.next = l2;
  }

  return dummy.next;
}

export function mergeTwoListsRecursion(l1: ListNodeLike, l2: ListNodeLike): ListNodeLike {
  if(l1 && !l2) return l1;
  if(l2 && !l1) return l2;

  if(l1 && l2) {
    if(l1.val <= l2.val) {
      l1.next = mergeTwoListsRecursion(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoListsRecursion(l1, l2.next);
      return l2;
    }
  }

  return null;
}
