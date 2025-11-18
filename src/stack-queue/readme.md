# Stack & Queue Utilities

Stacks (FILO) and queues (FIFO) model expression parsing, backtracking, and history navigation. Use arrays as stacks, and emulate queues with circular buffers or two stacks when necessary.

## Reasoning playbook

- Push on opening tokens and pop on matching closers; keep a map of pairs for clarity.
- Evaluate expressions by using stacks for operands/operators and handling precedence explicitly.
- Simulate queue behavior (for BFS or caches) with arrays or linked lists when built-in queues are unavailable.

## Problems & notes

- [20. Valid Parentheses](./20-valid-parentheses/README.md)
- [71. Simplify Path](./71-simplify-path/README.md)
- [150. Evaluate Reverse Polish Notation](./150-Evaluate-Reverse-Polish-Notation/README.md)
- [155. Min Stack](./155-min-stack/README.md)
- [224. Basic Calculator](./224-basic-calculator/README.md)
