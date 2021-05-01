class Player
{
constructor()
{
this.name=null;
this.distance=0;
this.index=0;
}

getCount()
{
   database.ref("playerCount").on("value",function(data){playerCount=data.val()})
   console.log("i am player")
}

updateCount()
{
   database.ref("/").update({playerCount:this.index})
}

update()
{
    var playerIndex="players/player"+this.index
    database.ref(playerIndex).set({Name:this.name,Distance:this.distance})
}

static getInfo()
{
   database.ref("players").on("value",function(data){allPlayers=data.val()})
}
}