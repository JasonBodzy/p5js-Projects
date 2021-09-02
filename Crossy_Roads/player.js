

class Player{
  constructor(){
  fill(256);
  this.x = 200;
  this.y = 350;
  this.body = rect(this.x, this.y, 50,50);
  }
  update(){
  fill(256);
  this.body = rect(this.x, this.y, 50,50);
  if(this.y <= 150){
    this.y = 150;
    this.ytest = false;
  }else{
    this.ytest = true;
  }
  if(this.y >= 350){
    this.y = 350;
  }
  if(this.x <= 0){
    this.x =0;
  }
  if(this.x >= 350)
  	this.x = 350;
  }
}

function keyPressed(){
  if(key == 'w'){
    if(player.ytest == true){
    player.y -= 50;
    }else{
    loadObstacle(); 
    }
  }
  if(key == 's'){
    player.y += 50;
  }
  if(key == 'a'){ 
    player.x -= 50;
  }
  if(key == 'd'){
    player.x += 50;
  }
}