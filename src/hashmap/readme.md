# Hash Map & Counting

Hash-based problems collapse disparate lookups to O(1). Decide early if you need a `Set` for uniqueness, a `Map` for counts/indices, or a canonical key (sorted string, tuple) to group permutations.

## Reasoning playbook

- Frequency tables answer equality/parity/anagram questions; clean keys avoid collisions.
- Two-pass workflows (count, then validate) keep code linear and easy to read.
- Use sets when presence is enough; use maps when values carry counts or metadata.

## Problems & notes

- [1. Two Sum](./1-two-sum/README.md)
- [49. Group Anagrams](./49-group-anagrams/README.md)
- [128. Longest Consecutive Sequence](./128-longest-consecutive-sequence/README.md)
- [202. Happy Number](./202-happy-number/README.md)
- [205. Isomorphic Strings](./205-isomorphic-strings/README.md)
- [219. Contains Duplicate II](./219-contains-duplicate-II/README.md)
- [242. Valid Anagram](./242-valid-anagram/README.md)
- [290. Word Pattern](./290-word-pattern/README.md)
- [383. Ransom Note](./383-ransom-note/README.md)
