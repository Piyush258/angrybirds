class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    // change the angle of the body
    Matter.Body.setAngle(this.body, angle);
  }
}