import {LRUCache} from "./146";

describe('146. LRU Cache', () => {
  it('should perform the operation correctly', () => {
    const cache = new LRUCache(2);
    expect(cache.capacity).toBe(2);
    cache.put(1,1)
    cache.put(2,2);

    const nodeOneVal = cache.get(1);
    expect(nodeOneVal).toBe(1);

    cache.put(3, 3);
    expect(cache.get(2)).toBe(-1);

    cache.put(4,4);
    expect(cache.get(1)).toBe(-1);

    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
  });

  it("should also perform the operation correctly", () => {
    const cache = new LRUCache(5);
    cache.put(1, 1);
    cache.put(3, 3);
    cache.put(5, 5);

    expect(cache.get(3)).toBe(3);
    cache.put(3, 4);
    // [1=>1, 5=>5, 3=>4]
    expect(cache.get(3)).toBe(4);
    cache.put(7, 7);
    // [1=>1, 5=>5, 3=>4, 7=>7]
    cache.put(9,9)
    // [1=>1, 5=>5, 3=>4, 7=>7, 9=>9]
    expect(cache.get(1)).toBe(1);
    // [5=>5, 3=>4, 7=>7, 9=>9, 1=>1]
    expect(cache.get(3)).toBe(4);
    // [5=>5, 7=>7, 9=>9, 1=>1, 3=>4]
    cache.put(11,11)
    expect(cache.get(5)).toBe(-1);
  });
})
