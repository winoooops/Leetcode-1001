import {TreeNode} from "../TreeNode";
import {countNodesBFS, countNodesDFS, countNodesRecursion} from "./222";

describe("222. Count Nodes", () => {
  describe("recursion", () => {
    it("should return 6", () => {
      const root = TreeNode.createTree([1,2,3,4,5,6])
      expect(countNodesRecursion(root)).toBe(6);
    });

    it("should return 0", () => {
      expect(countNodesRecursion(null)).toBe(0);
    });
  });

  describe("DFS", () => {
    it("should return 6", () => {
      const root = TreeNode.createTree([1,2,3,4,5,6])
      expect(countNodesDFS(root)).toBe(6);
    });

    it("should return 0", () => {
      expect(countNodesDFS(null)).toBe(0);
    });
  });

  describe("BFS", () => {
    it("should return 6", () => {
      const root = TreeNode.createTree([1,2,3,4,5,6])
      expect(countNodesBFS(root)).toBe(6);
    });

    it("should return 0", () => {
      expect(countNodesBFS(null)).toBe(0);
    });
  })
})
