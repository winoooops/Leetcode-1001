import {TreeNode} from "../TreeNode";
import {maxDepthBFS, maxDepthDFS} from "./104";

describe('104. Maximum Depth of Binary Tree', () => {
  describe('DFS', () => {
    it("should be 3", () => {
      const root = TreeNode.createTree([3,9,20,null,null,15,7])
      expect(maxDepthDFS(root)).toBe(3);
    })

    it("should be 2", () => {
      const root = TreeNode.createTree([1,null,2]);
      expect(maxDepthDFS(root)).toBe(2);
    })
  });

  describe("BFS", () => {
    it("should be 3", () => {
      const root = TreeNode.createTree([3,9,20,null,null,15,7])
      expect(maxDepthBFS(root)).toBe(3);
    })

    it("should be 2", () => {
      const root = TreeNode.createTree([1,null,2]);
      expect(maxDepthBFS(root)).toBe(2);
    })
  })
})
