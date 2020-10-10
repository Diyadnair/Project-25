class Paper{
	constructor(x,y,radius){
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:0.5
		}
	
	this.body = Bodies.circle(x,y,radius/2,options);
	this.radius = radius;
	this.image = loadImage("Paper.png");

	World.add(world, this.body);
	
	}
	
    display(){ 
		var pos = this.body.position;		
		push();
		imageMode(CENTER)
		image(this.image,pos.x,pos.y,this.radius, this.radius);
		pop()
	}

}
   