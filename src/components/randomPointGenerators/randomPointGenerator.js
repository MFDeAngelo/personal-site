import { ringStrategy, uniformStrategy, geometricMeanStrategy } from "./probabilityDistribution";
export function getDimmensionsToProjectTo(maxSamples, dimmensions) {
  const a = Math.sqrt(dimmensions.width * dimmensions.height / maxSamples);
  return {
    rows: Math.floor(dimmensions.height / a),
    columns: Math.floor(dimmensions.width / a)
  }
}

export function mapScalarToGrid(scalar, dimmensions) {
  return {
    row: Math.floor(scalar / dimmensions.columns),
    column: scalar % dimmensions.columns
  }
}

export function* enumerateSamplePoints(maxSamples, dimmensions) {
  const grid = getDimmensionsToProjectTo(maxSamples, dimmensions);
  const actualSampleCount = (grid.rows + 1) * (grid.columns + 1);
  const cellWidth = dimmensions.width / grid.columns;
  const cellHeight = dimmensions.height / grid.rows;
  for (let i = 0; i < actualSampleCount; i++) {
    const cell = mapScalarToGrid(i, grid);
    const point = {
      x: (cell.column + 0.5) * cellWidth,
      y: (cell.row + 0.5) * cellHeight
    };
    yield point;
  }
}

export function getRandomPoint(dimmensions) {
  const pdf = ringStrategy(dimmensions);
  const weightedPoints = [...enumerateSamplePoints(10000, dimmensions)]
    .map(point => {
      const weight = pdf(point.x, point.y);
      return { weight: weight, point: point };
    }
    );
  const totalWeight = weightedPoints.reduce((accumulator, currentValue) =>
    accumulator + currentValue.weight, 0);

  let rand = Math.random() * totalWeight;
  for (let i = 0; i < weightedPoints.length; i++) {
    rand -= weightedPoints[i].weight;
    if (rand < 0) {
      return weightedPoints[i].point;
    }
  }
}
