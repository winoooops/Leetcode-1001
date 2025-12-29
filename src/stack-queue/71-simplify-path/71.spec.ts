import {simplifyPath} from "./71";

describe('71. Simplify Path', () => {
  it("should be '/home'",() =>{
    expect(simplifyPath("/home/")).toBe("/home");
  });

  it("should be '/'",() =>{
    expect(simplifyPath("/../")).toBe("/");
  });

  it("should be '/home//foo/'",() =>{
    expect(simplifyPath("/home//foo/")).toBe("/home/foo");
  });

  it("should be '/home/../foo/'",() =>{
    expect(simplifyPath("/home/../foo/")).toBe("/foo");
  });

  it("should be '/c'", () => {
    expect(simplifyPath("/a/./b/../../c/")).toBe("/c")
  })
})
