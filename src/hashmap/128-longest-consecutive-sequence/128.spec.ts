import {solutionOne, solutionThree, solutionTwo} from "./128";

describe('128. Longest Consecutive Number', () => {
  describe('using hashmap with sort', () => {
    it('should be 4', function () {
      const nums = [100, 4, 200, 1, 3, 2];
      expect(solutionOne(nums)).toBe(4);
    });

    it('should be 9', function () {
      const nums = [0,3,7,2,5,8,4,6,0,1];
      expect(solutionOne(nums)).toBe(9);
    });

    it('should be 0', function () {
      const nums = [0];
      expect(solutionOne(nums)).toBe(1);
    });

    it('should be 0', function () {
      const nums:number[] = [];
      expect(solutionOne(nums)).toBe(0);
    });
  })

  describe('using hashmap', () => {
    it('should be 4', function () {
      const nums = [100, 4, 200, 1, 3, 2];
      expect(solutionTwo(nums)).toBe(4);
    });

    it('should be 9', function () {
      const nums = [0,3,7,2,5,8,4,6,0,1];
      expect(solutionTwo(nums)).toBe(9);
    });

    it('should be 0', function () {
      const nums = [0];
      expect(solutionTwo(nums)).toBe(1);
    });

    it('should be 0', function () {
      const nums:number[] = [];
      expect(solutionTwo(nums)).toBe(0);
    });
  })

  describe('using dp', () => {
    it('should be 4', function () {
      const nums = [100, 4, 200, 1, 3, 2];
      expect(solutionThree(nums)).toBe(4);
    });

    it('should be 9', function () {
      const nums = [0,3,7,2,5,8,4,6,0,1];
      expect(solutionThree(nums)).toBe(9);
    });

    it('should be 0', function () {
      const nums = [0];
      expect(solutionThree(nums)).toBe(1);
    });

    it('should be 0', function () {
      const nums:number[] = [];
      expect(solutionThree(nums)).toBe(0);
    });
  })

})
