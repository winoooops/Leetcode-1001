import { replaceSpace } from "./index"

describe("Leecode: Replace Space", () => {
  it("it should be right", () => {
    expect(replaceSpace('We are happy.')).toEqual('We%20are%20happy.');
  })
});
