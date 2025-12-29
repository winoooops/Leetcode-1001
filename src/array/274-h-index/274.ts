export function hIndex(citations: number[]): number {
  citations.sort((a, b) => a - b);

  for (let i = 0; i < citations.length; i++) {
    const h = citations.length - i;
    if (citations[i] >= h) return h;
  }

  return 0;
}

export function bucketHIndex(citations: number[]): number {
  // create a bueckt array that note down the number of articles for a given citation count
  // the maximum buckts should not exceeds citation.length
  // and we need to have one additional buckts for articles that have 0 citation
  const n = citations.length;
  const buckets: number[] = Array.from({length: n + 1}, () => 0);
  for (const citation of citations) {
    if (citation >= n) {
      buckets[n]++;
    } else {
      buckets[citation]++;
    }
  }

  let count = 0;
  for (let i = buckets.length - 1; i >= 0; i--) {
    count += buckets[i];
    if (count >= i) return i;
  }

  return count;
}
