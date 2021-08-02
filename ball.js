class Ball{
    constructor(x, y, w, h){
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h);
        World.add(world, this.body);
    }

    reveal(){
        pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        ellipse(x, y, this.w, this.h);
        pop();
    }
}