var fontsize = 60, speed = 1;
var symbol;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0, 15, 2);
  symbol = new Symbol(
    width / 2,
    height / 2,
    speed
  );
  console.log(symbol.value);
  symbol.setToRandomSymbol();
  console.log(symbol.value);
  textSize(fontsize);
}


function draw() {
  background(0, 15, 2);
  symbol.render();
  

}

function Symbol(x, y, speed) {
  this.x = x;
  this.y = y;
  this.value = null;
  this.speed = speed;
  this.switchInterval = round(random(2, 20));

  this.setToRandomSymbol = function () {
    if (frameCount % this.switchInterval == 0) {
      this.value = String.fromCharCode(
        0x30A0 + round(random(0, 96)));
        console.log(symbol.value);
    }
  };

  this.rain = function () {
    this.y = (this.y >= height) ? 0 : this.y += this.speed;
  };

  this.render = function () {
    fill(0, 255, 65);
    text(this.value, this.x, this.y);
    this.rain();
    this.setToRandomSymbol();
  };
}

function Stream() {

}
