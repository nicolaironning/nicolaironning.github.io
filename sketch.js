var pos;
var pointer;
var dir;
var thrown;

function setup() {
    createCanvas(400,1000);
    pos = createVector(200,960);
    pointer = 200;
    dir = 0;
    thrown = false;
}

function draw() {
    background(180,126,0);
    noStroke();
    fill(84,30,0);
    rect(0,0,80,1000);
    rect(320,0,80,1000);
    fill(0,0,0);
    rect(80,47,240,3);
    rect(80,97,240,3);
    rect(80,147,240,3);
    rect(80,350,240,3);
    rect(80,650,240,3);
    rect(80,953,240,3);
    rect(80,903,240,3);
    rect(80,853,240,3);
    textSize(32);
    text("4", 190, 34);
    text("3", 190, 84);
    text("2", 190, 134);
    text("1", 190, 250);
    text("4", 190, 990);
    text("3", 190, 940);
    text("2", 190, 890);
    text("1", 190, 760);
    fill(255,0,0);
    stroke(0,0,0);
    strokeWeight(1);
    ellipse(pos.x,pos.y,30,30);
    
    if(!thrown) {
        strokeWeight(3);
        stroke(0,255,0);
        line(pos.x,pos.y, pointer, 900);

        if(dir == 0) {
            pointer--;
        } else {
            pointer++;
        }

        if(pointer < 150) {
            dir = 1;
        } else if(pointer > 250) {
            dir = 0;
        }
    }
    else {
        if(pos.x < 360) {
            pos.x += 5;
            pos.y -= 10;
        } else {
            text("LOL du er like \ndarlig som Herman", 100, 500);
        }
    }
}

function keyPressed() {
    if(!thrown) {
        thrown = true;
    } else {
        pos.x = 200;
        pos.y = 960;
        thrown = false;
    }
}