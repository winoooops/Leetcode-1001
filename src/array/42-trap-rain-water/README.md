# Trap Rain Water - Monotonic Stack Approach

The Monotonic Stack approach is an efficient way to solve the "Trap Rain Water" problem with $O(N)$ time complexity and $O(N)$ space complexity.

## Key Concept

We maintain a **Monotonic Decreasing Stack**. This means the elements (indices) in the stack always correspond to heights that are in strictly decreasing order.

- **Why Decreasing?** As long as the heights are decreasing, we can't trap any water because water would spill out to the right.
- **When do we trap water?** When we encounter a height that is *taller* than the height at the top of the stack. This creates a "pit" or "valley" bounded by:
  - The current element (Right Boundary)
  - The element popped from the stack (The Bottom)
  - The new element at the top of the stack (Left Boundary)

## Algorithm

1. Iterate through the `height` array.
2. If the stack is empty or `height[current] <= height[stack.top]`, push the current index onto the stack.
3. If `height[current] > height[stack.top]`, we found a right boundary.
   - Pop the top element. This is the **bottom** of the pit.
   - If the stack becomes empty, break (no left boundary).
   - The new top of the stack is the **left boundary**.
   - Calculate trapped water:
     - `width = current_index - left_boundary_index - 1`
     - `bounded_height = min(height[current], height[left_boundary]) - height[bottom]`
     - `water = width * bounded_height`
   - Repeat step 3 until the condition is false.
4. Push the current index onto the stack.

## Example Trace: `[3, 2, 1, 3]`

Let's trace the algorithm with `height = [3, 2, 1, 3]`.

**Initialization:** `stack = []`, `result = 0`

### Step 1: Index `0`, Height `3`
- Stack is empty.
- **Action:** Push `0`.
- `stack`: `[0]` (Heights: `[3]`)

### Step 2: Index `1`, Height `2`
- `height[1] (2) < height[stack.top] (3)`.
- **Action:** Push `1`.
- `stack`: `[0, 1]` (Heights: `[3, 2]`)

### Step 3: Index `2`, Height `1`
- `height[2] (1) < height[stack.top] (2)`.
- **Action:** Push `2`.
- `stack`: `[0, 1, 2]` (Heights: `[3, 2, 1]`)

### Step 4: Index `3`, Height `3`
- `height[3] (3) > height[stack.top] (1)`. **Found a pit!**
- **Pop `2`** (Height `1`). This is the **bottom**.
- New Top: `1` (Height `2`). This is the **left boundary**.
- **Calculate Water:**
  - `width = 3 - 1 - 1 = 1`
  - `bounded_height = min(3, 2) - 1 = 1`
  - `water = 1 * 1 = 1`
  - `result += 1` (Total: `1`)
- `stack`: `[0, 1]` (Heights: `[3, 2]`)

- **Loop continues:** `height[3] (3) > height[stack.top] (2)`. **Found another pit!**
- **Pop `1`** (Height `2`). This is the **bottom**.
- New Top: `0` (Height `3`). This is the **left boundary**.
- **Calculate Water:**
  - `width = 3 - 0 - 1 = 2`
  - `bounded_height = min(3, 3) - 2 = 1`
  - `water = 2 * 1 = 2`
  - `result += 2` (Total: `3`)
- `stack`: `[0]` (Heights: `[3]`)

- **Loop continues:** `height[3] (3)` is not `> height[stack.top] (3)`.
- **Action:** Push `3`.
- `stack`: `[0, 3]`

**Final Result:** `3`

## Visualization

You can interact with the algorithm visualization here:
[Open Visualization](monotonic_stack_viz.html)
