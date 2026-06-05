​
​
export function isValidWalk(walk: string[]) {
    if (walk.length !== 10) return false;
​
​
  const counts = { n: 0, s: 0, e: 0, w: 0 };
​
  for (const char of walk) {
    if (char === 'n') counts.n++;
    if (char === 's') counts.s++;
    if (char === 'e') counts.e++;
    if (char === 'w') counts.w++;
  }
  return counts.n === counts.s && counts.e === counts.w;
}