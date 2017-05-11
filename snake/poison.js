function Poison(){
	
	this.list = [];
	
	
	this.populateList = function(num){
		for(var i = 0; i < num; i++){
			this.list[i] = pickLocation();
		}
	}
	
	this.checkPos = function(pos){
		print(pos);
		for(var i = 0; i < this.list.length; i++){
			if(this.list[i].equals(pos)) return i;
		}
		return -1;
	}
	
	this.show = function(){		
		fill(200,0,0);
		noStroke();
		for(var i = 0; i < this.list.length; i++){
			rect(this.list[i].x, this.list[i].y, scl, scl);
		}
	}
	
	this.eat = function(index){
		this.list[index] = pickLocation();
	}
	
	this.printlist = function(){
		for(var i = 0; i < this.list.length; i++){
			print(this.list[i].x, this.list[i].y)
		}
		
	}
	
}