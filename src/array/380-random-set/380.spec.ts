import {RandomSet} from './380';

describe('380. Insert Delete GetRandom O(1)', () => {
  it('inserts unique values and rejects duplicates', () => {
    const set = new RandomSet();
    expect(set.insert(1)).toBe(true);
    expect(set.insert(1)).toBe(false);
    expect(set.insert(2)).toBe(true);
  });

  it('removes existing values and reports missing ones', () => {
    const set = new RandomSet();
    set.insert(5);
    set.insert(7);
    set.insert(11);

    expect(set.remove(7)).toBe(true);
    expect(set.remove(7)).toBe(false);
    expect(set.remove(5)).toBe(true);
    expect(set.remove(11)).toBe(true);
    expect(set.remove(11)).toBe(false);
  });

  it('a series of succesfull runs', () => {
    const set = new RandomSet();
    expect(set.insert(0)).toBe(true);
    expect(set.insert(1)).toBe(true);
    console.log(set.indices);
    expect(set.remove(0)).toBe(true);
    expect(set.insert(2)).toBe(true);
    console.log(set.values);
    console.log(set.indices);
    expect(set.remove(1)).toBe(true);
    console.log(set.values);
    expect(set.getRandom()).toBe(2);
  });

  it('returns remaining elements through getRandom', () => {
    const set = new RandomSet();
    set.insert(10);
    set.insert(20);
    set.insert(30);
    set.remove(20);

    const randomSpy = jest
      .spyOn(Math, 'random')
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0.999999);

    expect(set.getRandom()).toBe(10);
    expect(set.getRandom()).toBe(30);

    randomSpy.mockRestore();
  });
});
