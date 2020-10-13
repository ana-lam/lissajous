// lissajous remix, sampling 
// "Lissajous Curve" by Samimindhttp://www.openprocessing.org/sketch/610948Licensed under Creative Commons Attribution ShareAlikehttps://creativecommons.org/licenses/by-sa/3.0https://creativecommons.org/licenses/GPL/2.0/
//

let horizontalSpeed = 3,
  verticalSpeed = 4,
  phasenDifferenzVer = Math.PI / 4;

//  Frequency Ratio 3:4 -------- Phase Shift pi/4

let angleVer = phasenDifferenzVer,
  angleHor = 0,
  oldW, oldH, size = 150,
  frame = 0;

function setup() {
  createCanvas(1080, 720);
  background(0);
  stroke(11, 230, 212);
  strokeWeight(3);
  frameRate(120);
  size = (height - 100) / 2;
  oldW = sin(angleHor) * size + width / 2;
  oldH = sin(angleVer) * size + height / 2;
}

function draw() {
  let h = height - (sin(angleVer) * size + height / 2);
  let w = sin(angleHor) * size + width / 2;

  if (frame > 0) {
    line(w, h, oldW, oldH);
  }

  angleVer += verticalSpeed * 0.02;
  angleHor += horizontalSpeed * 0.02;
  oldW = w;
  oldH = h;

  frame++;
}
