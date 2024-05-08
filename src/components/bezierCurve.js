import CanvasProxy from '@/components/canvasProxy';

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

  const xBezierPoints = [0.8, 0.3, 0.6, 0.5];
  const yBezierPoints = [0.3, 0.7, 0.7, 0.8];

  const x = (t) => zeroOnePoly(t, xBezierPoints);
  const y = (t) => zeroOnePoly(t, yBezierPoints);

  for (let i = 0; i < xBezierPoints.length; i++) {
    const dim = canvasProxy.getDimensions();
    canvasProxy.drawPoint(xBezierPoints[i] * dim[0], yBezierPoints[i] * dim[1]);
  }

  const points = [];
  for (let i = 0; i < 1; i += 0.01) {
    points.push([x(i), y(i)]);
  }
  canvasProxy.drawLine(points);
}
