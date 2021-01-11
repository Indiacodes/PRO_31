class Particles{
    constructor(x, y, r){
        this.body = Bodies.ciircle(x, y, this,r,options);
        this.color = color(random(0, 255), random(0,255), random(0, 255));
        this.r = r;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }

    showParticles(){
        ellipseMode(CENTER);
        var pos3 = this.body.position;
        push();
        fill(this.color);
        circle(pos3.x, pos3.y, pos3.r);
        pop();

    }
}