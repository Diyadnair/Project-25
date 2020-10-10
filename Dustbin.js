class Dustbin{
	constructor(x,y,width,height){
		var options = {
			isStatic:true
		}

	this.image = loadImage("Dustbin.png");
	this.body = Bodies.rectangle(x,y,width,height,options);
	this.width = width;
	this.height = 200;

	World.add(world,this.body);
	}
	
	display(){
		var pos = this.body.position;
		push();
		imageMode(CENTER);
		image(this.image,pos.x,pos.y-90,this.width,this.height) ;
		pop();
		
	}

}
	
