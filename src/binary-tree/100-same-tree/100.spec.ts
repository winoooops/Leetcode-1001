import {TreeNode} from "../TreeNode";
import {isSameTree} from "./100";

describe('100. Same Tree', () => {
  it("should be true", () => {
    const p = TreeNode.createTree([1,2,3]);
    const q = TreeNode.createTree([1,2,3]);

    expect(isSameTree(p, q)).toBe(true);
  });
})
