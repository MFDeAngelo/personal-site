const normalPdf = require('@stdlib/stats-base-dists-normal-pdf');

export function ringStrategy(dimensions) {
  const shortSide = Math.min(dimensions.width, dimensions.height);
  const mu = shortSide / 4;
  const sigma = shortSide / 6;
  const xOffset = dimensions.width / 2;
  const yOffset = dimensions.height / 2;
  return (x, y) => {
    const r = Math.sqrt((x - xOffset) ** 2 + (y - yOffset) ** 2);
    return normalPdf(r, mu, sigma) * 20;
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


