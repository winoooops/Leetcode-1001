# Sliding Window Control

Sliding-window problems track a range `[left, right]` while maintaining counts or constraints. Grow the right edge greedily, then shrink from the left as soon as the constraint is satisfied to keep the window minimal.

## Reasoning playbook

- Use maps/arrays for character counts and decrement as you slide.
- Guard while-loops to shrink the window until the invariant is satisfied again.
- For fixed-size concatenations, precompute the word length and step the window in those increments.

## Problems & notes

- [3. Longest Substring Without Repeating Characters](./3-longest-substring-without-repeating/README.md)
- [30. Substring with Concatenation of All Words](./30-substring-concatenation/README.md)
- [76. Minimum Window Substring](./76-min-window-substring/README.md)
- [209. Minimum Size Subarray Sum](./209-minimum-subarray-sum/README.md)
