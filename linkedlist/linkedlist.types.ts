export class ListNode<T> {
  val: T;
  next: ListNode<T> | null; 
  constructor(val?: T, next?: ListNode<T> | null) {
    this.val = val
    this.next = next
  }
}
