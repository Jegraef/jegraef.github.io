function setup() {
  createCanvas (windowWidth, windowHeight);
  strokeWeight(8);
}

function draw() {
  if (mouseX <300) {
    stroke (300,125,24);
  } else {
    stroke(2);
  }

if (mouseX <width/1) {

  rect (mouseX, mouseY, 125, 125);
  }
}
