import {merge} from './88';

describe('88. Merge Sorted Array', () => {
  it('should be [1,2,2,3,5,6]', () => {
    const nums1: number[] = [1, 2, 3, 0, 0, 0];
    const nums2: number[] = [2, 5, 6];
    merge(nums1, 3, nums2, 3);

    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it('should be [1]', () => {
    const nums1: number[] = [1];
    const nums2: number[] = [];
    merge(nums1, 1, nums2, 0);

    expect(nums1).toEqual([1]);
  });

  it('should be [1]', () => {
    const nums1: number[] = [0];
    const nums2: number[] = [1];
    merge(nums1, 0, nums2, 1);

    expect(nums1).toEqual([1]);
  });
});
