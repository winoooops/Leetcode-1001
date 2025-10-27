import {RLEBasic} from './RLE-basic';

describe('Test RLE basic algorithm', () => {
  it('should be "w2b3w1"', () => {
    const result = RLEBasic('wwbbbw');
    expect(result).toBe('w2b3w1');
  });

  it('it should be "aabbcde"', () => {
    const result = RLEBasic('aabbcde');
    expect(result).toBe('a2b2c1d1e1');
  });
});
