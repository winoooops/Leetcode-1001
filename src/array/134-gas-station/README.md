# 134. Gas Station

Given two arrays `gas` and `cost`, where `gas[i]` is the fuel available at
station `i` and `cost[i]` is the fuel needed to drive to the next station,
return the index of the station from which a complete circuit is possible.
Return `-1` if there is no valid starting point.

## Intuition

The only information that matters at each step is the net fuel change
`gas[i] - cost[i]`. While scanning the circle, maintain the current tank level.
When the tank ever drops below zero, no station between the current start and
`i` can be the answer, because we would run out of gas at `i`. Therefore the
next station (`i + 1`) becomes the earliest feasible starting point.

Another observation: if the sum of all net fuel changes is negative, the car
can never finish the loop no matter where it starts.

## Approach

1. Keep three variables:
   - `tank`: fuel leftover from the current tentative start to the current
     station.
   - `total`: global sum of `gas[i] - cost[i]` to detect impossible cases.
   - `startPos`: index of the current tentative start.
2. Iterate once over the stations. Add the net fuel change to both `tank` and
   `total`.
3. Whenever `tank < 0`, reset `tank` to zero and set `startPos = i + 1`
   because any earlier start would also fail at station `i`.
4. After the loop, return `-1` if `total < 0`; otherwise return `startPos`.

```ts
export function canCompleteCircuit(gas: number[], cost: number[]) {
  let tank = 0;
  let total = 0;
  let startPos = 0;

  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    total += gas[i] - cost[i];

    if (tank < 0) {
      startPos = i + 1;
      tank = 0;
    }
  }

  if (total < 0) return -1;
  return startPos;
}
```

### Example

`gas = [1, 2, 3, 4, 5]`, `cost = [3, 4, 5, 1, 2]`

| i | gas[i] | cost[i] | tank change | tank | startPos |
| - | ------ | ------- | ----------- | ---- | -------- |
| 0 | 1      | 3       | -2          | 0    | 1        |
| 1 | 2      | 4       | -2          | 0    | 2        |
| 2 | 3      | 5       | -2          | 0    | 3        |
| 3 | 4      | 1       | +3          | 3    | 3        |
| 4 | 5      | 2       | +3          | 6    | 3        |

The car can finish the circuit starting at station `3`.

When `gas = [2, 3, 4]` and `cost = [3, 4, 3]`, the sum of net changes is `-1`,
so no tour is possible and the function returns `-1`.

## Complexity

- Time: `O(n)` — single pass through the stations.
- Space: `O(1)` — only a few counters.
