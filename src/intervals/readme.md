# Interval Scheduling

Interval problems reward sorting by start time and tracking the active window. When merges or insertions are required, keep a pointer to the previously resolved interval before consuming the current one.

## Reasoning playbook

- Sort by start (and end as a tiebreaker), then sweep once.
- For insertions, append everything before the overlap, merge the overlap, then append the rest.
- For greedy removals, keep the tightest end boundary that still satisfies the constraint.

## Problems & notes

- [56. Merge Intervals](./56-merge-intervals/README.md)
- [57. Insert Interval](./57/README.md)
- [228. Summary Ranges](./228-summary-ranges/README.md)
- [452. Minimum Number of Arrows to Burst Balloons](./452-min-arrows-burst-balloons/README.md)
