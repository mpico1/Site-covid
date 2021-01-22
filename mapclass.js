let x = 0;
let ac = -0.7;
let dir = 1;
let xalt = 0;
let vari = 0;
function setup(){
    createCanvas(800, 800);
    bola = new mob(0);
    eu = new Eu(0);
  }
  
  function draw(){
    background (161,202,241);
    text(x,10,10);
    fill(132,192,17);
    ground();
    eu.show();
    eu.jump();
    eu.move();
    bola.move();
    bola.show();
  }

function ground(){
  beginShape();
      vertex(0,800);
        for(let i = 0; i < 800; i++){
            alturah(i);
            vertex(i, altura);
        }
      vertex(800,800);
        endShape(CLOSE);
}
 function alturah(i){
            bx=(x+i-400)*0.001;
            sx=(x+i-400)*0.05;
            altura = noise(bx)*800+noise(sx)*10;
            return altura;
}
class Eu{
    constructor(pos){
      this.x = pos;
      this.jumpf = 5
      this.vel = 0;
      this.y = 100;
    }
      jump(){
      if ((keyIsDown(UP_ARROW)) && (this.y >= alturah(400))) {
        this.vel = 10;

     }
      }
    move(){
      vari = 0;
    if (keyIsDown(LEFT_ARROW)) {
      dir =-1
      vari = -5;
    }

   if (keyIsDown(RIGHT_ARROW)) {
     dir = 1;
      vari = 5;
   }
    
      x += vari
    }
  
    show(){
    fill(255,0,0);
    this.vel = this.vel + ac;
    if(this.y > alturah(400)){
        this.vel =0;
        this.y = alturah(400);
    }
    this.y = this.y-this.vel;
    rect(400-10, this.y-30, 20,30);
    fill (241, 194, 125);
    rect(400-10,this.y-50,20,20);
    fill(100);
    rect(400, this.y-45, 5*dir,5);
    fill(141, 85, 36);
    rect(400-10,this.y-55,20,5);
  }
}
class mob{
  constructor(pos){
    this.x = x;
    
  }
  move(){
    this.x =1+this.x-vari;
    this.y = alturah(this.x);
  }
  show(){
    fill(10);
    rect(this.x, this.y-30, 20,30);
  }

}
