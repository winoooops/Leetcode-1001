import {TreeNode} from "../TreeNode";
import {pathSumBFS, pathSumBackTracking, pathSumRecursion, pathSumDFS} from "./112";

describe("112. Path Sum", () => {
  describe("Recursion", () => {
    it("should be true", () => {
      const root = TreeNode.createTree([5,4,8,11,null,13,4,7,2,null,null,null,1]);
      const targetSum = 22;
      expect(pathSumRecursion(root, targetSum)).toBe(true);
    });

    it("should be false", () => {
      const root = TreeNode.createTree([]);
      const targetSum = 0;
      expect(pathSumRecursion(root, targetSum)).toBe(false);
    });

    it("should be false", () => {
      const root = TreeNode.createTree([1,2,3]);
      const targetSum = 5;
      expect(pathSumRecursion(root, targetSum)).toBe(false);
    });
  });

  describe("DFS with backtracking", () => {
    it("should be true", () => {
      const root = TreeNode.createTree([5,4,8,11,null,13,4,7,2,null,null,null,1]);
      const targetSum = 22;
      expect(pathSumBackTracking(root, targetSum)).toBe(true);
    });

    it("should be false", () => {
      const root = TreeNode.createTree([]);
      const targetSum = 0;
      expect(pathSumBackTracking(root, targetSum)).toBe(false);
    });

    it("should be false", () => {
      const root = TreeNode.createTree([1,2,3]);
      const targetSum = 5;
      expect(pathSumBackTracking(root, targetSum)).toBe(false);
    });
  });

  describe("BFS", () => {
    it("should be true", () => {
      const root = TreeNode.createTree([5,4,8,11,null,13,4,7,2,null,null,null,1]);
      const targetSum = 22;
      expect(pathSumBFS(root, targetSum)).toBe(true);
    });

    it("should be false", () => {
      const root = TreeNode.createTree([]);
      const targetSum = 0;
      expect(pathSumBFS(root, targetSum)).toBe(false);
    });

    it("should be false", () => {
      const root = TreeNode.createTree([1,2,3]);
      const targetSum = 5;
      expect(pathSumBFS(root, targetSum)).toBe(false);
    });
  });

  describe("DFS", () => {
    it("should be true", () => {
      const root = TreeNode.createTree([5,4,8,11,null,13,4,7,2,null,null,null,1]);
      const targetSum = 22;
      expect(pathSumDFS(root, targetSum)).toBe(true);
    });

    it("should be false", () => {
      const root = TreeNode.createTree([]);
      const targetSum = 0;
      expect(pathSumDFS(root, targetSum)).toBe(false);
    });

    it("should be false", () => {
      const root = TreeNode.createTree([1,2,3]);
      const targetSum = 5;
      expect(pathSumDFS(root, targetSum)).toBe(false);
    });
  });
});
