class DivisionClass{
    constructor(x, y, w, h){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    showDivisions(){
        rectMode(CENTER);
        var pos2 = this.body.position;
        fill("white");
        rect(pos2.x, pos2.y, this.w, this.h);
    }
}