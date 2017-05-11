function Snake(){
	this.position = createVector(0,0);
	this.position.mult(scl);
	this.xspeed = 0;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];
	
	this.dir = function(x, y){
		if((this.xspeed + x === 0 && x != 0) || ((this.yspeed + y === 0) && y !=0)){
			return;
		}
		this.xspeed = x;
		this.yspeed = y;
	}
	
	this.death = function(){
		if(this.position.x >= width-1 || this.position.x < 0 || this.position.y >= height-1 || this.position.y < 0){
			this.die();
		}
		
		for(var i = 0; i < this.tail.length; i++){
			var pos = this.tail[i];
			var d = dist(this.position.x, this.position.y, pos.x, pos.y);
			if(d<1){
				this.die();
			}
		}
	}
	
	this.die = function(){
		print("You died, starting over");
		this.total = 0;
		this.tail = [];
		var cols = floor(width/scl);
		var rows = floor(height/scl);
		var place = createVector(floor(random(cols)), floor(random(rows)));
		place.mult(scl);
		this.position = place;
		this.xspeed = 0;
		this.yspeed = 0;
		food = pickLocation();
	}
	
	this.shorten = function(){
		if(this.tail.length === 0) this.die();
		this.total--;
		this.tail.splice(this.total.length-1, 1);
	}
	
	
	this.update = function() {
		if(this.total === this.tail.length){
			for(var i = 0; i < this.tail.length -1; i++){
			this.tail[i] = this.tail[i+1];
		}
		}
		this.tail[this.total-1] = createVector(this.position.x, this.position.y);
		
		this.position.x = this.position.x + this.xspeed*scl;
		this.position.y = this.position.y + this.yspeed*scl;
	}
	
	this.eat = function(pos){
		
		var d = dist(this.position.x, this.position.y, pos.x, pos.y);
		if(d<1){
			print("test");
			return true;
		} else {
			return false;
		}
		
	}
	
	this.show = function(){
		fill(200, 40, 200);
		for(var i = 0; i < this.total; i++){
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		
		rect(this.position.x, this.position.y, scl, scl);
	}
	
	
}