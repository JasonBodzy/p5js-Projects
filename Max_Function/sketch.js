// Maximum Function By Jason Bodzy
// Returns the largest number out of an array of integers

function setup() {
  createCanvas(400, 400);
  test_list = [400, 0.5, 100]; //Input 
  print(maximum(test_list));
}


function maximum(list){
  largest = list[0];
  for(var i in list){
    current = list[i];
    if(current > largest){
      largest = current;
    }
    
  }
  
  return(largest); //returns largest integer
  
}

