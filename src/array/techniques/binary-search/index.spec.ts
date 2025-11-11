import {binarySearch} from './index';

describe('Binary Search Technique', () => {
  it('returns index when value exists', () => {
    const arr = [1, 3, 5, 7, 9];
    expect(binarySearch(arr, 7)).toBe(3);
  });

  it('returns -1 for absent values', () => {
    const arr = [2, 4, 6, 8, 10];
    expect(binarySearch(arr, 7)).toBe(-1);
  });

  it('handles duplicate targets by returning any valid index', () => {
    const arr = [1, 2, 2, 2, 5];
    const idx = binarySearch(arr, 2);
    expect(idx).toBeGreaterThanOrEqual(1);
    expect(idx).toBeLessThanOrEqual(3);
  });

  it('works with single-element arrays', () => {
    expect(binarySearch([42], 42)).toBe(0);
    expect(binarySearch([42], -10)).toBe(-1);
  });

  it('handles empty arrays gracefully', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });
});
