class Drop{
constructor(){
    var options ={
        restittution:1
    }
    this.body=Matter.Bodies.circle(random(0,600),random(0,400),5,options);
    World.add(world,this.body); 
    
}
display (){
    var pos=this.body.position;
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,5,5);
   
    if(pos.y>750){
        Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,400)});
    }
}
}