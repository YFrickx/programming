function Wall(){
	
	this.list = [];
	this.length = 8;
	this.start = [];
	this.start[0] = createVector(2,4);
	this.start[1] = createVector(10,10);
	this.start[2] = createVector(30,20);
	
	
	this.populateList = function(){
		
		for(var i = 0; i < 3; i++){
			var vec = createVector(1,0);
			vec.mult(scl);
			var tempStart = this.start[i].mult(scl);
			this.list[i] = tempStart;
			var following = tempStart;
			for(var j = 0; j < this.length; j++){
				following = p5.Vector.add(following, vec);
				this.list[this.length*i +j] = following;
			}
		}
	}
	
	this.checkPos = function(pos){
		for(var i = 0; i < this.list.length; i++){
			if(dist(this.list[i].x, this.list[i].y, pos.x, pos.y) < 1) return i;
		}
		return -1;
	}
	
	this.show = function(){		
		fill(255);
		for(var i = 0; i < this.list.length; i++){
			rect(this.list[i].x, this.list[i].y, scl, scl);
		}
	}
	
	
}