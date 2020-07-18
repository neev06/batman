class Lightning{
    constructor(x, y){
        var options = {
            isStatic:true,
        }
        this.x = x;
        this.image = loadImage("lightning.png");
        this.body = Bodies.rectangle(x, y, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;

        translate(pos.x, pos.y);
       
        noStroke();
        fill("white");

        image(this.image, random(200, 600), 0);

    }

};