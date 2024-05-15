
const gamma = require('@stdlib/random-base-gamma');

export function ringStrategy() {
  return (x, y) => {
    const r = x ** 2 + y ** 2
    const alpha = r;
    const beta = 3 * r;
    return gamma(alpha, beta);
  }
}

export function uniformStrategy() {
  return (_, __) => 1;
}

export function geometricMeanStrategy(functions) {
  return (x, y) => {
    let base = 1;
    let count = 0;
    for (let f in functions) {
      base *= f(x, y);
      count += 1;
    }
    return base ** (1 / count);
  }
}


