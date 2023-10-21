import {threeSum} from "./15";

describe('15. 3Sum', () => {
  it('should be [-1,-1,2] and [-1,0,1]', function () {
    const numbers = [-1,0,1,2,-1,-4];
    const expected = [[-1,-1,2],[-1,0,1]]
    const result = threeSum(numbers);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('should be []', function () {
    const numbers = [0,1,1];
    const result = threeSum(numbers);
    expect(result).toHaveLength(0);
  });

  it('should be [0, 0, 0]', function () {
    const numbers = [0,0,0];
    const result = threeSum(numbers);
    const expected = [[0,0,0]]
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('should be [-1,-1,2] and [-1,0,1]', function () {
    const numbers =  [-1,0,1,2,-1,-4];
    const expected: number[][] = [[-1,-1,2],[-1,0,1]];

    const result = threeSum(numbers);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it("should also be [0, 0, 0]", () => {
    const numbers = [0, 0, 0, 0];
    const expected: number[][] = [[0,0,0]];

    const result = threeSum(numbers);
    expect(result).toEqual(expect.arrayContaining(expected));
  })
})
