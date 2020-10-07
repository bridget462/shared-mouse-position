let socket;

function setup() {
  createCanvas(800, 500);
  print("setup");

  socket = io.connect("http://localhost:3000");
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, 30, 30);
}
