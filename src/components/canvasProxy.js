export default class CanvasProxy {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
  }

  getDimensions() {
    return [this.canvas.width, this.canvas.height];
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
    context.moveTo(points[0][0]* this.canvas.width, points[0][1] * this.canvas.height);
    for (let i = 1; i < points.length; i += 1) {
      let point = points[i];
      point = [point[0] * this.canvas.width, point[1] * this.canvas.height];
      console.log(point);
      context.lineTo(point[0], point[1]);
    }
    context.stroke();
  }

  drawPoint(x, y) {

    const size = 10;
    const offset = size / 2;
    let context = this.context;
    context.fillStyle = 'red';
    console.log(x);
    console.log(y);
    context.fillRect(x - offset, y - offset, size, size);
  }
}
