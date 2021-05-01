var  database;
var gameState=0;
var playerCount=0;
var player,game,form;
var allPlayers;


function setup(){
  database = firebase.database();
  console.log("database");
  createCanvas(800,500);

  game= new Game()
  game.getState()
  game.start()
}

function draw(){
  background("yellow");
  
  /* if(playerCount==2)
   {
    game.updateState(1)
    game.play()
   }*/
   
  
}

