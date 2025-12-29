import {TreeNode} from "../TreeNode";
import {averageOfLevelsBFS, averageOfLevelsDFS} from "./637";

describe('637. Average of Levels', () => {
  describe('BFS', () => {
    it("should be [3, 14.5, 11]", () => {
      const root = TreeNode.createTree([3,9,20,null,null,15,7]);
      expect(averageOfLevelsBFS(root)).toEqual(expect.arrayContaining([3, 14.5, 11]));
    });

    it("should be [3, 14.5, 11]", () => {
      const root = TreeNode.createTree([3,9,20,15,7]);
      expect(averageOfLevelsBFS(root)).toEqual(expect.arrayContaining([3, 14.5, 11]));
    });
  });

  describe('DFS', () => {
    it("should be [3, 14.5, 11]", () => {
      const root = TreeNode.createTree([3,9,20,null,null,15,7]);
      expect(averageOfLevelsDFS(root)).toEqual(expect.arrayContaining([3, 14.5, 11]));
    });

    it("should be [3, 14.5, 11]", () => {
      const root = TreeNode.createTree([3,9,20,15,7]);
      expect(averageOfLevelsDFS(root)).toEqual(expect.arrayContaining([3, 14.5, 11]));
    });
  })


})
