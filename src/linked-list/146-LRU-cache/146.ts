
class DLinkedNode {
  key: number;
  val: number;
  prev: DLinkedNode | null
  next: DLinkedNode | null;
  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

export class LRUCache {
  head: DLinkedNode;
  tail: DLinkedNode;
  map: Map<number, DLinkedNode>;
  capacity: number;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.head = new DLinkedNode(0, 0);
    this.tail = new DLinkedNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.map = new Map();
  }

  put(key: number, value: number) {
    if(this.map.has(key)) {
      // only update value
      const node = this.map.get(key)!;
      node.val = value;
      return;
    }
    /* add new node */
    // push the new node before the tail
    const node = new DLinkedNode(key, value);
    this.pushBeforeTail(node);
    console.log(node);

    // check if the capacity is full
    if(this.map.size === this.capacity) {
      // remove the head node
      const head = this.head.next!;
      this.removeNode(head);
      this.map.delete(head.key);
    }

    this.map.set(key, node);
  }

  get(key: number): number {
    const node = this.getNode(key)
    return node ? node.val : -1;
  }


  private removeNode(node: DLinkedNode) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  private getNode(key: number): DLinkedNode | null {
    if(!this.map.has(key)) return null;
    const node = this.map.get(key)!;
    // remove from the linked list
    this.removeNode(node);
    // push it back before the tail
    this.pushBeforeTail(node)

    return node;
  }

  private pushBeforeTail(node: DLinkedNode) {
    this.tail.prev!.next = node;
    node.prev = this.tail.prev!;
    node.next = this.tail;
    this.tail.prev = node;
  }
}
