class Enemy {
    constructor(x, y,width,height) {
      var options = {
       isStatic:false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("enemy.png")
      World.add(world, this.body);
    }
    display(){
        if((this.body.speed)<2.5){
}else
{
World.remove(world,this.body)
}
      var pos =this.body.position;
      push();

      imageMode(CENTER);
      image(this.image,pos.x,pos.y, this.width, this.height);
      pop();
    }
  };