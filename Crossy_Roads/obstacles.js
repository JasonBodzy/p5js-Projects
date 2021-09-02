function loadObstacle(){
  obstacle = int(random(1,3));
  if(obstacle == 1){
    obstacles.push(new road());
  }
  if(obstacle == 2){
    obstacles.push(new ground());
  }

      
  for (var i = 0; i < obstacles.length; i ++ ) { 
    obstacles[i].y += 50;
  }
  
  
  
}

class road{
  constructor(){
  	this.y = -50;
    
    this.direction = int(random(0,2));
    
  	fill(100);
  	this.road = rect(0, this.y, 400, 50);  
    
  	this.incrament = random(0, 6);
    
    if (0 < this. incrament && this.incrament < 1){
  			this.incrament += 1;
    }
    
    if(this.direction == 0){
        this.incrament *= -1;
    }
    
  	if(this.incrament > 0){
      	this.x = 0;
  	}else{
      	this.x = width;
    }
    
    
    this.r = random(0,256);
    this.g = random(0,256);
    this.b = random(0,256);
    fill(this.r, this.g, this.b); 
    this.car = rect(this.x, this.y + 15 , 40, 20);
    
  }
  update(){
    //this.y += 1;
    fill(100);
    this.road = rect(0, this.y, 400, 50);  
    
    fill(this.r, this.g ,this.b);
    this.car = rect(this.x, this.y + 15 , 40, 20);
    this.x += this.incrament;
    
    
    if(this.x > width){
      this.x = 0 - 40;
      this.r = random(0,256);
      this.g = random(0,256);
      this.b = random(0,256);
      this.incrament = random(0,6);
      if (0 < this. incrament && this.incrament < 1){
  			this.incrament += 1;
      }
    }
    
    if(this.x < 0 - 40){      
      this.x = width;
      this.r = random(0,256);
      this.g = random(0,256);
      this.b = random(0,256);
      this.incrament = random(0,6);
      if (0 < this. incrament && this.incrament < 1){
  			this.incrament += 1;
      }
      this.incrament *= -1;
    }
    
    if((player.x  >= this.x && player.x <= this.x + 40) || (player.x + 50 >= this.x && player.x + 50 <= this.x + 40)){
    	if(player.y + 25 >= this.y + 15 && player.y + 25 <= this.y + 35){
    		remove();
    	}
    }
    
  }
}


class ground{
  constructor(){
    this.y = -50;
    fill(0, 255, 25);
    this.grass = rect(0, this.y, 400, 50);
  }
  update(){
    fill(0,255,25);
    this.grass = rect(0, this.y, 400, 50);
  }
}

class water{
  constructor(){
    this.y = -50;
    //fill(139,69,19);
    fill(0,0,256);
    this.water = rect(0, this.y, 400, 50);
    this.log = rect(this.x, this.y + 5, this.width, 40);
    
    this.direction = int(random(1,3));
    this.incrament = int(random(1,4));
    
    this.width = int(random(50, 100));
    
    if(this.direction == 0){
      this.incrament *= -1;
      this.x = width;
    }else{
      this.x = 0 - this.width;
    }
    
    
  }
  update(){
    fill(0,0,256);
    this.water = rect(0, this.y, 400, 50);
    
    fill(139,69,19);
    this.log = rect(this.x, this.y + 5, this.width, 40);
    this.x += this.incrament;
    
    
  }
}
