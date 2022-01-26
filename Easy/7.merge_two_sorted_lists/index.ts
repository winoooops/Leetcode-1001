export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function makeListNode(arr: number[]): ListNode | null {
  if (!arr.length) return null

  let result = arr.reduceRight((prev: ListNode | null, curr: number): ListNode | null => {
    return new ListNode(curr, prev)
  }, null)
  return result
}

export function mergeTwoList(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // 如果其中任意一个链表结束,直接把当前链表指向另一个链表(链表内顺序永远正确)
  if (!l1) return l2
  if (!l2) return l1

  // 链表指向比较小的那个数字,并且那个数字的下一个node也是比较小的那个
  if (l1.val < l2.val) {
    l1.next = mergeTwoList(l1.next, l2)
    return l1
  } {
    l2.next = mergeTwoList(l1, l2.next)
    return l2
  }
}