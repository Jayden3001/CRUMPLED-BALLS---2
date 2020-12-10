class Dustbin{
 constructor(x,y,w,h){
     var option={
         isStatic:true
     }
     this.image=loadImage("dustbingreen.png")
    this.body=Bodies.rectangle(x,y,w,h,option)
    this.w=w
    this.h=h
    World.add(world,this.body)

 }
  display(){
  var pos=this.body.position

  fill("blue")
  //rectMode(CENTER)
  //rect(pos.x,pos.y,this.w,this.h)
  imageMode(CENTER)
  image(this.image,390,600,200,200)

 }
}