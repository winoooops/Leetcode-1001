# 142. Linked List Cycle II

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

> Do not modify the linked list.

Constraints:
* The number of the nodes in the list is in the range [0, 104].
* -105 <= Node.val <= 105
* pos is -1 or a valid index in the linked-list.

## Example

```
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

```
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

```
Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
```

## Solution

### HashMap
> Time Complexity: O(n), space complexity: O(n)

The first intuition is to use a set to store the nodes that have been visited. But that's not the best solution.

```ts
export function detectCycleSet(head: ListNodeLike): ListNodeLike {
  if(!head || !head.next) return null;
  const set = new Set();
  let curr: ListNodeLike = head;
  while(curr) {
    if(set.has(curr)) return curr;
    set.add(curr);
    curr = curr.next;
  }

  return null;
}
```

### Two Pointers
This is a demostration of how the Floyed's Tortoise and Hare algorithm works.
![Demo](../../../static/img/linkedlist/cycle.gif);

Here are the summary of how the algorithm works:
* if `fast` and `slow` are the distance of two pointers have go so far, then `fast = slow * 2`
* before the pointers go inside the loop, they have to move `a` steps, the length of the loop is `b`
* hence we know: `fast = slow * 2 = a + nb + slow`, so `a = nb - slow`, this is the fist time they meet.
* if we let `slow` start from the head of the linked list, and `fast` start from the meeting point, then they will meet at the starting point of the loop.

```ts

