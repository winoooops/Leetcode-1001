import {twoSum} from "./167";

describe('167. Two Sum II', () => {
  it('should be [1, 2]', function () {
    const numbers = [2,7,11,15];
    const target = 9;
    const indices = twoSum(numbers, target);
    expect(indices).toEqual(expect.arrayContaining([1,2]));
  });

  it('should be [1, 2]', function () {
    const numbers = [2,7,11,15];
    const target = 9;
    const indices = twoSum(numbers, target);
    expect(indices).toEqual(expect.arrayContaining([1,2]));
  });

  it('should be [1, 3]', function () {
    const numbers = [2,3,4];
    const target = 6;
    const indices = twoSum(numbers, target);
    expect(indices).toEqual(expect.arrayContaining([1,3]));
  });

  it('should be [1, 2]', function () {
    const numbers = [-1,0];
    const target = -1;
    const indices = twoSum(numbers, target);
    expect(indices).toEqual(expect.arrayContaining([1,2]));
  });
})
