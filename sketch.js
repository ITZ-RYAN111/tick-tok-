


var hr, min, sec;


var hrAngleMode, minAngleMode, secAngleMode;

function setup() {
  createCanvas(700,500);


  angleMode(DEGREES);
}

function draw() {
  background("black");  
  
 
  translate(350, 250);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

 
  secAngleMode = map(sec, 0, 60, 0, 360);
  minAngleMode = map(min, 0, 60, 0, 360);
  hrAngleMode = map(hr%12, 0, 12, 0, 360);


  push();
  rotate(secAngleMode);
  stroke("white");
  strokeWeight(8);
  line(0, 0, 90, 0);
  pop();

  push();
  rotate(minAngleMode);
  stroke("white");
  strokeWeight(8);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAngleMode);
  stroke("white");
  strokeWeight(8);
  line(0, 0, 50, 0);
  pop();

  strokeWeight(2);
  stroke("black");
  point(0, 0);

  strokeWeight(10);
  noFill();

  
  stroke("cyan");
  arc(0, 0, 300, 300, 0, secAngleMode);

  stroke("cyan");
  arc(0, 0, 280, 280, 0, minAngleMode);

  stroke("cyan");
  arc(0, 0, 260, 260, 0, hrAngleMode);

}

if (gameState===end){
angleMode.end
}

