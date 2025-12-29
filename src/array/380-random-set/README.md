# 380. Insert Delete GetRandom O(1)

Design a data structure that supports `insert`, `remove`, and `getRandom` in average O(1) time.

## Example

```
Input
["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]
[[],[1],[2],[2],[],[1],[2],[]]

Output
[null,true,false,true,2,true,true,2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // returns true because 1 was added
randomizedSet.remove(2); // returns false because 2 was not present
randomizedSet.insert(2); // returns true
randomizedSet.getRandom(); // returns either 1 or 2 with equal probability
randomizedSet.remove(1); // returns true
randomizedSet.insert(2); // returns false because 2 already exists
randomizedSet.getRandom(); // returns 2 with probability 1
```

## Solution

The only way to keep `getRandom` in O(1) is to store values in a dense array so we can pick a random index. Arrays already give O(1) appends and random access, but deleting an arbitrary value is O(n). A hash map gives O(1) existence checks and deletions, but does not support uniform random access across its keys. Combining both structures solves every requirement:

- `values: number[]` holds all elements without gaps so `getRandom` can sample an index uniformly.
- `indices: Map<number, number>` records the array index of every stored value so we can locate it in O(1).

### Operations

1. **Insert**
   - If the value exists in `indices`, return `false`.
   - Otherwise push it onto `values`, record its position in `indices`, and return `true`.

2. **Remove**
   - Look up the value’s index in `indices`. If missing, return `false`.
   - Swap the value with the last element in `values`, update the moved element’s index in `indices`, pop the array, delete the value from `indices`, and return `true`.
   - Swapping keeps the array dense so `getRandom` remains uniform while deletion stays O(1).

3. **getRandom**
   - Pick a random integer `i` in `[0, values.length)` and return `values[i]`.

All operations run in average O(1) time and O(n) space where n is the number of stored values.
