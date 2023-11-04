import {containsNearbyDuplicate, containsNearbyDuplicateTwo} from "./219";

describe('219 Contains Duplicate II', () => {
  it('should be true', function () {
    expect(containsNearbyDuplicate([1,2,3,1], 3)).toBe(true);
    expect(containsNearbyDuplicateTwo([1,2,3,1], 3)).toBe(true);
  });

  it('should be true', function () {
    expect(containsNearbyDuplicate([1,0,1,1], 1)).toBe(true);
    expect(containsNearbyDuplicateTwo([1,0,1,1], 1)).toBe(true);
  });

  it('should be false', function () {
    expect(containsNearbyDuplicate([1,2,3,1,2,3], 2)).toBe(false);
    expect(containsNearbyDuplicateTwo([1,2,3,1,2,3], 2)).toBe(false);
  });
})
