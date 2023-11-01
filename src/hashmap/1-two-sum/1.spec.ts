import {twoSumOne, twoSumThree, twoSumTwo} from "./1";

describe('1. Two Sum', () => {
  it('should be [0,1]', function () {
    const nums = [2,7,11,15];
    const target = 9;

    expect(twoSumOne(nums, target)).toEqual(expect.arrayContaining([0, 1]));
    expect(twoSumTwo(nums, target)).toEqual(expect.arrayContaining([0, 1]));
    expect(twoSumThree(nums, target)).toEqual(expect.arrayContaining([0, 1]));
  });

  it('should be [1,2]', function () {
    const nums = [3,2,4];
    const target = 6;

    expect(twoSumOne(nums, target)).toEqual(expect.arrayContaining([1, 2]));
    expect(twoSumTwo(nums, target)).toEqual(expect.arrayContaining([1, 2]));
    expect(twoSumThree(nums, target)).toEqual(expect.arrayContaining([1, 2]));
  });

  it('should be [0, 1]', function () {
    const nums = [3,3];
    const target = 6;

    expect(twoSumOne(nums, target)).toEqual(expect.arrayContaining([0, 1]));
    expect(twoSumTwo(nums, target)).toEqual(expect.arrayContaining([0, 1]));
    expect(twoSumThree(nums, target)).toEqual(expect.arrayContaining([0, 1]));
  });
})
