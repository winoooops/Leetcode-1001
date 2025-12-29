import {TreeNode} from "../TreeNode";
import {zigzagLevelOrderBFS, zigZagLevelOrderDFS} from "./103";

describe('103. Binary Tree Zigzag Level Order Traversal', () => {
  describe('BFS', () => {
    it("should be [[3],[20,9],[15,7]]", () => {
      const root = TreeNode.createTree([3,9,20,null,null,15,7]);
      expect(zigzagLevelOrderBFS(root)).toEqual(expect.arrayContaining([[3],[20,9],[15,7]]));
    });

    it("should be [[1],[3,2],[4,5]]", () => {
      const root = TreeNode.createTree([1,2,3,4,null,null,5]);
      expect(zigzagLevelOrderBFS(root)).toEqual(expect.arrayContaining([[1],[3,2],[4,5]]));
    });
  });

  describe('DFS', () => {
    it("should be [[3],[20,9],[15,7]]", () => {
      const root = TreeNode.createTree([3,9,20,null,null,15,7]);
      expect(zigZagLevelOrderDFS(root)).toEqual(expect.arrayContaining([[3],[20,9],[15,7]]));
    });

    it("should be [[1],[3,2],[4,5]]", () => {
      const root = TreeNode.createTree([1,2,3,4,null,null,5]);
      expect(zigZagLevelOrderDFS(root)).toEqual(expect.arrayContaining([[1],[3,2],[4,5]]));
    });
  });

})
