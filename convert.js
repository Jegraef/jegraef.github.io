function setup() {
 size(600, 400);
 smooth();
}

function draw() {
 if (mouseIsPressed) {
   fill(0);
 } else {
   fill (255);
 }
 ellipse(pmouseX, pmouseY, mouseX, mouseY);
 }
