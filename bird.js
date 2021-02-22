class Bird {
  constructor() {
    this.x = 150;
    this.y = 200;
    this.velocityY = 0;
    this.width = 20;
    this.height = 20;
    this.weight = 1;
  }
  updateAnimation() {
    let curve = Math.sin(angle) * 20;
    if (this.y > canvas.height - this.height * 3 + curve) {
      this.y = canvas.height - this.height * 3 + curve;
      this.velocityY = 0;
    } else {
      this.velocityY += this.weight;
      this.velocityY *= 0.9;
      this.y += this.velocityY;
    }
    if (this.y < 0 + this.height) {
      this.y = 0 + this.height;
      this.velocityY = 0;
    }
    if (spacePressed && this.y > this.height * 3) this.flap();
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  flap() {
    this.velocityY -= 2;
  }
}
const bird = new Bird();
