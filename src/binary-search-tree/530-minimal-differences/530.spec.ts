import {TreeNode} from '../../binary-tree/TreeNode';
import {getMinimumDifference} from './530';

describe('530. Minimum Absolute Difference in BST', () => {
  describe('DFS,1,0,48,null,null,12,49', () => {
    it('should be 1', () => {
      const root = TreeNode.createTree([4, 2, 6, 1, 3]);
      expect(getMinimumDifference(root)).toBe(1);
    });

    it('should be 1', () => {
      const root = TreeNode.createTree([1, 0, 48, null, null, 12, 49]);
      expect(getMinimumDifference(root)).toBe(1);
    });
  });
});
