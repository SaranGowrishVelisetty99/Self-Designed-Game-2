var gamebg;
var wall1, wall2, wall3, wall4, maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8 , maze9, maze10, maze11, maze12, maze13,
    maze14, maze15, maze16, maze17, maze18, maze19, maze20, maze21, maze22, maze23, maze24, maze25, maze26, maze27, maze28, maze29;

function preload(){
    gamebg = loadImage("gamebg.jpg");
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    wall1 = createSprite(100,400, 5, 550);
    wall1.shapeColor = "white";

    wall2 = createSprite(748,125, 1300, 5);
    wall2.shapeColor = "white";

    wall3 = createSprite(1395,400,5, 550);
    wall3.shapeColor = "white";

    wall4 = createSprite(748, 675, 1300, 5);
    wall4.shapeColor = "white";

    maze1 = createSprite(200, 200, 5, 150);
    maze1.shapeColor = "white";

    maze2 = createSprite(300, 300, 5, 150);
    maze2.shapeColor = "white";

    maze3 = createSprite(400, 200, 5, 150);
    maze3.shapeColor = "white";

    maze4 = createSprite(500, 300, 5, 150);
    maze4.shapeColor = "white";

    maze5 = createSprite(348, 378, 500, 5);
    maze5.shapeColor = "white";

    maze6 = createSprite(200, 450, 100, 5);
    maze6.shapeColor = "white";

    maze7 = createSprite(152, 525, 5, 150);
    maze7.shapeColor = "white";

    maze8 = createSprite(200, 600, 100, 5);
    maze8.shapeColor = "white";

    maze9 = createSprite(300, 525, 5, 150);
    maze9.shapeColor = "white";

    maze10 = createSprite(350, 540, 100 ,5);
    maze10.shapeColor = "white";

    maze11 = createSprite(400, 525, 5, 150);
    maze11.shapeColor = "white";

    maze12 = createSprite(500, 525, 5, 150);
    maze12.shapeColor = "white";

    maze12 = createSprite(550, 452, 100, 5);
    maze12.shapeColor = "white";

    maze13 = createSprite(550, 530, 100, 5);
    maze13.shapeColor = "white";

    maze14 = createSprite(550, 598, 100, 5);
    maze14.shapeColor = "white";

    maze15 = createSprite(680, 525, 5, 150);
    maze15.shapeColor = "white";

    maze16 = createSprite(730, 452, 100 ,5);
    maze16.shapeColor = "white";

    maze17 = createSprite(730, 530, 100, 5);
    maze17.shapeColor = "white";

    maze18 = createSprite(730, 598, 100, 5);
    maze18.shapeColor = "white";

    maze20 = createSprite(900, 450, 100, 5);
    maze20.shapeColor = "white";

    maze21 = createSprite(850, 486, 5, 75);
    maze21.shapeColor = "white";

    maze22 = createSprite(900, 522, 100, 5);
    maze22.shapeColor = "white";

    maze23 = createSprite(948, 560, 5, 75);
    maze23.shapeColor = "white";

    maze24 = createSprite(900, 598, 100, 5);
    maze24.shapeColor = "white";

    maze25 = createSprite(1000, 525, 5, 150);
    maze25.shapeColor = "white";

    maze26 = createSprite(1050, 452, 100 ,5);
    maze26.shapeColor = "white";

    maze27 = createSprite(1050, 530, 100, 5);
    maze27.shapeColor = "white";

    maze28 = createSprite(1050, 598, 100, 5);
    maze28.shapeColor = "white";
}

function draw(){
    background(gamebg);
    drawSprites();
}