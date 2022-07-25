export class Node<T> {
  private _val: T | null 
  private _next: Node<T> | null

  constructor(val: T) {
    this._val = val
    this._next =  null
  }

  set value(val) {
    this._val = val
  }

  get value(): T | null{
    return this._val
  }

  set next(node: Node<T>) {
    this._next = node
  }

  get next(): Node<T> | null {
    return this._next
  }
}


export class Queue<T> {
  private head: Node<T> | null
  private tail: Node<T> | null

  constructor() {
    this.head = null
    this.tail = null
  }

  push(val: T) {
    let node = new Node(val)

    if(!this.head) {
      this.head = node
      this.tail = node 
    } else {
      this.tail.next = node
      this.tail = node 
    }
  }

  pop(): T | null {
    if(!this.head) return null

    let prev = this.head
    let next = this.head.next 

    this.head = next
    if(!next) this.tail = null

    return prev.value
  }

  peek(): T | null {
    if(!this.head) return null

    return this.head.value
  }
}
