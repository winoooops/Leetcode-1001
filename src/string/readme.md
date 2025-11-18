# String Transformations

Most of these skew toward array/two-pointer logic, but they live here because the solutions treat strings as character arrays: reverse segments, compress runs, or remove duplicates in place. Keep conversions minimal—work on `string[]` or indexable `chars` when repeated replacements are needed.

## Reasoning playbook

- Convert to arrays when repeated mutations are required; join at the end.
- Two-pointer scans (`left/right`, `read/write`) let you remove duplicates or overwrite values without extra space.
- For run-length encoding or majority voting, maintain counters that summarize the processed prefix.

## Problems & notes

- [27. Remove Element](./27-remove-element/)
- [26. Remove Duplicates from Sorted Array I](./remove-duplicates/26-remove-duplicates-I/)
- [80. Remove Duplicates from Sorted Array II](./remove-duplicates/80-remove-duplicates-II/)
- [88. Merge Sorted Array](./88-merge-sorted-array/)
- [169. Majority Element](./169-majority-element/)
- [Replacing spaces (two-pointer walkthrough)](./philosophy/two-pointers/replacing-spaces/)
- [Run-Length Encoding basics](./RLE/)
