# Array Patterns

Arrays reward local reasoning: keep passes O(n), avoid extra buffers unless prefix sums or difference arrays unlock the answer, and remember that reversing segments can simulate rotations without copying. When the data is or can be made monotonic, binary search (see `./techniques/binary-search/`) gives the tightest bounds.

## Reasoning playbook

- Prefer in-place rewrites with two pointers; stash aggregates (product, sum, diff) when independence holds.
- Translate range updates to prefix sums/differences; lean on greedy when decisions only need the next move.
- Use binary search once the decision boundary is monotonic (`left <= right` loop, bias mid to avoid overflow).

## Problems & notes

### Binary Search
> Binary search narrows the answer space by repeatedly halving a sorted domain.

> [Binary search cheat sheet](./techniques/binary-search/README.md)

**When to Reach For It**
- Arrays already sorted or can be reasoned with monotonic predicate (e.g. `check(x)` switches from false to true once).
- You need `O(log n)` lookups rather than scanning linearly.
- “Find first/last occurrence”, “search insert position”, or “min time satisfying condition” patterns.


### Two Pointers & Iterations
- [189. Rotate Array](./189-rotate-array/README.md)
- [238. Product of Array Except Self](./238-product-except-self/README.md)

### Ordering 
- [274. H-Index](./274-h-index/README.md)
- [380. Insert Delete GetRandom O(1)](./380-random-set/README.md)


### Greedy Algorithm
- [134. Gas Station](./134-gas-station/README.md)
- [55. Jump Game I](./jump-games/55-jump-games-I/README.md)
- [45. Jump Game II](./jump-games/45-jump-games-II/README.md)
- [121. Best Time to Buy and Sell Stock I](./buy-stock/121-best-time-to-buy-and-sell-stock-I/README.md)
- [122. Best Time to Buy and Sell Stock II](./buy-stock/122-best-time-to-buy-and-sell-stock-II/README.md)
- [123. Best Time to Buy and Sell Stock III](./buy-stock/123-best-time-to-buy-and-sell-stock-III/README.md)
- [188. Best Time to Buy and Sell Stock IV](./buy-stock/188-best-time-to-buy-and-sell-stock-IV/README.md)

### Dynamic Programming
- [121. Best Time to Buy and Sell Stock I](./buy-stock/121-best-time-to-buy-and-sell-stock-I/README.md)
- [122. Best Time to Buy and Sell Stock II](./buy-stock/122-best-time-to-buy-and-sell-stock-II/README.md)
- [123. Best Time to Buy and Sell Stock III](./buy-stock/123-best-time-to-buy-and-sell-stock-III/README.md)
- [188. Best Time to Buy and Sell Stock IV](./buy-stock/188-best-time-to-buy-and-sell-stock-IV/README.md)
