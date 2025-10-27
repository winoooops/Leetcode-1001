// suppose I want to parse "wwbbbw" into "w3b3"

export function RLEBasic(target: string): string {
  let result = '';
  for (let i = 0; i < target.length; i++) {
    console.log(target[i]);
    let occurance = 1;

    while (i + 1 < target.length && target[i] === target[i + 1]) {
      occurance++;
      i++;
    }

    result += `${target[i]}${occurance}`;
  }

  return result;
}
