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

- [14. LCP](./14-longest-common-prefix/README.md)

**When to Reach For It**
- Arrays already sorted or can be reasoned with monotonic predicate (e.g. `check(x)` switches from false to true once).
- You need `O(log n)` lookups rather than scanning linearly.
- “Find first/last occurrence”, “search insert position”, or “min time satisfying condition” patterns.

### Two Pointers & Iterations
- [238. Product of Array Except Self](./238-product-except-self/README.md)
- [135. Candy](./135-candy/README.md)
- [14. LCP](./14-longest-common-prefix/README.md)

### Recursion
- [14. LCP](./14-longest-common-prefix/README.md)

### Ordering 
- [189. Rotate Array](./189-rotate-array/README.md)
- [274. H-Index](./274-h-index/README.md)
- [380. Insert Delete GetRandom O(1)](./380-random-set/README.md)
- [13. Roman To Integer](./13-roman-to-int/README.md)
- [12. Integer to Roman](./12-int-to-roman/README.md)
- [58. length of last word](./58-length-of-last-word/README.md)
- [151. reverse words in a string](./151-reverse-words-in-a-string/README.md)
- [6. zigzag conversion](./6-zigzag-conversion/README.md)


### Greedy Algorithm
- [134. Gas Station](./134-gas-station/README.md)
- [55. Jump Game I](./jump-games/55-jump-games-I/README.md)
- [45. Jump Game II](./jump-games/45-jump-games-II/README.md)
- [121. Best Time to Buy and Sell Stock I](./buy-stock/121-best-time-to-buy-and-sell-stock-I/README.md)
- [122. Best Time to Buy and Sell Stock II](./buy-stock/122-best-time-to-buy-and-sell-stock-II/README.md)
- [123. Best Time to Buy and Sell Stock III](./buy-stock/123-best-time-to-buy-and-sell-stock-III/README.md)
- [188. Best Time to Buy and Sell Stock IV](./buy-stock/188-best-time-to-buy-and-sell-stock-IV/README.md)
- [135. Candy](./135-candy/README.md)

### Dynamic Programming
- [121. Best Time to Buy and Sell Stock I](./buy-stock/121-best-time-to-buy-and-sell-stock-I/README.md)
- [122. Best Time to Buy and Sell Stock II](./buy-stock/122-best-time-to-buy-and-sell-stock-II/README.md)
- [123. Best Time to Buy and Sell Stock III](./buy-stock/123-best-time-to-buy-and-sell-stock-III/README.md)
- [188. Best Time to Buy and Sell Stock IV](./buy-stock/188-best-time-to-buy-and-sell-stock-IV/README.md)

### Monotonic Stack
- [42. Trap Rain Water](./42-trap-rain-water/README.md)
