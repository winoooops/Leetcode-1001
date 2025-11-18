# Hash Map & Counting

Hash-based problems collapse disparate lookups to O(1). Decide early if you need a `Set` for uniqueness, a `Map` for counts/indices, or a canonical key (sorted string, tuple) to group permutations.

## Reasoning playbook

- Frequency tables answer equality/parity/anagram questions; clean keys avoid collisions.
- Two-pass workflows (count, then validate) keep code linear and easy to read.
- Use sets when presence is enough; use maps when values carry counts or metadata.

## Problems & notes

- [1. Two Sum](./1-two-sum/)
- [49. Group Anagrams](./49-group-anagrams/)
- [128. Longest Consecutive Sequence](./128-longest-consecutive-sequence/)
- [202. Happy Number](./202-happy-number/)
- [205. Isomorphic Strings](./205-isomorphic-strings/)
- [219. Contains Duplicate II](./219-contains-duplicate-II/)
- [242. Valid Anagram](./242-valid-anagram/)
- [290. Word Pattern](./290-word-pattern/)
- [383. Ransom Note](./383-ransom-note/)
