let socket;

function setup() {
  createCanvas(800, 500);
  background(220);

  socket = io.connect("http://localhost:3000");

  // receiving other people drawing
  socket.on("mouse", otherUserDrawing);
}

function otherUserDrawing(mousePosition) {
  noStroke();
  fill(255, 0, 100);
  ellipse(mousePosition.x, mousePosition.y, 30, 30);
}

function mouseDragged() {
  let mousePosition = {
    x: mouseX,
    y: mouseY,
  };
  socket.emit("mouse", mousePosition);

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 30, 30);
}
