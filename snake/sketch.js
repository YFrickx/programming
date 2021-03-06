var s;
var p;
var w;
var scl = 16;

var food;
var numPoison = 20;


function setup() {
	createCanvas(600,600);
	
	s = new Snake();
	p = new Poison();
	w = new Wall();
	
	frameRate(60);
	food = pickLocation();
	p.populateList(numPoison);
}

function pickLocation(){
	var object;
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	object = createVector(floor(random(cols)), floor(random(rows)));
	object.mult(scl);
	if(object.equals(food)) object = pickLocation();
	print(object);
	if(p.checkPos(object) >= 0) object = pickLocation();
	print(object);
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
	
	if(s.xspeed === 0 && s.yspeed ===0){
		//Nop
	}
	else{
		s.death();
		s.update();	
	}
	
	p.show();
	s.show();
	
	if(s.eat(food)){
		s.total++;
		food = pickLocation();
	}
	
	fill(0,200,40);
	noStroke();
	rect(food.x, food.y, scl, scl);
	
	
	
	
}

function printlocations(){
	print("food:");
	print(food.x, food.y);
	print("poison:");
	p.printlist();
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
	} else if(keyCode === ENTER){
		s.stop();
	} else if(keyCode === SHIFT){
		food = pickLocation();
	}
}