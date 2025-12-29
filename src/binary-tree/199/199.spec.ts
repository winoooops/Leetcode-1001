import {TreeNode} from "../TreeNode";
import {rightSideViewBFS, rightSideViewDFS} from "./199";

describe('199. Binary Tree Right Side View', () => {
  describe('BFS', () => {
    it('should be [1,3,4]', () => {
      const root = TreeNode.createTree([1,2,3,null,5,null,4]);
      expect(rightSideViewBFS(root)).toEqual(expect.arrayContaining([1,3,4]));
    });

    it("should be [1,3]", () => {
      const root = TreeNode.createTree([1,null,3]);
      expect(rightSideViewBFS(root)).toEqual(expect.arrayContaining([1,3]));
    });

    it("should be empty", () => {
      const root = TreeNode.createTree([]);
      expect(rightSideViewBFS(root)).toEqual(expect.arrayContaining([]));
    });
  });

  describe('DFS', () => {
    it('should be [1,3,4]', () => {
      const root = TreeNode.createTree([1,2,3,null,5,null,4]);
      expect(rightSideViewDFS(root)).toEqual(expect.arrayContaining([1,3,4]));
    });

    it("should be [1,3]", () => {
      const root = TreeNode.createTree([1,null,3]);
      expect(rightSideViewDFS(root)).toEqual(expect.arrayContaining([1,3]));
    });

    it("should be empty", () => {
      const root = TreeNode.createTree([]);
      expect(rightSideViewDFS(root)).toEqual(expect.arrayContaining([]));
    });
  })

});
