class Form
{
constructor()
{
this.title=createElement("h1")
this.iname=createInput("Enter Name")
this.button=createButton("PLAY")
 this.greeting=createElement("h3")
}
display()
{
    this.title.html("CAR RACING")
    this.title.position(450,100)
    console.log("i am form")
    this.iname.position(450,300)
    this.button.position(450,400)

    this.button.mousePressed(()=>
    {

        this.iname.hide()
        this.button.hide()
        player.name=this.iname.value()

        playerCount++;
        player.index=playerCount; 
        player.updateCount()


         player.update()

        this.greeting.html("HI! WELCOME "+player.name)
        this.greeting.position(450,300)


    })
    

    
}
}