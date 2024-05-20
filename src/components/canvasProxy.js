export default class CanvasProxy {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
  }

  getDimensions() {
    return { width: this.canvas.width, height: this.canvas.height };
  }

  clear() {
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawLine(points) {
    let context = this.context;
    context.strokeStyle = 'fuchsia';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i += 1) {
      context.lineTo(points[i].x, points[i].y);
    }
    context.stroke();
  }

  drawPoint(point) {
    const size = 10;
    const offset = size / 2;
    let context = this.context;
    context.fillStyle = 'red';
    context.fillRect(point.x - offset, point.y - offset, size, size);
  }
}
