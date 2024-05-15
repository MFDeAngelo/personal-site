import CanvasProxy from '@/components/canvasProxy';
import { getRandomPoint } from './randomPointGenerators/randomPointGenerator';

function zeroOnePoly(t, ys) {
  return t ** 3 * ys[0]
    + 3 * t ** 2 * (1 - t) * ys[1]
    + 3 * t * (1 - t) ** 2 * ys[2]
    + (1 - t) ** 3 * ys[3];
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
  const bezierPoints = Array.from(Array(4), () => getRandomPoint(dim));
  const xBezierPoints = bezierPoints.map(p => p.x);
  const yBezierPoints = bezierPoints.map(p => p.y);

  const x = (t) => zeroOnePoly(t, xBezierPoints);
  const y = (t) => zeroOnePoly(t, yBezierPoints);

  for (let i = 0; i < bezierPoints.length; i++) {
    canvasProxy.drawPoint(bezierPoints[i].x, bezierPoints[i].y);
  }

  const points = [];
  for (let i = 0; i <= 1.01; i += 0.01) {
    points.push([x(i), y(i)]);
  }
  canvasProxy.drawLine(points);
}
