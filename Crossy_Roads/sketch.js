// Crossy Roads by Jason Bodzy

grid = [];
obstacles = [];
newRoad = false;
function setup() {
  createCanvas(400, 400);
  player = new Player();
}

function draw() {
  background(220);
  
  //Creates tile system
  
  grid.push(line(0,50,400,50),line(0,100,400,100),line(0,150,400,150),line(0,200,400,200),line(0,250,400,250),line(0,300,400,300),line(0,350,400,350));
  grid.push(line(50,0,50,400),line(100,0,100,400),line(150,0,150,400),line(200,0,200,400),line(250,0,250,400),line(300,0,300,400),line(350,0,350,400));
  
  for (var i = 0; i < obstacles.length; i ++ ) { 
    obstacles[i].update();
  }

  player.update();

}
