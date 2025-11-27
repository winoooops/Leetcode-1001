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
> Lightweight state machines that sweep once while keeping just enough context (a window, pair, or aggregate) in hand.

**Technique cues**
- Anchor two indices (`left/right`, `slow/fast`) so an invariant stays true; move whichever side breaks it.
- Favor a single pass that stitches prefix and suffix info instead of allocating helper arrays.
- [238. Product of Array Except Self](./238-product-except-self/README.md)
- [135. Candy](./135-candy/README.md)
- [14. LCP](./14-longest-common-prefix/README.md)

### Recursion
> Break the array into self-similar pieces (divide and conquer) when the combination logic is simpler than iterative bookkeeping.

**Technique cues**
- Push parameters that fully describe a subarray; let the call stack substitute explicit stacks.
- Memoize when overlapping ranges appear, otherwise ensure tail recursion or convert to iteration to avoid depth issues.
- [14. LCP](./14-longest-common-prefix/README.md)

### Ordering 
> Problems that hinge on relative orderings—sorting, reversing, canonicalizing—before simpler logic applies.

**Technique cues**
- Normalize the sequence (sort, count sort, reverse segments) to expose monotonic structure.
- Beware of destructive operations; copy only when order sensitivity prevents in-place tricks.
- [189. Rotate Array](./189-rotate-array/README.md)
- [274. H-Index](./274-h-index/README.md)
- [380. Insert Delete GetRandom O(1)](./380-random-set/README.md)
- [13. Roman To Integer](./13-roman-to-int/README.md)
- [12. Integer to Roman](./12-int-to-roman/README.md)
- [58. length of last word](./58-length-of-last-word/README.md)
- [151. reverse words in a string](./151-reverse-words-in-a-string/README.md)
- [6. zigzag conversion](./6-zigzag-conversion/README.md)


### Greedy Algorithm
> Make the locally optimal decision at each step when future choices only depend on current state, not the path taken.

**Technique cues**
- Track the minimal summary of history (current profit, farthest reach) and discard the rest.
- Prove correctness via exchange arguments or maintaining that the invariant is always optimal so far.
- [134. Gas Station](./134-gas-station/README.md)
- [55. Jump Game I](./jump-games/55-jump-games-I/README.md)
- [45. Jump Game II](./jump-games/45-jump-games-II/README.md)
- [121. Best Time to Buy and Sell Stock I](./buy-stock/121-best-time-to-buy-and-sell-stock-I/README.md)
- [122. Best Time to Buy and Sell Stock II](./buy-stock/122-best-time-to-buy-and-sell-stock-II/README.md)
- [123. Best Time to Buy and Sell Stock III](./buy-stock/123-best-time-to-buy-and-sell-stock-III/README.md)
- [188. Best Time to Buy and Sell Stock IV](./buy-stock/188-best-time-to-buy-and-sell-stock-IV/README.md)
- [135. Candy](./135-candy/README.md)

### Dynamic Programming
> Cache answers to subproblems when each decision depends on overlapping ranges or time steps.

**Technique cues**
- Define `dp[i]` (or `dp[i][k]`) to encode just enough history; roll arrays when transitions only touch recent states.
- Translate stock-style problems into “hold vs sell” states, or generalize to `k` transactions.
- [121. Best Time to Buy and Sell Stock I](./buy-stock/121-best-time-to-buy-and-sell-stock-I/README.md)
- [122. Best Time to Buy and Sell Stock II](./buy-stock/122-best-time-to-buy-and-sell-stock-II/README.md)
- [123. Best Time to Buy and Sell Stock III](./buy-stock/123-best-time-to-buy-and-sell-stock-III/README.md)
- [188. Best Time to Buy and Sell Stock IV](./buy-stock/188-best-time-to-buy-and-sell-stock-IV/README.md)

### Monotonic Stack
> Maintain a stack whose elements stay increasing/decreasing so the next item immediately reveals the previous greater/smaller neighbor.

**Technique cues**
- Push indices, not values, so you can compute widths or areas when popping.
- Append sentinels (0 or `Infinity`) to flush the stack once the scan completes.
- [42. Trap Rain Water](./42-trap-rain-water/README.md)
