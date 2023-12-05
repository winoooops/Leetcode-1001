import {TreeNode} from "../TreeNode";
import {isSymmetricBFS, isSymmetricRecursion} from "./101";

describe('101. Symmetric Tree', () => {
  describe('BFS', () => {
    it('should be true', function () {
      const root = TreeNode.createTree([1, 2, 2, 3, 4, 4, 3]);
      expect(isSymmetricBFS(root)).toBe(true);
    });

    it("should be false", function () {
      const root = TreeNode.createTree([1, 2, 2, null, 3, null, 3]);
      expect(isSymmetricBFS(root)).toBe(false);
    });
  })

  describe("Recursion", () => {
    it('should be true', function () {
      const root = TreeNode.createTree([1, 2, 2, 3, 4, 4, 3]);
      expect(isSymmetricRecursion(root)).toBe(true);
    });

    it("should be false", function () {
      const root = TreeNode.createTree([1, 2, 2, null, 3, null, 3]);
      expect(isSymmetricRecursion(root)).toBe(false);
    });
  });
})
