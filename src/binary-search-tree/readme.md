# Binary Search Tree Flow

BST problems hinge on the sorted invariant: in-order traversal yields sorted values, while ancestor lookups reduce to comparing against the current node during a search.

## Reasoning playbook

- Traverse in-order whenever you need sorted output, minimum differences, or cumulative sums.
- Maintain explicit stacks or iterators when traversal needs to be interleaved with other work.
- Bound recursion depth by tree height; iterative traversal avoids blowing the call stack on skewed trees.

## Problems & notes

- [173. Binary Search Tree Iterator](./173-bst-iterator/README.md)
- [530. Minimum Absolute Difference in BST](./530-minimal-differences/README.md)
