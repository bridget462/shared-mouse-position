function setup() {
  createCanvas(800, 500);
  print("setup");
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, 30, 30);
}
