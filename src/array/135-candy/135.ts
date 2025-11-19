/**
 * Two-pass greedy:
 * 1. Scan left-to-right so each child beating the left neighbor gets +1 candy.
 * 2. Scan right-to-left so each child beating the right neighbor has >= right+1.
 * Taking the max of both passes yields the minimal distribution satisfying rules.
 */
export function candy(ratings: number[]): number {
  const n = ratings.length;
  if (n === 0) return 0;

  const candies = Array.from({length: n}, () => 1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  return candies.reduce((sum, count) => sum + count, 0);
}

/**
 * Slope-tracking implementation:
 * Track the length of the last increasing slope (inc) and the current
 * decreasing slope (dec). When a descending run matches the previous peak,
 * award one extra candy to the peak by extending dec.
 */
export function candySlope(ratings: number[]): number {
  const n = ratings.length;
  if (n === 0) return 0;

  let total = 1;
  let inc = 1;
  let dec = 0;
  let prev = 1;

  for (let i = 1; i < n; i++) {
    // asecending (or flat) slope
    if (ratings[i] >= ratings[i - 1]) {
      dec = 0;
      prev = ratings[i] === ratings[i - 1] ? 1 : prev + 1;
      total += prev;
      inc = prev;
    }
    // descending slope
    else {
      dec++;
      if (dec === inc) dec++;
      total += dec;
      prev = 1;
    }
  }

  return total;
}
