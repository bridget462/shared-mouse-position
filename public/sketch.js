let socket;

function setup() {
  createCanvas(800, 500);
  background(220);

  socket = io.connect("http://localhost:3000");
}

function draw() {
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 30, 30);
}
