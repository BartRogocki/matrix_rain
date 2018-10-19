var ball = {
  x: 0,
  y: 0,
  xspeed: 10,
  yspeed: -10
};


function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  text("Attention, please.", 521, 200);
  move();
  bounce();
  display();
  

}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

function bounce() {
  if (ball.x > width || ball.x < 0) {
      ball.xspeed *= -1;
  }
  if (ball.y > height || ball.y < 0) {
      ball.yspeed *= -1;
  }

}

function display() {
  stroke(255);
  strokeWeight(4);
  fill(200,200,200);
  ellipse(ball.x, ball.y, 24, 24);
  rect(ball.x,ball.y,24,24);
}