export function intToRoman(number: number): string {
  const pairs: Map<number, string> = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]);

  const stack: string[] = [];

  for (const [key, value] of pairs) {
    while (number >= key) {
      number -= key;
      stack.push(value);
    }
  }

  return stack.join('');
}
