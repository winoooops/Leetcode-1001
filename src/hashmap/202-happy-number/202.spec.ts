import {isHappy, squareSum} from "./202";

describe('202. Happy Number', () => {
  describe('Check Square Root', () => {
    it('should be 82', function () {
      expect(squareSum(19)).toBe(82);
    });

    it('should be 4', function () {
      expect(squareSum(2)).toBe(4);
    });
  })

  describe('is valid happy number', () => {
    it('should be true', function () {
      expect(isHappy(19)).toBe(true);
    });

    it('should be false', function () {
      expect(isHappy(2)).toBe(false);
    });
  })
})
