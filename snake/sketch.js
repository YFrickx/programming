var s;
var p;
var w;
var scl = 14;

var food;
var numPoison = 20;


function setup() {
	createCanvas(550,550);
	
	s = new Snake();
	p = new Poison();
	w = new Wall();
	
	frameRate(15);
	food = pickLocation();
	p.populateList(numPoison);
	w.populateList();
}

function pickLocation(){
	var object;
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	object = createVector(floor(random(cols)), floor(random(rows)));
	object.mult(scl);
	if(object === food) object = pickLocation;
	if(p.checkPos(object) >= 0) object = pickLocation;
	return object;
}

function draw() {
	var array = [];
	background(51);
	
	var index = p.checkPos(s.position);
	
	if(index >= 0){
		//s.die();
		s.shorten();
		p.eat(index);
	}
	
	
	s.death();
	s.update();
	p.show();
	s.show();
	w.show();
	
	if(s.eat(food)){
		s.total++;
		food = pickLocation();
	}
	
	

	
	fill(0,200,40);
	rect(food.x, food.y, scl, scl);
	
	
	
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		s.dir(0,-1);
	}
	else if (keyCode === DOWN_ARROW){
		s.dir(0,1);
	}
	else if (keyCode === LEFT_ARROW){
		s.dir(-1,0);
	}
	else if (keyCode === RIGHT_ARROW){
		s.dir(1,0);
	}
}