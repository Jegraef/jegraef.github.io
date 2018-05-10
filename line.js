function setup() {
  createCanvas (windowWidth, windowHeight);
  strokeWeight(4);
}

function draw() {
  if (mouseX <300) {
    stroke (255,0,0);
  } else {
    stroke(0);
  }

if (mouseX <width/2) {

  ellipse (mouseX, mouseY, 30, 30);
  }
}
