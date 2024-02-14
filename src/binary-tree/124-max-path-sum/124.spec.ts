import {maxPathSum, maxPathSumDP} from "./124";
import {TreeNode} from "../TreeNode";

describe('124. Binary Tree Maximum Path Sum', () => {
  describe("Recursion", () => {
    it("should return 6", () => {
      const root = TreeNode.createTree([1, 2, 3]);
      expect(maxPathSum(root)).toBe(6);
    });

    it("should return 42", () => {
      const root = TreeNode.createTree([-10, 9, 20, null, null, 15, 7]);
      expect(maxPathSum(root)).toBe(42);
    });
  });

  describe("Tree Traversal", () => {
    it("should return 6", () => {
      const root = TreeNode.createTree([1, 2, 3]);
      expect(maxPathSumDP(root)).toBe(6);
    });

    it("should return 42", () => {
      const root = TreeNode.createTree([-10, 9, 20, null, null, 15, 7]);
      expect(maxPathSumDP(root)).toBe(42);
    });
  });
});
