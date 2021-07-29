class Plinko{
    constructor(x,y){ 
        var options = {
        isStatic:true,
        friction:0,
        restitution:1
        }
        this.d = 10
this.body=Bodies.circle(x,y,this.d,options)
World.add(world,this.body)

    }
    display(){
        var pos =this.body.position;
        var angle = this.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);

        fill(255)
        ellipse(0,0,this.d,this.d);
        pop();
    }
}