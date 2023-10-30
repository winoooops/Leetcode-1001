import {isIsomorphic} from "./205";

describe('205. Isomorphic Strings', () => {
  it('should be true', function () {
    expect(isIsomorphic("egg", "add")).toBe(true);
  });

  it('should be false', function () {
    expect(isIsomorphic("foo", "bar")).toBe(false);
  });

  it('should be true', function () {
    expect(isIsomorphic("paper", "title")).toBe(true);
  });
})
