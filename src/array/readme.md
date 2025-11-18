# Array Patterns

Arrays reward local reasoning: keep passes O(n), avoid extra buffers unless prefix sums or difference arrays unlock the answer, and remember that reversing segments can simulate rotations without copying. When the data is or can be made monotonic, binary search (see `./techniques/binary-search/`) gives the tightest bounds.

## Reasoning playbook

- Prefer in-place rewrites with two pointers; stash aggregates (product, sum, diff) when independence holds.
- Translate range updates to prefix sums/differences; lean on greedy when decisions only need the next move.
- Use binary search once the decision boundary is monotonic (`left <= right` loop, bias mid to avoid overflow).

## Problems & notes

- [45. Jump Game II](./jump-games/45-jump-games-II/)
- [55. Jump Game I](./jump-games/55-jump-games-I/)
- [121. Best Time to Buy and Sell Stock I](./buy-stock/121-best-time-to-buy-and-sell-stock-I/)
- [122. Best Time to Buy and Sell Stock II](./buy-stock/122-best-time-to-buy-and-sell-stock-II/)
- [123. Best Time to Buy and Sell Stock III](./buy-stock/123-best-time-to-buy-and-sell-stock-III/)
- [188. Best Time to Buy and Sell Stock IV](./buy-stock/188-best-time-to-buy-and-sell-stock-IV/)
- [189. Rotate Array](./189-rotate-array/)
- [238. Product of Array Except Self](./238-product-except-self/)
- [274. H-Index](./274-h-index/)
- [380. Insert Delete GetRandom O(1)](./380-random-set/)
- [Binary search cheat sheet](./techniques/binary-search/)
