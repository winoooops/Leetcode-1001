import { strStr } from '../Easy/10.strStr'

describe('strStr', () => {
  it("find 'll' from 'hello' should return 2", () => {
    const haystack = 'hello'
    const needle = 'll'
    expect(strStr(haystack, needle)).toBe(2)
  })

  it("find 'aaaaa' from 'bba' should return -1 ", () => {
    const haystack = "aaaaa"
    const needle = "bba"
    expect(strStr(haystack, needle)).toBe(-1)
  })

  it("find '' from '' should return 0", () => {
    expect(strStr('', '')).toBe(0)
  })

  it('two same string', () => {
    expect(strStr('mississippi', 'mississippi')).toBe(0)
  })
});