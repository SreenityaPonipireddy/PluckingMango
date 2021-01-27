class Sling{
    constructor(bodyA, pointB)
    {
        var options={
            bodyA: bodyA,
            pointB: pointB,
           stiffness: 0.004,
           length:1
        }
        this.sling=Constraint.create(options);
        this.pointB=pointB;
        //this.width=20;
        //this.height=100;
        //this.image = loadImage("sprites/stone.png")
        World.add(world, this.sling);
    }
    fly(){
this.sling.bodyA=null
    }
display(){
    if(this.sling.bodyA){
    this.pointA=this.sling.bodyA.position 
    this.pointB=this.pointB
    line(pointA.x, pointA.y, pointB.x, pointB.y);

}
}


}


