import {ListNode, ListNodeLike} from "../ListNode";

export function addTwoNums(l1: ListNodeLike, l2: ListNodeLike): ListNodeLike {
  if(!l1 && !l2) return null;

  let head = new ListNode(0);
  let curr = head;
  let carry: number = 0;

  while(l1 || l2 || carry) {
    let sum = carry;
    if(l1) {
      sum += l1.val;
      l1 = l1.next
    }

    if(l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    let newNode= new ListNode(sum % 10)
    curr.next = newNode
    curr = newNode;
  }
  return head.next;
}
