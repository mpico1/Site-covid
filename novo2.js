let dot = [];
let lives1 = [];
let lives2 = [];
let lives3 = [];
let place = 25;
let placeInc = 0.1;
let grap;
let date = 1;

function inicio(){
  background(0);
  fill(255);
  text("tempo: " + date,340,35);
  for(let i = 100; i >= 0; i -=25){
      let h = map(i,100,0,20,380);
      text(i +"%" , 0 , h+4);
      stroke(255,255,255);
      line(25,h,400,h);
      noStroke();
    }
}

function setup() {
  
  createCanvas(400, 800);
  grap = createGraphics(400,400);
  fill(255);
  inicio();
  
  for(let k = 20; k < 400; k+=20){
  for(let i = 20; i< 400; i+=20){
    dot.push(new Dot(i,k,0));
  }
  } 
  dot[200].inf = 0.4;
}


function draw() {
  noStroke();
  let inf0 =0;
  let inf1 =0;
  let inf2 =0;
  let inf3 =0;
  grap.background(255);
  
  
 
  for(let j = 0; j < dot.length; j++){
    
    dot[j].show();
    dot[j].move();
    dot[j].Time();
    if(dot[j].inf == 0){
      inf0 ++;
    }
    if(dot[j].inf == 1){
      inf1 ++;
    }
    if(dot[j].inf == 2){
      inf0 ++;
    }
   if(dot[j].inf == 3){
      inf3 ++;
    }
    
    
    
    if(dot[j].inf == 1){
    for(let i = 0; i < dot.length; i++){
      
      if(dot[i].inf == 0){
        let dist = sqrt(sq(dot[i].x-dot[j].x)+sq(dot[i].y-dot[j].y));
        let prob = random(100);
        if(dist < 10 && prob > 70){
          dot[i].inf = 0.4;
          
}}}}
   
  }
    let l1 = map(inf0 + inf2,0,dot.length,380,20);
    lives1.push(l1);
    let l2 = map(inf1,0,dot.length,380,20);
    lives2.push(l2);
    let l3 = map(inf3,0,dot.length,380,20);
    lives3.push(l3);
    
    drawgrap(l1,l2,l3);
  
    
  
  if(place >= 400 && inf1 !=0){
    date ++;
    inicio();
    placeInc = placeInc/2
    place = 25;
    
    for(let i = 0; i < lives1.length; i++){
       drawgrap(lives1[i],lives2[i],lives3[i]);
    
     } 
    
    
  }
  image(grap,0,400);

}
function drawgrap(l1,l2,l3){
  
  fill(255,255,255);
    ellipse(place,l1,2,2);
    fill(255,0,0);
    ellipse(place,l2,2,2);
    fill(100,100,100);
    ellipse(place,l3,2,2);
    place += placeInc;
    
}









class Dot{
  constructor(x,y,inf){
    this.x = x;
    this.y = y;
    this.xn = random(10000);
    this.yn = random(10000);
    this.inf = inf
  }
  Time(){
    this.prob2 = random(100);
    if(this.inf == 0.4){
      
      this.time = 1000;
      this.inf = 0.5;
    }
    this.time -= 1;
    if(this.time == 750){
      this.inf = 1
    }
    if(this.time == 0){
      if(this.prob2<90){
        this.inf = 2;
      }
      else{
      this.inf = 3;
    }
    }
  }
    
      
    
  show() {
    
    grap.noStroke();
    if(this.inf == 0){
      grap.fill(0,0,0);
    }
    if(this.inf == 0.5){
      grap.fill	(255,159,88);
    }
    if(this.inf == 1){
      grap.fill(255,0,0);
    }
    if(this.inf == 2){
        grap.fill(0,255,0);
    } 
    if(this.inf == 3){
      
      grap.fill(100,100,100);
    }
    
    grap.ellipse(this.x,this.y,10,10)
  }  
  move() {
    this.xn +=0.01;
    this.yn += 0.01;
    this.x +=map(noise(this.xn),0,1,-1,1);
    this.y +=map(noise(this.yn),0,1,-1,1);
    if(this.x < 0){
      this.x=400;
    }
    if(this.x > 400){
      this.x =0;
    }
     if(this.y < 0){
      this.y=400;
    }
    if(this.y > 400){
      this.y= 0;
    }
    if(this.inf == 3){
      this.x = 10;
      this.y = 10;
    }
  }
}