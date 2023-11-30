# 92. Reverse Linked List II

Given the head of a singly linked list and two integers `left` and `right` where `left <= right`, 
reverse the nodes of the list from position left to position right, and return the reversed list.


## Example

```
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
```

```
Input: head = [5], left = 1, right = 1
Output: [5]
```



Constraints:

* The number of nodes in the list is n.
* 1 <= n <= 500
* -500 <= Node.val <= 500
* 1 <= left <= right <= n


## Solution

### Cut off, Reverse and sew back
> Time Complexity is `O(n)` as it might traverse twice(1 for finding, 2 for reverse), space complexity is `O(1)`

* find the `leftNode` and `rightNode`, as well as their adjacent nodes `prev` and `succ` nodes
* cut off the link between `prev` and `leftNode`, `rightNode` and `succ` 
* reverser `leftNode`
* sew back: `prev.next = rightNode`, `leftNode.next = succ`

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
    if(count < left - 1) {
      prev = prev.next as ListNode;
    }

    rightNode = rightNode.next as ListNode;
    count++;
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

> Please check ![206.Reverse-linked-list](../206-reverse-linked-list/README.md) for reverseList


### One-time Approach

A trick of doing reverse while traversing through the list is to *put the new nodes on the left of the list*
```
Before Reverse: 9 -> 7 -> [2 -> 5 -> 4 -> 3] -> 6

Iteration 1:  9 -> 7 -> [2 -> 5 -> 4 -> 3] -> 6
Iteration 2:  9 -> 7 -> [5 -> 2 -> 4 -> 3] -> 6
Iteration 3:  9 -> 7 -> [4 -> 5 -> 2 -> 3] -> 6
Iteration 4:  9 -> 7 -> [3 -> 4 -> 5 -> 2] -> 6
```

in this case, we need three pointer `prev`, `curr` and `succ` and a dummy pointer `tmp`
for any nodes that's included in the reverse range, we do: 
1. `next = curr.next` 
2. `curr.next = next.next`
3. `next.next = prev.next`(notice this is not `curr`)
4. `prev.next = next`

```ts
export function reverseBetweenOneTime(head: ListNodeLike, left: number, right: number): ListNodeLike {
  if(!head) return null;

  let sentinel = new ListNode(0);
  sentinel.next = head;
  let prev = sentinel;

  for(let i = 0; i < left - 1; i++) {
    prev = prev.next as ListNode;
  }

  let curr = prev.next as ListNode;
  for(let i = 0; i < right - left; i++) {
    const next = curr.next as ListNode;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return sentinel.next;
}
```

