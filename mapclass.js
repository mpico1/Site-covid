let x = 0;
let y = 0;
let dir = 1;
let yac = -0.01;
let yvel = 0;
function setup(){
    createCanvas(800, 800);
  }
  
  function draw(){
    background (161,202,241);
    fill(132,192,17);
    ground();
    teclas();
    eu();
    
  }

function teclas(){
    if ((keyIsDown(32)) && (y >= alturah(400))) {
      yvel = 10;
   }
    if (keyIsDown(LEFT_ARROW)) {
      dir = -1
      x -= 5;
    }

   if (keyIsDown(RIGHT_ARROW)) {
     dir = 1
      x += 5;
   }

}


function eu(){
    fill(255,0,0);
  yac =-0.5
    yvel = yvel + yac;
    if(y > alturah(400)){
        yac = 0;
        yvel =0;
        y = alturah(400);
    }
    y = y-yvel;
    rect(400-10, y-30, 20,30);
    fill (241, 194, 125);
    rect(400-10,y-50,20,20);
    fill(100);
    rect(400, y-45, 5*dir,5);
    fill(141, 85, 36);
    rect(400-10,y-55,20,05);
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

