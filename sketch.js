var diverImg, heartImg, pearlImg, sharkImg, starFishImg, underwaterImg, venusFlyTrapImg, bgImg;
var game, form, player;
var allPlayers;
var players, player1, player2, pearl;
var obs1, starFishGrp;
//var obs2, heartGrp;
var obs2, sharkGrp;
//var obs4, venusFlyTrapGrp;
var playerCount;
var gameState = 0;

function preload() {
    diverImg = loadImage("Diver.png");
    heartImg = loadImage("Heart .png");
    pearlImg = loadImage("pearl.png");
    sharkImg = loadImage("Shark .png");
    starFishImg = loadImage("Starfish .png");
    underwaterImg = loadImage("underwater.jpg");
    venusFlyTrapImg = loadImage("Venus Flytrap .png");
    
    bgImg = loadImage("background.jpg");
}
function setup() {
    database = firebase.database();
    createCanvas(displayWidth - 30, displayHeight - 50);
    //console.log(database);
    game = new Game();
    game.getState();
    game.start();
    // bgSprite = createSprite(displayWidth/2,displayWidth/2,displayWidth,displayWidth)
    // bgSprite.addImage(bgImg)

}

function draw() {
    
    if (playerCount === 2) {
        game.updateState(1);
    }
    if (gameState === 1) {
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }

}

