var backgroundImage
var cat, catImage
var rat, mouseImage
function preload() {
    //load the images here
    backgroundImage = loadImage("images/garden.png");
    catImage = loadImage("images/tomOne.png");
    mouseImage = loadImage("images/jerryOne.png");
    catImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
}
function setup(){
    createCanvas(1000,1000);
    //create tom and jerry sprites here
    cat = createSprite(800, 880, 100, 100);
    cat.addImage(catImage);
    cat.scale = 0.2;
    rat = createSprite(200, 860, 100, 100);
    rat.addImage(mouseImage);
    rat.scale = 0.2;
    text(mouseX + ',' + mouseY, 10, 45);
}

function draw() {

    background(backgroundImage);

    //Write condition here to evalute if tom and jerry collide

    if(cat.x - rat.x <= (cat.width-rat.width)/2) {
        cat.velocityX = 0;
        console.log("hi");
    }
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");


    }

  //For moving and changing animation write code here


}
