# Matrix Simulation

Matrix questions shift row/column boundaries across loops. Walk layers from the outside inward, store deltas rather than whole boards when possible, and rely on direction arrays to avoid duplicated logic.

## Reasoning playbook

- Track top/bottom/left/right bounds for spiral or rotation tasks.
- Encode direction vectors `(dx, dy)` to iterate neighbors uniformly.
- Use copies only when the rules depend on previous states (Game of Life); otherwise modify in place.

## Problems & notes

- [36. Valid Sudoku](./36-valid-sudoku/README.md)
- [37. Sudoku Solver](./37-sudoku-solver/README.md)
- [48. Rotate Image](./48-rotate-image/README.md)
- [54. Spiral Matrix](./54-spiral-matrix/README.md)
- [73. Set Matrix Zeroes](./73-matrix-zeros/README.md)
- [289. Game of Life](./289-game-of-life/README.md)
