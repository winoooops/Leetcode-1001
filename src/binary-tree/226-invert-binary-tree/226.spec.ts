import {TreeNode} from "../TreeNode";
import {invertTreeDFS, invertTreeRecursion} from "./226";

describe('226. Invert Binary Tree', () => {
  describe('recursion', () => {
    it("should be [4,6,2,9,6,3,1]", () => {
      const root = TreeNode.createTree([4,2,7,1,3,6,9]);
      expect(invertTreeRecursion(root)).toEqual(TreeNode.createTree([4,7,2,9,6,3,1]));
    })

    it("should be [2,3,1]", () => {
      const root = TreeNode.createTree([2,1,3]);
      expect(invertTreeRecursion(root)).toEqual(TreeNode.createTree([2,3,1]));
    });

    it("should be []", () => {
      const root = TreeNode.createTree([]);
      expect(invertTreeRecursion(root)).toEqual(TreeNode.createTree([]));
    });
  });

  describe('DFS', () => {
    it("should be [4,6,2,9,6,3,1]", () => {
      const root = TreeNode.createTree([4,2,7,1,3,6,9]);
      expect(invertTreeDFS(root)).toEqual(TreeNode.createTree([4,7,2,9,6,3,1]));
    })

    it("should be [2,3,1]", () => {
      const root = TreeNode.createTree([2,1,3]);
      expect(invertTreeDFS(root)).toEqual(TreeNode.createTree([2,3,1]));
    });

    it("should be []", () => {
      const root = TreeNode.createTree([]);
      expect(invertTreeDFS(root)).toEqual(TreeNode.createTree([]));
    });
  })
})
