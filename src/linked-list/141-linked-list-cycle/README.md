# 141. Linked List Cycle
Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 

Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Constraints:

* The number of the nodes in the list is in the range [0, 104].
* -105 <= Node.val <= 105
* pos is -1 or a valid index in the linked-list.

## Example

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```


## Solution

### HashMap
* maintain a hashmap set
* iterate through the linked-list, write down each node's value; 
  * if encounter the value, that means this node has been visited before => return true;

```ts
export function hasCycle(head: ListNode | null) {
  if(head === null) return false;

  const helper: Set<ListNode> = new Set();
  let curr: ListNode | null = head;

  while(curr !== null) {
    if(helper.has(curr)) return true;

    helper.add(curr);
    curr = curr.next;
  }

  return false;
}
```

### Floyd's tortoise and hare algorithm

> Solve it with `O(1)` space complexity

```ts
export function hasCycleFloyd(head: ListNode | null) {
  if(head === null || head.next === null) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while(fast !== slow && fast !== null) {
    if(slow) slow = slow.next;

    if(fast.next === null) return false;

    fast = fast.next.next;

    if(fast === slow) return true;
  }

  return false;
}
```
