class Paper{

    constructor(x,y,r){
        var option={
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(x,y,r/4,option)
        this.radius=r
        World.add(world,this.body)

    }
    display(){
     var pos=this.body.position
     push()
     translate(pos.x,pos.y)
     //ellipseMode(CENTER)
     strokeWeight(3)
     fill(255,0,255)
     //ellipse(0,0,this.r,this.r)
     imageMode(CENTER)
     image(this.image,0,0,this.radius,this.radius)
     pop()
    }
}
