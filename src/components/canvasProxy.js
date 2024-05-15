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
    console.log('Clear!');
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawLine(points) {
    let context = this.context;
    context.strokeStyle = 'rgb(1,255,255)';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i += 1) {
      let point = points[i];
      context.lineTo(point[0], point[1]);
    }
    context.stroke();
  }

  drawPoint(x, y) {
    const size = 10;
    const offset = size / 2;
    let context = this.context;
    context.fillStyle = 'red';
    context.fillRect(x - offset, y - offset, size, size);
  }
}
