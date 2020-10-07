let socket;

function setup() {
  createCanvas(800, 500);
  background(220);

  socket = io.connect("http://localhost:3000");
}

function mouseDragged() {
  console.log(mouseX + "," + mouseY);

  let mousePosition = {
    x: mouseX,
    y: mouseY,
  };
  socket.emit("mouse", mousePosition);

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 30, 30);
}
