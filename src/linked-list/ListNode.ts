export type ListNodeLike = ListNode | null;

export class ListNode {
  val: number;
  next: ListNodeLike;
  constructor(val?: number, next?: ListNodeLike) {
    this.val = val === undefined? 0 : val;
    this.next = next === undefined? null : next;
  }

  static createListNodeFromArray(list: number[]): ListNodeLike {
    let head = new ListNode(0);
    let curr = head;
    let newNode;
    for(let i = 0; i < list.length; i++) {
      newNode = new ListNode(list[i])
      curr.next = newNode;
      curr = newNode;
    }

    return head.next;
  }
}
