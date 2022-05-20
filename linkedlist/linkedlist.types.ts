export class ListNode<T> {
  val: T;
  next: ListNode<T> | null; 
  constructor(val?: T, next?: ListNode<T> | null) {
    this.val = val
    this.next = next
  }
}

export function createListNode(list: number[]) {
  let head = null

  for(let i = list.length - 1 ; i >= 0; i --) {
    let item = list[i]
    let newNode = new ListNode<number>(item, head)
    head = newNode
  }
  return head
}
