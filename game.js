class Game{
    constructor()
    {

    }

    getState()
    {
        database.ref("gameState").on("value",function(data){gameState=data.val()})
        console.log("i am game")
    }
    updateState(state)
    {
        database.ref("/").set({gameState:state})
    }
    start()
{
    if(gameState===0)
    {
        player= new Player()
        player.getCount()
        form= new Form()
        form.display()
    }
}
play()
{
    background("green")
    Player.getInfo()
    form.greeting.hide()
    if(keyDown(UP_ARROW))
    {
        player.distance+=10
        player.update()
    }

}
}