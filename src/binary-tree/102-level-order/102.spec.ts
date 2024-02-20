import {TreeNode} from "../TreeNode";
import {levelOrderBFS, levelOrderDFS} from "./102";

describe('102. Binary Tree Level Order Traversal', () => {
  describe('BFS', () => {
    it("should be [ [3], [9, 20], [15, 7] ]", () => {
      const root = TreeNode.createTree([3,9,20,null,null,15,7]);
      const result = levelOrderBFS(root);
      expect(result).toEqual(expect.arrayContaining([[3],[9,20],[15,7]]));
    });

    it("should be [ [1], [2, 3], [4, 5] ]", () => {
      const root = TreeNode.createTree([1,2,3,4,5]);
      const result = levelOrderBFS(root);
      expect(result).toEqual(expect.arrayContaining([[1],[2,3],[4,5]]));
    });

    it("should be [[1]]", () => {
      const root = TreeNode.createTree([1]);
      const result = levelOrderBFS(root);
      expect(result).toEqual(expect.arrayContaining([[1]]));
    });
  });

  describe('DFS', () => {
    it("should be [ [3], [9, 20], [15, 7] ]", () => {
      const root = TreeNode.createTree([3,9,20,null,null,15,7]);
      const result = levelOrderDFS(root);
      expect(result).toEqual(expect.arrayContaining([[3],[9,20],[15,7]]));
    });

    it("should be [ [1], [2, 3], [4, 5] ]", () => {
      const root = TreeNode.createTree([1,2,3,4,5]);
      const result = levelOrderDFS(root);
      expect(result).toEqual(expect.arrayContaining([[1],[2,3],[4,5]]));
    });

    it("should be [[1]]", () => {
      const root = TreeNode.createTree([1]);
      const result = levelOrderDFS(root);
      expect(result).toEqual(expect.arrayContaining([[1]]));
    });
  })

})
