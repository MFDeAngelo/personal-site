export default class CanvasProxy {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.context.strokeStyle = 'rgb(1,255,255)';
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw(points) {
    this.context.beginPath();
    this.context.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i += 1) {
      const point = points[i];
      this.context.lineTo(this.canvas.width * point[0], this.canvas.width * point[1]);
    }
    this.context.stroke();
  }
}
