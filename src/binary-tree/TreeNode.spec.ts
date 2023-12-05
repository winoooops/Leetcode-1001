import {TreeNode} from "./TreeNode";

describe('Test createTree', () => {
  it("crate correctly from [3, 9, 20, null, null, 15, 7]", () => {
    const arr = [3, 9, 20, null, null, 15, 7];
    const node = TreeNode.createTree(arr);

    const root = new TreeNode(3,
      new TreeNode(9),
      new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
      )
    );

    expect(node).toEqual(root);
  })

  it("create correctly from [1, null, 2]", () => {
    const arr = [1, null, 2];
    const node = TreeNode.createTree(arr);

    const root = new TreeNode(
      1,
      null,
      new TreeNode(2)
    )

    expect(node).toEqual(root);
  });
})
