class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage= loadImage("sprites/smoke.png")
    this.trajectry= []
  }

  display() {
    // this.body.position.x = mouseX;
   // this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x>10);
    var position = [this.body.position.x,this.body.position.y]
    this.trajectry.push(position);

    for(var i =0;i<this.trajectry.length;i++){
    image(this.smokeImage,this.trajectry[i][0],this.trajectry[i][1])
    }
  }
}
