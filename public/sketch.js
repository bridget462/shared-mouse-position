let socket;

function setup() {
  frameRate(12);
  createCanvas(1280, 720);
  background(220);

  socket = io.connect("http://localhost:3000");

  // receiving other people drawing
  socket.on("mouse", otherUserDrawing);
}

function otherUserDrawing(mousePosition) {
  // noStroke();
  // fill(255, 0, 100);
  ellipse(mousePosition.x, mousePosition.y, 30, 30);
}

function draw() {
  clear();

  // draw canvas border
  stroke("rgba(0,255,0,0.25)");
  strokeWeight(4);
  rect(0, 0, width, height);

  drawLineFromPreviousPosition();

  // console.log(`current mouse position: ${mouseX}`);
  if (0 <= mouseX && mouseX <= width && 0 <= mouseY && mouseY <= height) {
    console.log("mouse within canvas");
    let mousePosition = {
      x: mouseX,
      y: mouseY,
    };
    socket.emit("mouse", mousePosition);
  }
}

function drawLineFromPreviousPosition() {
  stroke(4, 220, 212);
  strokeWeight(4);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
