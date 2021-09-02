//Flappy Bird By Jason Bodzy
let bird;

let pipeTime= false;
let pipes = [];


let gravity = 0.7;
let lift = -12;

let x = 400;

let y;

let jump;
let velocity = 0;

function setup() {
  createCanvas(400, 400);
  y = height / 2;
}

function draw() {
  background(225);
  fill(200, 0, 0);
  bird = ellipse(100, y, 20, 20);
  fill(244, 229, 66);
  wing = ellipse(100, y, 20, 5);
  velocity += gravity;
  y += velocity;

  if(frameCount % 75 == 0){
     spawnPipe();
     }


  for(let i = 0; i < pipes.length; i++){
    pipes[i].update();


  }



  if (x < 0){
    x = 400;
  }

  if(y < 0){
   y = 0;
   velocity = 0;
  }
  if(y > height){
    y = height;
    velocity = 0;
  }

}


function spawnPipe(){

  for(let i = 0; i < 1; i++){
      pipes.push(new pipe());
  }


}

function keyPressed(){
  if(key == ' '){
  velocity += lift;
  }
}

class pipe{

  constructor(){
      this.pipex = 400;
      this.pipey = random(100, 350);
      this.pipea = rect(this.pipex, this.pipey, 10, 400);
      this.pipeb = rect(this.pipex, this.pipey - 475 , 10, 400);


  }

  update(){

      fill(66, 244, 101);

      this.pipea = rect(this.pipex, this.pipey, 10, 400);
      this.pipeb = rect(this.pipex, this.pipey - 475, 10, 400);

      this.pipex += -2;

      if(this.pipex < 0){

       }




    if(100 >= this.pipex && 100 <= this.pipex + 10){

      if(y >= this.pipey  || y <= this.pipey - 75){


            remove();

          }

     }


  }


}
