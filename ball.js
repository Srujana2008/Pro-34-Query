class Ball{
    constructor(x, y, r){
        var options = {
            restitution:0.01
        }
        this.r = r; 
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }

    reveal(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        ellipse(0, 0, this.r);
        pop();
    }
}
