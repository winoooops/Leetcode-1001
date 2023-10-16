import {minSubArrayLen, minSubArrayLen2} from "./209";

describe('209. Minimum Size Subarray Sum', () => {
  it('should be 2', () => {
    const result = minSubArrayLen(7, [2,3,1,2,4,3]);
    const result2 = minSubArrayLen2(7, [2,3,1,2,4,3]);

    const expected = 2;
    expect(result).toBe(expected);
    expect(result2).toBe(expected);
  });

  it('should be 1', () => {
    const result = minSubArrayLen(4, [1,4,4]);
    const result2 = minSubArrayLen2(4, [1,4,4]);
    const expected = 1;
    expect(result).toBe(expected);
    expect(result2).toBe(expected);
  });

  it('should be 0', () => {
    const result = minSubArrayLen(11, [1,1,1,1,1,1,1,1]);
    const result2 = minSubArrayLen2(11, [1,1,1,1,1,1,1,1]);
    const expected = 0;
    expect(result).toBe(expected);
    expect(result2).toBe(expected);
  });

  it('should be 3', () => {
    const result = minSubArrayLen(11, [1,2,3,4,5]);
    const result2 = minSubArrayLen2(11, [1,2,3,4,5]);
    const expected = 3;
    expect(result).toBe(expected);
    expect(result2).toBe(expected);
  });
})
