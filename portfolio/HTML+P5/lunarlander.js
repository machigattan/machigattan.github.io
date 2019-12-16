let start = false;
// let gravity = 0;
let speed = 0;
let yPos = 100;
let xPos = 345;
let restartooo = false;
let startscreen = true;
let erroro = false;
let fuel = 100;
let fueldisplay = false;
let fuelwork = false;
let gameEnd = false;
let winscreen = false;
let losescreen = false;
let gravity = false;

// let endscreen = false;
function draw() {
  if (start === true) {
    // speed = speed + 0.3;
    gravity = true;
  }
  clear();
  background(0);
  gameBoy();
  buttonStart();
  buttonRestart();
  moveButtonsUP();
  moveButtonsDOWN();
  moveButtonsRIGHT();
  moveButtonsLEFT();
  uselessButtons();
  screenstart();
  fuelOver();
  screenerror();
  screenend();
  txt();

  // gravity = gravity + speed;

  yPos = yPos + speed;

  if (
    (restartooo === true && yPos >= 390) ||
    (restartooo === true && erroro === true) ||
    (restartooo === true && fuel <= 0)
  ) {
    restart();
  }

  if (gravity === true) {
    speed = speed + 0.3;
  } else {
    speed = 0;
  }
  if (yPos >= 380) {
    yPos = 390;
    gravity = false;
    // gravity = 0;
    speed = 0;
    // gameEnd=true;
    // speed = speed;
  }

  if (start === true) {
    push();
    translate(xPos, yPos);

    rect(0, 0 + speed, 10, 10);
    // rotate(rotation);
    pop();
    stroke(255);
    line(150, 400, 550, 400);
    // gravity = 6;
  }
  // speed = speed + 0.2;
  if (yPos <= 90 || xPos <= 150 || xPos >= 550 || yPos >= 400) {
    erroro = true;

    gameEnd = true;
    //  gameEnd();
  }
  if (fueldisplay === true) {
    noStroke();
    text("FUEL: " + fuel, 200, 120);
  }

  //  }
  if (gameEnd === true) {
    start = false;
    startscreen = false;
  }
  if (fuel <= 0) {
    fuelwork = true;
  }

  if (speed <= 1 && yPos >= 370 && yPos <= 380) {
    winscreen = true;
    losescreen = false;
  } else if (speed >= 2 && yPos >= 370 && yPos <= 380) {
    losescreen = true;
  }
  noStroke();
  fill(255);
  // text("Mouse X " + mouseX, 700, 100);
  // text("Mouse Y" + mouseY, 700, 120);
  // console.log(speed);
  // console.log(erroro);
}

// function boundaries () {
//   if (yPos === 390)
// }

function mousePressed() {
  if (mouseX > 380 && mouseX < 430 && mouseY > 750 && mouseY < 760) {
    start = true;
    fueldisplay = true;
  }

  if (mouseX > 270 && mouseX < 320 && mouseY > 750 && mouseY < 760) {
    restartooo = true;
  }
}

function screenstart() {
  if (startscreen === true && start === false) {
    noStroke();
    textAlign(CENTER);
    text("L U N A R      L A N D E R", 350, 200);
    text("PRESS START", 350, 250);
  }
}

function screenerror() {
  if (erroro === true) {
    // gravity = 0;
    speed = 0;
    start = false;
    startscreen = false;
    gameEnd = true;
    fuelwork = false;
    fueldisplay = false;
    winscreen = false;
    losescreen = false;
    gravity = false;
    noStroke();
    text("ERROR \n PLEASE PRESS RESTART", 350, 230);
  }
}
function screenend() {
  if (winscreen === true) {
    noStroke();
    text("GOOD JOB\n PRESS RESTART FOR NEW ROUND", 350, 250);
    losescreen = false;
  }
  if (losescreen === true) {
    noStroke();
    text("YOU SUCK\n PRESS RESTART FOR NEW ROUND", 350, 250);
  }
}
function txt() {
  noStroke();

  text("START", 405, 780);
  text("RESTART", 296, 780);
  fill(0);
  text("GAMEBOY | NOCOLOR", 350, 440);
  fill(255);
  text("⇑", 210, 510);
  text("⇓", 210, 580);
  text("⇒", 245, 543);
  text("⇐", 175, 543);
}

