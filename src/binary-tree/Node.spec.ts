import {Node} from "./Node";

describe("Test Class Node", () => {
  it("should be [1,#,2,3,#,4,5,7,#]", () => {
    const array = [1, 2, 3, 4, 5, null, 7];
    const root = Node.createTree(array);
    expect(root?.next).toBe(null);

    expect(root?.val).toBe(1);
    expect(root?.left?.val).toBe(2);
    expect(root?.right?.val).toBe(3);
    expect(root?.left?.left?.val).toBe(4);
    expect(root?.left?.right?.val).toBe(5);
    expect(root?.right?.right?.val).toBe(7);
  });
});
