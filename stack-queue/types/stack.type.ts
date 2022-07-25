export class StackElement<T> {
  // hold the data of a single stack element
  private _value: T;
  get value(): T {
    return this._value
  }
  set value(val: T) {
    this._value = val
  }

  // refernec to the next stack element 
  private _next: StackElement<T>
  get next(): StackElement<T> {
    return this._next
  }
  set next(val: StackElement<T>){
    this._next = val
  }

  constructor(val: T) {
    this._value = val
    this._next = null
  }
}

export class Stack<T> {
  private _first: StackElement<T>
  get first() {
    return this._first
  }
  set first(val: StackElement<T>) {
    this._first = val
  }

  private _last: StackElement<T> 
  get last() {
    return this._last;
  }
  set last(val: StackElement<T>) {
    this._last = val
  }
  
  private _size: number;
  get size() {
    return this._size;
  }
  set size(n: number) {
    this._size = n
  }

  constructor() {
    this._first = null
    this._last = null
    this._size = 0 
  } 

  push(val: T) {
    let newElement = new StackElement<T>(val)

    if(this._size === 0) {
      this._first = newElement
      this._last = newElement
    } else {
      this._last.next = newElement
      this._last = newElement
    }

    this._size++
    return true
  }

  pop(): T | null {
    if(this._size === 0) return null

    let prev = this._first

    this._first = prev.next
    this._size --

    return prev.value
  }

  peek(): T | null {
    if(this._size === 0) return null 
    return this._first.value
  }
}
