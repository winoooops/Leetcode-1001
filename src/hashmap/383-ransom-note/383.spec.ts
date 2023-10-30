import {canConstruct, canConstructTwo} from "./383";

describe('383. Ransom Note', () => {
  it('should be false', function () {
    expect(canConstruct("a", "b")).toEqual(false);
    expect(canConstructTwo("a", "b")).toEqual(false);
  });

  it('should be false', function () {
    expect(canConstruct("aa", "ab")).toEqual(false);
    expect(canConstructTwo("aa", "ab")).toEqual(false);
  });

  it('should be true', function () {
    expect(canConstruct("aa", "aab")).toEqual(true);
    expect(canConstructTwo("aa", "aab")).toEqual(true);
  });
})
