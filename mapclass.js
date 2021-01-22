let x = 0;
let y = 0;
let dir = 1;
let h = 400;
function setup(){
    createCanvas(800, 800);
  }
  
  function draw(){
    background (161,202,241)
    fill(132,192,17);
    ground();
    teclas();
    eu();
    
  }

function teclas(){
    if (keyIsDown(LEFT_ARROW)) {
      dir = 0
      x -= 5;
    }

   if (keyIsDown(RIGHT_ARROW)) {
     dir = 1
      x += 5;
   }
  if (keyIsDown(32)) {
      y += 5;
   }
}

function gravidade(){
  let ac=1
  if (true){}
}

function eu(){
  fill(255,0,0);
  y = alturah(400);
  rect(400-10, y-50, 20,50);
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

