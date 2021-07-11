class PlayerArrow {
    constructor(x, y, width, height, archerAngle) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true,
        frictionAir : 0.05
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("assets/arrow.png");
      World.add(world, this.body);
    }
  
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
     
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }

    shoot(){ 
        var velocity = p5.Vector.fromAngle(this.body.angle);
        velocity.mult(50);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y })  
    }
  }
  