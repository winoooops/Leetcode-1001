export interface ILinkedList {
  size: number;
  head: ListNode;
  tail?: ListNode;

  addAtHead: (val: number) => void;
  addAtTail: (val: number) => void;
  addAtIndex: (index: number, val: number) => void;
  get: (index: number) => number;
  deleteAtIndex: (index: number) => void;
}

class ListNode {
  val: number;
  next: ListNode | null;
  prev: ListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export function LinkedListFactory(directions: number): ILinkedList {
  if(directions === 1) {
    return new LinkedListOne();
  } else {
    return new LinkedListTwo();
  }
}


class LinkedListOne implements ILinkedList{
  head: ListNode;
  size: number;
  constructor() {
    this.head = new ListNode(0); // Sentinel Node
    this.size = 0;
  }

  addAtIndex(index: number, val: number) {
    if(index > this.size) return;

    const temp = new ListNode(val);
    let prev, next;
    prev = this.head;
    for(let i = 0; i < index; i++) {
      prev = prev.next as ListNode;
    }
    next = prev.next;
    prev.next = temp;
    temp.next = next;
    this.size++;
  }

  deleteAtIndex(index: number) {
    if(index >= this.size) return;
    let prev = this.head;
    for(let i = 0; i < index; i++) {
      prev = prev.next as ListNode;
    }
    // @ts-ignore
    prev.next = prev.next?.next;
    this.size--;
  }

  addAtHead(val: number) {
    this.addAtIndex(0, val);
  }

  addAtTail(val: number) {
    this.addAtIndex(this.size, val);
  }

  get(index: number) {
    if(index >= this.size) return -1;
    let curr = this.head;
    for(let i = 0; i <= index; i++) {
      curr = curr.next as ListNode;
    }
    return curr.val;
  }
}

class LinkedListTwo implements ILinkedList{
  size: number;
  head: ListNode;
  tail: ListNode;
  constructor() {
    this.size = 0;
    this.head = new ListNode(0);
    this.tail = new ListNode(0);
  }

  addAtHead(val: number) {

  }

  addAtTail(val: number) {

  }

  addAtIndex(index: number, val: number) {
    if(index > this.size) return;
    const temp = new ListNode(val);
    let prev, next;
  }

  get(index: number): number {
    return 0;
  }

  deleteAtIndex(index: number) {

  }
}
