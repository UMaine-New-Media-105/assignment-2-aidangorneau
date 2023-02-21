//variables for adjusting x axis, y axis, and scale
X = 0
Y = 0
heartScale = 1
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //calling the function with no difference in x and y, and 5 times the scale size
  shape(0, 0, 5);
}
//the function that makes the heart like shape
function shape(X, Y, heartScale){
  fill("red");
  scale(heartScale)
  //beginshape which draws lines from each point to make the shape
  beginShape();
  vertex(40 + X, 20+Y);
  vertex(60 + X, 0+Y);
  vertex(80 + X, 20+Y);
  vertex(40 + X, 80+Y);
  vertex(0 + X, 20+Y);
  vertex(20 + X, 0+Y);
  endShape(CLOSE);
  
}
