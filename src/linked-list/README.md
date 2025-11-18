# Linked List Mechanics

Pointer manipulation stays sane when you build helper nodes (sentinel/dummy), move references instead of values, and think in terms of `previous/current/next`. For cycle detection, keep fast/slow pointers; for recursion, bubble values back up carefully.

## Reasoning playbook

- Sentinel nodes simplify head inserts/deletes; always relink `next` pointers before moving on.
- Fast/slow pointers detect cycles, find middle nodes, or locate the nth-from-end node.
- Clone or reorder lists by interleaving original and auxiliary nodes when O(1) extra space is required.

## Problems & notes

- [2. Add Two Numbers](./2-add-two-numbers/)
- [19. Remove Nth Node From End of List](./19-remove-nth-nodes-from-end/)
- [21. Merge Two Sorted Lists](./21-merge-two-lists/)
- [61. Rotate List](./61-rotate-list/)
- [82. Remove Duplicates from Sorted List II](./82-remove-duplicates/)
- [86. Partition List](./86-partition-list/)
- [92. Reverse Linked List II](./92-reverse-linked-list-II/)
- [138. Copy List with Random Pointer](./138-copy-list-with-random-pointer/)
- [141. Linked List Cycle](./141-linked-list-cycle/)
- [142. Linked List Cycle II](./142-linked-list-cycle-ii/)
- [146. LRU Cache](./146-LRU-cache/)
- [206. Reverse Linked List](./206-reverse-linked-list/)
- [707. Design Linked List](./707-design-linked-list/)
