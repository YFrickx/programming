function Food(){
	
	
	this.findPos = function(poisonList){
		var place = pickLocation();
		for(var i = 0; i < poisonList; i ++){
			if(poisonList[i].equa)
		}
	}
	
	this.show = function(){		
		fill(200,0,0);
		stroke(200,0,0);
		for(var i = 0; i < this.list.length; i++){
			rect(this.list[i].x, this.list[i].y, scl, scl);
		}
	}
	
	this.eat = function(index){
		this.list[index] = pickLocation();
	}
	
	
}