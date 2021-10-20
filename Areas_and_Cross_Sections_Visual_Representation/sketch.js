 // Press Space to visualize cross sections and print areas

//By Jason Bodzy

function setup() {
  createCanvas(400, 400);
  pos1 = 1;
  
 //Square objects
 
  square1 = new boxc();
  square1.x = 0;
  square1.y = 0;
  square1.width = 100;
  square1.height = 100;
  square1.color = "LIME";
  square1.incrament = 1;
  
  
  square2 = new boxc();
  square2.width = 100;
  square2.height = 100;
  square2.x = width - square2.width;
  square2.y = height - square2.height;
  square2.color = "RED";
  square2.incrament = -1;
  
  
  stopped = false;
}

function draw() {
  background(220);
  square1.update();
  square2.update();
  
      fill(color("MAGENTA"))
  
  if(stopped == true){
    pos1 = 0;
    neg1 = 0;
    fill(color("MAGENTA"))
    
    if(square1.y < square2.y){
      potwidth = square1.width - (square1.width - ((square1.x + square1.width) - square2.x));
      potheight = square1.height - (square1.height - ((square1.y + square1.height) - square2.y));
      rect(square2.x , square2.y, potwidth, potheight);
    }else{
      potwidth = square2.width - (square2.width - ((square2.x + square2.width) - square1.x));
      potheight = square2.height - (square2.height - ((square2.y + square2.height) - square1.y));
      rect(square1.x , square1.y, potwidth, potheight);
    }
    
    print("Area: " + potwidth * potheight);
    
  }
  if(stopped == false){
    pos1 = 1;
    potwidth = 0;
    petheight = 0;
  }

}

function keyPressed(){
  if(key == ' '){
    if(stopped == false){
      stopped = true; 
    }else{
     stopped = false; 
    }

   
  
  }
  
}

class boxc{
  constructor(){
    this.x;
    this.y;
    this.width;
    this.height;
    this.incrament;
    this.previousincrament;
  }
  
  update(){
    fill(color(this.color));
    rect(this.x,this.y,this.width,this.height);
    this.x += this.incrament * pos1;
    this.y += this.incrament * pos1;
    
    

      if(this.x >= width - this.width && this.incrament == 1){
         this.incrament = -1;
      }

      if(this.x <= 0 && this.incrament == -1){
         this.incrament = 1;
      }
    
    
  }
  
}
