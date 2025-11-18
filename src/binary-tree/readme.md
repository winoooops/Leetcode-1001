# Binary Tree Traversals

Binary tree problems split between depth-first recursion (pre/in/post order) and breadth-first sweeps. Annotate each recursion with `(node, parent, depth, state)` and guard `null` before touching child pointers. The diagram in `../../static/img/binary-tree/review.png` summarizes the traversal orders covered here.

## Reasoning playbook

- DFS: pass depth/path sums in arguments; return aggregates for height, diameter, or path sums.
- BFS: queue by level to respect ordering (level order, zigzag, averages, right-side view).
- Use helper closures to preserve captured arrays instead of relying on global state.

## Problems & notes

- [100. Same Tree](./100-same-tree/)
- [101. Symmetric Tree](./101-symmetric-tree/)
- [102. Binary Tree Level Order Traversal](./102-level-order/)
- [103. Binary Tree Zigzag Level Order Traversal](./103-zigzag-level-order/)
- [104. Maximum Depth of Binary Tree](./104-maximum-depth-binary-tree/)
- [105. Construct Binary Tree from Preorder and Inorder Traversal](./105-build-tree/)
- [106. Construct Binary Tree from Inorder and Postorder Traversal](./106-build-tree/)
- [112. Path Sum](./112-path-sum/)
- [114. Flatten Binary Tree to Linked List](./114-flatten-binary-tree/)
- [117. Populating Next Right Pointers in Each Node II](./117-populate-right-pointer/)
- [124. Binary Tree Maximum Path Sum](./124-max-path-sum/)
- [129. Sum Root to Leaf Numbers](./129-sum-root-numbers/)
- [199. Binary Tree Right Side View](./199/)
- [222. Count Complete Tree Nodes](./222-count-nodes/)
- [226. Invert Binary Tree](./226-invert-binary-tree/)
- [236. Lowest Common Ancestor of a Binary Tree](./236-lowest-common-ancester/)
- [637. Average of Levels in Binary Tree](./637-average-levels/)
