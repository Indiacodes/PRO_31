class Plinko{
    constructor(x, y){
        
        var dotOptions = {
            isStatic : true
        }

        this.dot = Bodies.circle(x, y, 10, dotOptions);
        this.x = x;
        this.y = y;
    }

    showPlinko(){
        ellipseMode(CENTER);
        var pos = this.dot.position
        
        circle(pos.x, pos.y, 10);
        World.add(world, this.dot);
    }
}