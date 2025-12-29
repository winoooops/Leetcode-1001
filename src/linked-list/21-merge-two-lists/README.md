# 21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Constraints:

* The number of nodes in both lists is in the range [0, 50].
* -100 <= Node.val <= 100
* Both list1 and list2 are sorted in non-decreasing order.

## Example

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

```
Input: list1 = [], list2 = []
Output: []
```

```
Input: list1 = [], list2 = [0]
Output: [0]
```

## Solution

### Iteration 

* create a sentinel node `head` to store the result, and a pointer node `curr` to iterate through the lists 
* let `curr.next` points to the node that has smaller value between l1 and l2
* return `head.next` 

> Time Complexity is `O(n + m)`, `n` and `m` are the length of `list1` and `list2`; space complexity is `O(1)` 

```ts
export function mergeTwoListsIteration(l1: ListNodeLike, l2: ListNodeLike): ListNodeLike {
  let dummy = new ListNode(0);
  let curr = dummy;

  // merge two lists as l1
  while(l1 && l2) {
    if(l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if(l1) {
    curr.next = l1;
  }
  if(l2) {
    curr.next = l2;
  }

  return dummy.next;
}
```

### Recursion

> Time Complexity is `O(n + m)`, `n` and `m` are the length of `list1` and `list2`; 
> space complexity is `O(n + m)`, because in the worst scenario, the recursion needs to go as deep as `n + m` 

```ts
export function mergeTwoListsRecursion(l1: ListNodeLike, l2: ListNodeLike): ListNodeLike {
  if(l1 && !l2) return l1;
  if(l2 && !l1) return l2;

  if(l1 && l2) {
    if(l1.val <= l2.val) {
      l1.next = mergeTwoListsRecursion(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoListsRecursion(l1, l2.next);
      return l2;
    }
  }

  return null;
}
```

