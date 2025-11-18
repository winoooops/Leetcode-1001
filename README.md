# Algorithms 1001 Nights
![1001-nights](static/img/1001.jpg)

> A thousand tiny steps turn into LC legend!

this repo records each step as a solution so the grind eventually makes you the algorithm sage you’re chasing. Every `src/<topic>` folder carries a guide plus implementations and Jest specs, letting you move from idea to proof without pausing to hunt for context.

## Repository layout

- `src/<topic>/<problem-id-name>/`: Source, Jest spec, and optional notes for each puzzle (e.g. `src/array/189-rotate-array/189.ts`).
- `src/<topic>/readme.md`: Topic playbook that explains the approach for that data structure/question type.
- `build/src/...`: Generated JavaScript after `npm run compile`. Never edit the build artifacts directly.
- `static/`: Diagrams and supporting material such as `static/img/binary-tree/review.png`.
- Scripts: `npm run compile` (tsc to `build/`), `npm run test` (compile + Jest + lint), `npm run lint` (gts checks), and `npm run fix` (auto-format).

## Topic guides

- [Array patterns](./src/array/readme.md)
- [Binary search tree flow](./src/binary-search-tree/readme.md)
- [Binary tree traversals](./src/binary-tree/readme.md)
- [Hash map & counting](./src/hashmap/readme.md)
- [Interval scheduling](./src/intervals/readme.md)
- [Linked list mechanics](./src/linked-list/readme.md)
- [Matrix simulation](./src/matrix/readme.md)
- [Sliding window control](./src/sliding-window/readme.md)
- [Stack & queue utilities](./src/stack-queue/readme.md)
- [String transformations](./src/string/readme.md)
- [Two-pointer drills](./src/two-pointers/readme.md)

## Learning workflow

- Pick a problem, open its folder under `src/<topic>/<problem-id-name>/`, and read the topic guide in `src/<topic>/readme.md`.
- Implement or update the solution in `<id>.ts` with the recommended pattern (two pointers, BFS, etc.).
- Keep changes type-safe: `npm run compile` surfaces TypeScript errors even before running tests.
- When exploring new ideas, capture strategy notes in a local `README.md` inside the problem folder.

## Adding or updating unit tests

1. In `src/<topic>/<problem-id-name>/`, locate the existing `<id>.spec.ts` or create a new one beside the solution file.
2. Import the exported function(s) from `<id>.ts`.
3. Use Jest `describe` blocks named after the problem and include `it` cases for happy paths, edge cases, and regressions.
4. Run `npm run test -- <pattern>` to focus on a single spec or `npm run test` for the full suite.
