import {maxArea} from "./11";

describe('11. Container with Most Water', () => {
  it('should be 6', () => {
    const height = [1,8,6];
    const expected = 6;
    const result = maxArea(height);

    expect(result).toBe(expected);
  });

  it("should be 1", () => {
    const height = [1, 1];
    const expected = 1;
    const result = maxArea(height);

    expect(result).toBe(expected);
  })

  it('should be 49', () => {
    const height = [1,8,6,2,5,4,8,3,7];
    const expected = 49;
    const result = maxArea(height);

    expect(result).toBe(expected);
  });

  it('should be 17', () => {
    const height = [2,3,4,5,18,17,6];
    const expected = 17;
    const result = maxArea(height);

    expect(result).toBe(expected);
  });
})
