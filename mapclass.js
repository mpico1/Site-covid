let x = 0;
function setup(){
    createCanvas(800, 800);
  }
  
  function draw(){
    background(blue);
    fill(0);
    beginShape();
        for(let i = 0; i < 800; i = i + 5){
            x=x+i-400;
            vertex(i, noise(x)*300);
        }
        endShape(CLOSE);
  }

/*class Mapa{
    constructor(max, min){
        this.maxh = max;
        this.minh = min;
    }
    montanhas(this.maxh, this.minh){
        
    }
}*/