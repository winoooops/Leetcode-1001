export type ListNodeLike = ListNode | null;

export class ListNode {
  val: number;
  next: ListNodeLike;
  constructor(val?: number, next?: ListNodeLike) {
    this.val = val === undefined? 0 : val;
    this.next = next === undefined? null : next;
  }

  public static createListNodeFromArray(list: number[]): ListNodeLike {
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

  public static createLoopFromArray(list: number[], pos: number): ListNodeLike {
    let head = new ListNode(0);
    let curr: ListNode = head;
    let newNode;
    let loopNode: ListNodeLike = pos ? new ListNode(0) : null;
    for(let i = 0; i < list.length; i++) {
      newNode = new ListNode(list[i]);
      curr.next = newNode;
      curr = curr.next;
      if(i === pos) {
        loopNode = newNode;
      }
    }

    curr.next = loopNode;
    return head.next;
  }

  public getAtIndex(index: number) {
    let curr: ListNodeLike = this;
    let i = 0;
    while(curr && i < index) {
      curr = curr.next;
      i++;
    }

    return curr;
  }
}