function gameBoy() {
  //Base lines vom GameBoy
  stroke(255);
  line(100, 50, 600, 50);
  line(100, 50, 100, 770);
  line(600, 50, 600, 770);
  line(115, 60, 200, 60);
  line(205, 60, 210, 60);
  line(550, 60, 590, 60);
  line(590, 60, 590, 80);
  line(590, 90, 590, 95);

  //Kurven unten
  push();
  noFill();
  beginShape();
  curveVertex(100, 680);
  curveVertex(110, 800);
  curveVertex(350, 850);
  curveVertex(590, 800);
  curveVertex(500, 680);
  endShape();

  beginShape();
  curveVertex(100, 770);
  curveVertex(100, 770);
  curveVertex(102, 790);
  curveVertex(110, 800);
  curveVertex(110, 800);
  endShape();

  beginShape();
  curveVertex(600, 770);
  curveVertex(600, 770);
  curveVertex(598, 790);
  curveVertex(590, 802);
  curveVertex(610, 800);
  endShape();
  pop();

  //Bildschirm
  rect(130, 80, 440, 350);
  beginShape();
  curveVertex(250, 400);
  curveVertex(130, 430);
  curveVertex(350, 460);
  curveVertex(570, 430);
  curveVertex(260, 430);
  endShape();
  fill(0);
  rect(150, 90, 400, 330);
}
function buttonRestart() {
  fill(255);
  rect(270, 750, 50, 10, 10);
  //line(350, 300, 350, 900);
}
function buttonStart() {
  fill(255);
  rect(380, 750, 50, 10, 10);
}

function moveButtonsUP() {
  circle(210, 540, 10);

  //oben
  fill(0);
  rect(200, 490, 20, 30);

  if (
    (keyIsDown(UP_ARROW) && start === true) ||
    (keyIsDown(87) && start === true)
  ) {
    fill(255);
    rect(200, 490, 20, 30);
    // yPos = yPos - speed;
    fuel = fuel - 1;
    speed = speed - 1;
    fill(255, 0, 0);
    text("⇑", 210, 510);
    // gravity = gravity +0.1;
  }
}
function moveButtonsRIGHT() {
  //rechts
  fill(0);
  rect(230, 530, 30, 20);
  if (
    (keyIsDown(RIGHT_ARROW) && start === true) ||
    (keyIsDown(68) && start === true)
  ) {
    fill(255);
    rect(230, 530, 30, 20);
    xPos = xPos + 3;
    fuel -= 1;
    fill(0);
    text("⇒", 245, 543);
    // rotation = radians(10);
  }
}
function moveButtonsDOWN() {
  //unten
  fill(0);
  rect(200, 560, 20, 30);
  if (keyIsDown(DOWN_ARROW) && start === true) {
    fill(255);
    rect(200, 560, 20, 30);
    // yPos = yPos + speed;
    fuel -= 1;
    speed = speed + 0.3;
    fill(0);
    text("⇓", 210, 580);
  }
}

function moveButtonsLEFT() {
  //links
  fill(0);
  rect(160, 530, 30, 20);
  if (
    (keyIsDown(LEFT_ARROW) && start === true) ||
    (keyIsDown(65) && start === true)
  ) {
    fill(255);
    rect(160, 530, 30, 20);
    xPos = xPos - 3;
    fuel -= 1;
    fill(0);
    text("⇐", 175, 543);
    // rotation = radians(-10);
  }
}

function uselessButtons() {
  fill(255);
  circle(450, 560, 15);
  circle(500, 540, 15);
}

function restart() {
  start = false;
  // gravity = 0;
  speed = 0;
  yPos = 100;
  xPos = 345;
  speed = 0;
  gameEnd = false;
  startscreen = true;
  restartooo = false;
  fueldisplay = false;
  fuel = 100;
  erroro = false;
  winscreen = false;
  losescreen = false;
  gravity = false;
}

function fuelOver() {
  if (fuelwork === true) {
    noStroke();
    text("NO FUEL LEFT\n YOU LOST\nPRESS RESTART", 350, 200);
    // gravity = 0;
    speed = 0;
    fuel = 0;
    start = false;
    startscreen = false;
    erroro = false;
    gameEnd = true;
    fueldisplay = false;
    fuelwork = false;
    winscreen = false;
    losescreen = false;
    gravity = false;
  }
}
