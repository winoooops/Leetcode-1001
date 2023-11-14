export type ListNodeRandomLike = ListNodeRandom | null | undefined;

export class ListNodeRandom {
  val: number | null;
  next: ListNodeRandomLike;
  random: ListNodeRandomLike;

  constructor(val?: number | null, next?: ListNodeRandomLike, random?: ListNodeRandomLike) {
    this.val = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }

  getNodeAtIndex(index: number): ListNodeRandomLike {
    let curr: ListNodeRandomLike = new ListNodeRandom(0);
    curr.next = this;
    let count = 0;
    while (curr && count <= index) {
      curr = curr.next
      count++;
    }
    return curr;
  }

  public static createListNodeFromArray(list: Array<Array<number | null>>): ListNodeRandomLike {
    let head = new ListNodeRandom(0);
    let curr: ListNodeRandomLike = head;
    let newNode: ListNodeRandomLike;
    // build the listNode with next first
    for (let i = 0; i < list.length; i++) {
      newNode = new ListNodeRandom(list[i][0] as number);
      curr.next = newNode;
      curr = newNode;
    }

    curr = head.next;
    let nodeAt: number = 0;
    while (curr && nodeAt < list.length) {
      if (list[nodeAt][1] === null) {
        curr.random = null;
      } else {
        // console.log(`random should point to ${list[nodeAt][1]}`);
        let count: number = 0;
        newNode = head;
        while (newNode && count <= (list[nodeAt][1] as number)) {
          newNode = newNode.next;
          count++;
        }
        // console.log(newNode)
        curr.random = newNode;
      }

      curr = curr.next;
      nodeAt++;
    }


    return head.next;
  }
}
