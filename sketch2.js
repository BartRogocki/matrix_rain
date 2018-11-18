var fontSize = 30, speed = 1;
var streams = [];
var symbol;
let maxNumberOfSymbol = 30;
document.documentElement.style.overflow = 'hidden';
function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    background(0, 15, 2);
    cnv.parent('sketch-holder');
    maxNumberOfSymbol = round(windowHeight / fontSize);
    symbol = new Symbol(
        width / 2,
        height / 2,
        speed);
    symbol.setSymbol();
    textSize(fontSize);
    var x = 0;
    for (var i = 0; i <= width / fontSize; i++) {
        var stream = new Stream();
        stream.generateStream(x, round(random(-2000, 0)));
        streams.push(stream);
        x += fontSize;
    }
    console.log(streams);
    console.log(maxNumberOfSymbol);
}

function draw() {
    background(0, 15, 2);
    symbol.rander();
    streams.forEach(function (stream) {
        stream.renderStream();
    });
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function Symbol(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.unicodevalue = null;
    this.switchInterval = round(random(2, 22));
    this.first = false;
    this.rander = function () {
        fill(0, 255, 65);
        text(this.unicodevalue, this.x, this.y);
        this.move();
        this.setSymbol();
    };
    this.move = function () {
        this.y = (this.y >= height) ? 0 : this.y += this.speed;
    };
    this.setSymbol = function () {
        var drawType = round(random(0, 100));
        if (frameCount % this.switchInterval == 0) {
            if (drawType >= 0 && drawType <= 30) {
                this.unicodevalue = String.fromCharCode(
                    //LITERY
                    0x0040 + round(random(1, 27)));
            } else if (drawType > 30 && drawType <= 60) {
                this.unicodevalue = String.fromCharCode(
                    //KATAKANA
                    0x30A0 + round(random(0, 96)));
            } else if (drawType > 60 && drawType <= 85) {
                //LICZBY
                this.unicodevalue = round(random(0, 9));
            } else if (drawType > 85 && drawType <= 100) {
                //DZIWNY ZNAKI
                this.unicodevalue = String.fromCharCode(
                    0x196040 + round(random(0, 11)));
            } else {
                //UŚMIECH
                this.unicodevalue = 0;
            }
        }
    };

}

function Stream() {
    this.symbols = [];
    this.totalSymbols = round(random(8, maxNumberOfSymbol));
    this.speed = round(random(5, 10));

    this.generateStream = function (x, y) {
        for (var i = 0; i <= this.totalSymbols; i++) {
            symbol = new Symbol(
                x,
                y,
                this.speed
            );
            symbol.first = (i == 0) ? true : false;
            symbol.setSymbol();
            this.symbols.push(symbol);
            y -= fontSize;
        }
    };
    this.renderStream = function () {
        this.symbols.forEach(function (symbol) {
            if (symbol.first == true) {
                fill(255);
            } else {
                fill(0, 255, 65);
            }

            text(symbol.unicodevalue, symbol.x, symbol.y);
            symbol.move();
            symbol.setSymbol();
        }

        );


    };
}
