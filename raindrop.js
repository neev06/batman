class Raindrops {
    constructor(x, y, radius) {

        var options ={
          
            friction:0.1,
            density:0.1
        }

        this.radius=radius;
        this.body = Bodies.circle(x, y, this.radius,options);       
        this.color=color("blue");
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius,this.radius);
        pop();
    }

    rePosition() {
               
        Matter.Body.setPosition(this.body, {x:random(0, 800), y:random(0, 800)});
    }
    
};