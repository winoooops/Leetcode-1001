export class RandomSet {
  indices: Map<number, number>;
  values: number[];

  constructor() {
    this.indices = new Map();
    this.values = [];
  }

  insert(val: number): boolean {
    if (this.indices.has(val)) {
      return false;
    }

    this.indices.set(val, this.values.length);
    this.values.push(val);
    return true;
  }

  remove(val: number): boolean {
    const idx = this.indices.get(val);
    if (idx === undefined) {
      return false;
    }

    const lastAt = this.values.length - 1;
    const last = this.values[lastAt];
    this.values[idx] = last;
    this.indices.set(last, idx);

    this.values.pop();
    this.indices.delete(val);
    return true;
  }

  getRandom(): number {
    const idx = Math.floor(Math.random() * this.values.length);

    return this.values[idx];
  }
}
