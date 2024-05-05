import CanvasProxy from '@/components/canvasProxy';

function zeroOnePoly(t, ys) {
  return t ** 3 * ys[0]
    + t ** 2 * (1 - t) * ys[1]
    + t * (1 - t) ** 2 * ys[2]
    + (1 - t) ** 3 * ys[3];
}

function beizer3x(t, xs) {
  return zeroOnePoly(t, xs) / zeroOnePoly(t, [1, 1, 1, 1]);
}

function beizer3y(t, ys) {
  return beizer3x(t, ys);
}

function x(t) {
  return beizer3x(t, [0, 0.3, 0.7, 1]);
  // return 50 * Math.cos(t / 6.28) + 50;
}

function y(t) {
  return beizer3y(t, [0.5, 0.6, 0.7, 0.8]);
  // return 50 * Math.sin(t / 6.28) + 50;
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

  const points = [];
  for (let i = 0; i < 1; i += 0.01) {
    points.push([x(i), y(i)]);
  }
  canvasProxy.draw(points);
  // context.lineWidth = 1;
  /*
  for (let i = 0.01; i < 1; i += 0.01) {
    canvasProxy.clear();
    const points = getPointsFromSegment((t) => x(i + t), (t) => y(i + t), 0, 1, 0.01);
    console.log(points);
    canvasProxy.draw(points);
    await timeout(40);
  }
  */
}
