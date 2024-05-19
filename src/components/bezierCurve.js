import CanvasProxy from '@/components/canvasProxy';
import { getRandomPoint } from './randomPointGenerators/randomPointGenerator';

// Optimize: compute t's first. Avoid **. Will greatly reduce computations.
function createBezierCurve(bezierPoints) {
  return (t) => {
    return {
      y:
        t ** 3 * bezierPoints.endPoint.y
        + 3 * t ** 2 * (1 - t) * bezierPoints.endVector.y
        + 3 * t * (1 - t) ** 2 * bezierPoints.startVector.y
        + (1 - t) ** 3 * bezierPoints.startPoint.y,
      x:
        t ** 3 * bezierPoints.endPoint.x
        + 3 * t ** 2 * (1 - t) * bezierPoints.endVector.x
        + 3 * t * (1 - t) ** 2 * bezierPoints.startVector.x
        + (1 - t) ** 3 * bezierPoints.startPoint.x
    }
  }
}

function getPointsFromSegment(xFunc, yFunc, start, end, delta) {
  const points = [];
  for (let i = start; i <= end; i += delta) {
    const point = [xFunc(i), yFunc(i)];
    points.push(point);
  }
  return points;
}

function timeout(ms) {
  return new Promise((resolve) => { setTimeout(resolve, ms); });
}

export default async function animate(canvas) {
  const canvasProxy = new CanvasProxy(canvas);
  const dim = canvasProxy.getDimensions();

  const curveIterator = generateCurve(dim);
  const points = [];
  while (true) {
    points.push(curveIterator.next().value);
    if (points.length > 100) {
      points.shift();
    }
    canvasProxy.clear();
    canvasProxy.drawLine(points);
    await timeout(10);

  }
}

export function* generateBezierSegments(dimensions) {
  let lastBezier = { endPoint: { x: 0, y: 0 }, endVector: { x: dimensions.width / 3, y: 0 } };
  while (true) {
    const startPoint = lastBezier.endPoint;
    const startVector = {
      x: 2 * lastBezier.endPoint.x - lastBezier.endVector.x,
      y: 2 * lastBezier.endPoint.y - lastBezier.endVector.y
    };
    const endPoint = getRandomPoint(dimensions);
    const endVector = getRandomPoint(dimensions);

    lastBezier = { startPoint, startVector, endPoint, endVector };
    yield lastBezier;
  }
}

function* generateCurve(dimensions) {
  const bezierIterator = generateBezierSegments(dimensions);
  while (true) {
    const bezierPoints = bezierIterator.next().value;
    const bezierCurve = createBezierCurve(bezierPoints);

    for (let i = 0; i <= 1.01; i += 0.01) {
      yield bezierCurve(i);
    }

  }
}
