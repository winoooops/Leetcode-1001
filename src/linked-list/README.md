# Linked-List

## Description
A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers.
The way data is stored in linked list makes it easier to insert or delete elements in the middle of the list: the space complexity and time complexity are `O(1)` 

## Implementation - [Design a Linked List](./707-design-linked-list/README.md)
There are 2 ways of linking the nodes: with one pointer or with two pointers.
### Linked with One Pointer
```ts
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
```


## Strategy: Sentinel Node
Sentinel Node is a dummy node that is linked to the head of the linked list. It is used to simplify some corner cases such as a list with only one node, or an empty list, by allowing us to avoid those cases from happening.
### [21. Merge Two Sorted List](./21-merge-two-lists/README.md)
```ts
export function mergeTwoLists(l1: ListNodeLike, l2: ListNodeLike): ListNodeLike {
  let sentinel = new ListNode(-1);
  let curr = sentinel;
  while(l1 && l2) {
    if(l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return sentinel.next;
}
```


## Strategy: Two Pointers
Because for any given linked list, we don't know its actual length, so we can't use the index to access the node. 
Instead, we can use two pointers in iteration to access the node. 

* the most common case is to use two pointers with sentinel node: `slow = sentinel, fast = sentinel.next`


### [19.Remove Nth nodes from end](./19-remove-nth-nodes-from-end/README.md)
```ts
export function removeNthFromEnd(head: ListNodeLike, n: number): ListNodeLike {
  if(!head) return null;  
  let sentinel = new ListNode(-1, head);
  let slow = sentinel, fast = sentinel.next;
  let distance = 0;
  while(fast) {
    if(distance >= n) {
      slow = slow.next;
    } else {
      distance++;
    }
    fast = fast.next;
  }
  
  slow.next = slow.next.next;
  return sentinel.next;
}
```

### [82. Remove Duplicates from Sorted List II](./82-remove-duplicates/README.md)
```ts
export function removeDuplicatesIteration(head: ListNodeLike): ListNodeLike {
  if(!head) return null;
  let sentinel = new ListNode(0, head);
  let prev = sentinel;
  let curr = sentinel.next;
  while(curr) {
    while(curr.next && curr.val === curr.next.val) {
      curr = curr.next;
    }
    if(prev.next !== curr) {
      prev.next = curr.next;
    } else {
      // make sure when the duplicates are deleted, the prev is still the same
      prev = prev.next as ListNode;
    }
    curr = curr.next;
  }

  return sentinel.next;
}
```

### [86. Partition List](./86-partition-list/README.md)
```ts
export function partition(head: ListNodeLike, x: number): ListNodeLike {
  if(!head) return null;
  let curr: ListNodeLike = head;
  let left: ListNode = new ListNode(-1);
  let right: ListNode = new ListNode(-1);
  let leftNode = left;
  let rightNode = right;

  while(curr) {
    if(curr.val < x) {
      leftNode.next = curr;
      leftNode = leftNode.next;
    } else {
      rightNode.next = curr;
      rightNode = rightNode.next;
    }
    curr = curr.next;
  }
  rightNode.next = null;
  leftNode.next = right.next;

  return left.next;
}
```

### [92. Reverse Linked List II](./92-reverse-linked-list-ii/README.md)
```ts
export function reverseBetween(head: ListNodeLike, left: number, right: number): ListNodeLike {
  if(!head) return null;

  const sentinel = new ListNode(0);
  sentinel.next = head;

  let prev: ListNode = sentinel;
  let rightNode: ListNode = sentinel;
  let count = 0;

  // prev -> [leftNode, rightNode] -> succ
  while(count < right) {
    count++;
    if(count < left) {
      prev = prev.next as ListNode;
    }

    rightNode = rightNode.next as ListNode;
  }

  let leftNode = prev.next as ListNode;
  let succ: ListNode = rightNode.next as ListNode;

  // cut off the link
  prev.next = null;
  rightNode.next = null;

  // reverse the link
  reverseListIteration(leftNode);

  // since leftNode is on the right now, rightNode is on the left
  leftNode.next = succ;
  prev.next = rightNode


  return sentinel.next;
}
```

```ts
export function reverseBetween(head: ListNodeLike, left: number, right: number): ListNodeLike {
  if(!head) return null;
  let sentinel = new ListNode(-1, head);
  let prev = sentinel;
  for(let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }
  let curr = prev.next;
  for(let i = 0; i < right - left; i++) {
    let next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }
  return sentinel.next;
}
```

## Strategy: Loop
in the case where the tail node is linked to the head node, we can say a loop is found in the linked list.
* this could be used to solve some problems, such as finding the starting node of the loop, or finding the length of the loop.
* loop detection can be done by using two pointers, one is moving one step at a time, the other is moving two steps at a time. If the two pointers meet, then there is a loop in the linked list.

### [61. Rotate List](./61-rotate-list/README.md)
```ts
export function rotateRight(head: ListNodeLike, k: number): ListNodeLike {
  if(!head) return null;
  let sentinel = new ListNode(-1, head);
  let slow = sentinel, fast = sentinel;
  let length = 0;
  while(fast.next) {
    fast = fast.next;
    length++;
  }
  for(let i = 0; i < length - k % length; i++) {
    slow = slow.next;
  }
  fast.next = sentinel.next;
  slow.next = null;

  sentinel.next = slow.next;
  return sentinel.next;
}
```

## Strategy: Recursion
Of course, we can use recursion to solve linked list problems. But that's not the focus here.


