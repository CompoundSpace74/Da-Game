var forestscene1 = false;
var forestscene1enter = false;
var inventory
var health = 100
var inventoryList = []
var charx = 450;
var chary = 400;
var fade = 0
hit = false
skele1Y = 0
skele1X = 0
var r1 = {x:200,y:200,w:50,h:50,tag: "Wood"}
var r2 = {x:500,y:200,w:50,h:50,tag: "Stone"}


//tools
var stoneaxe = false
var stonepickaxe = false
var sickle = false


var charSize = 25;
var delay = 0
InvincFramesDelay = 0
InvincFrames = 10
inventoryList.push(0,0,0,0,0)
function setup() {
    // put setup code here
    var cnv = createCanvas(1200, 800);
  var x = (windowWidth - width) / 2 + 100;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  inventory = createGraphics(300,800);
  counter = 0;
  }
function draw() {
//random number generateGrassField
const xList = [];
const yList = [];
for (let i = 0; i < 500; i++) {
xList.push(Math.random());
yList.push(Math.random());
}


var StaminaCounter = 0
var UsingStamina = false
var stamina = 100;
var start = false
var menu = false;
draw = function() {
frameRate(60)
if (start == true) {
if (forestscene1 == true) {
if (forestscene1enter) {
if (chary < 773) {
background(0)
chary += 12.8833333333
fill(20,40,255)
rect(charx, chary, 25, 25)
}
else forestscene1enter = false
}
else {
stroke(0)
background(138,154,91)
generateGrassField(0,0, 900, 800, 500, xList, yList, counter);
fill(20,40,255)
rect(charx, chary, 25, 25)
fill(0,0,0)
textSize(20)
text("FPS" + " " + round(getFrameRate(60),0), 50,50)
textSize(80)
//world border
if(charx < 2) charx = 2
if(charx > 875) charx = 873
if(chary < 2) chary = 2
if(chary > 775) chary = 773
}
}
else {
stroke(0)
background(138,154,91)
generateGrassField(0,0, 900, 800, 500, xList, yList, counter);
fill(20,40,255)
rect(charx, chary, 25, 25)
fill(0,0,0)
textSize(20)
text("FPS" + " " + round(getFrameRate(60),0), 50,50)
textSize(80)
fill(120,80,20)
rect(r1.x, r1.y, r1.w, r1.h)
fill(100)
rect(r2.x, r2.y, r2.w, r2.h)
CreateEnemy("Skele")
if (charx < 2) charx = 2
if (charx > 875) charx = 873
if (chary < 2) chary = 2
if (chary > 775) chary = 773
if(chary < 5 &&
  charx > 0 - 25 &&
  charx < 900){
    textSize(10)
   text("Press 'E' to Enter",charx - 40,chary + 35)
   if(keyIsDown(69)){
    forestscene1 = true
    forestscene1enter = true
   }
  }
 
 
RectangleCollsion(r1.x, r1.y, r1.w, r1.h, r1.tag)
RectangleCollsion(r2.x, r2.y, r2.w, r2.h, r2.tag)


}
// hit thing
var combatspeed = 25
var swingTime = 7.5
if(mouseIsPressed){
  hit = true
}
if(hit){
  if (delay < swingTime && delay > 0.1){
  fill(100)
  push()
  translate(charx + charSize/2,chary + charSize/2)
  rotate(atan2(mouseY - chary - charSize/2, mouseX - charx - charSize/2));
  rect(-2.5,-2.5,50,5)
  pop()
}
  delay += 0.5
  if(delay < combatspeed){
  }
else {
  hit = false
  delay = 0
}
}


if (inventoryList[0] > 99999) {
  inventoryList[0] = 99999
}
if (inventoryList[1] > 99999) {
  inventoryList[1] = 99999
}
if (inventoryList[2] > 99999) {
  inventoryList[2] = 99999
}
if (inventoryList[3] > 99999) {
  inventoryList[3] = 99999
}
if (health > 0) {
//key inputs and movement
if (keyIsDown(LEFT_ARROW) || keyIsDown(65)){
  if (keyIsDown(SHIFT) && stamina > 0) {
    charx -= 4.5
    UsingStamina = true
  }
  else {
    charx -= 2.5
  }
}




 
if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
  if (keyIsDown(SHIFT) && stamina > 0) {
    chary -= 4.5
    UsingStamina = true
  }
  else {
    chary -= 2.5
  }
}
 
if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
  if (keyIsDown(SHIFT) && stamina > 0) {
    chary += 4.5
    UsingStamina = true
  }
  else {
    chary += 2.5
  }
}
 
if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
  if (keyIsDown(SHIFT) && stamina > 0) {
    charx += 4.5
    UsingStamina = true
  }
  else {
    charx += 2.5
   
  }
}  
if (UsingStamina) {
  stamina -= 1.2
  UsingStamina = false
  StaminaCounter = 0;
}
else if (!UsingStamina && stamina > 5) {
  if (stamina <= 100) {
    stamina += 0.6
  }
 
}
else if (stamina < 5) {
  StaminaCounter++
  if (StaminaCounter > 100) {
    if (stamina <= 100) {
      stamina += 0.6
    }
  }
}
if (keyIsDown(86)) {
  menu = true
}
}
 








//DRAW AT END OR WILL DRAW OBJECTS OVER IT
drawInventory();
image(inventory,900,0);  
strokeWeight(3)
fill(0,0,0)
rect(950, 100, 200, 15)
rect(950, 80, 200, 15)
noStroke()
 
//Stamina
fill(173,255,47)
rect(950,100,stamina * 2, 15)
textSize(15)
fill(255,0,0)
if (stamina < 0) stamina = 0
if (stamina > 100) stamina = 100
text("Stamina: " + round(stamina,0),1000,113)
 
//Health
fill(200,20,50)
rect(950,80,health * 2, 15)
textSize(15)
fill(173,255,47)
text("Health: " +  round(health,0),1000,93)
 
if (health <= 0) {
  health = 0
  die()
}
else if (health >= 100) {
  health = 100
}
else {
  if (keyIsDown(71)){
  health += 2
}
}
//Crafting
if (menu == true) {
while (menu) {
MenuColor = color(0,0,0)
MenuColor.setAlpha(200)
fill(MenuColor)
rect(0,0,1200,800)
if (keyIsDown(86)) {
  menu = false
}
//stone axe
if (mouseX < 225 && mouseX > 100 && mouseY > 50 && mouseY < 175) {
  Coloro = color(0,0,0)
  Coloro.setAlpha(100)
  fill(Coloro)
  rect(100,50,125,125);
  if (round(inventoryList[0],0) >= 60 && round(inventoryList[1],0) >= 60)
  if (stoneaxe == false) {
    if (mouseIsPressed) {
      inventoryList[0] -= 80
      inventoryList[1] -= 60
      stoneaxe = true
      }
    }
  }
//stone pickaxe
if (mouseX < 395 && mouseX > 270 && mouseY > 50 && mouseY < 175) {
  Coloro = color(0,0,0)
  Coloro.setAlpha(100)
  fill(Coloro)
  rect(270,50,125,125);
  if (round(inventoryList[0],0) >= 60 && round(inventoryList[1],0) >= 60)
  if (stonepickaxe == false) {
    if (mouseIsPressed) {
      inventoryList[0] -= 60
      inventoryList[1] -= 80
      stonepickaxe = true
      }
    }
  }
}
//Crafting text
//stone axe
textSize(25)
fill(255,255,255)
text("Stone Axe",105,75)
textSize(15)
text("Wood: 80",105,100)
text("Stone: 60",105,120)
textSize(12)
text("1.5x Wood collection",105,140)


//stone pickaxe
textSize(25)
fill(255,255,255)
text("Stone Pick",272,75)
textSize(15)
text("Wood: 60",275,100)
text("Stone: 80",275,120)
textSize(12)
text("1.5x Stone collection",275,140)
text("3x Iron collection",275,155)
}




//End of Crafting
}
 
if (start == false) {
  background(20,154,200)
  if (mouseX < 320 && mouseX > -1 && mouseY > 320 && mouseY < 430) {
    noStroke()
    fill(20,100,255)
    rect(0,320,260, 110);
    if (mouseIsPressed) {
      start = true;
      stroke(0)
    }
  }
  if (mouseX > -1 && mouseX < 320 && mouseY > 429 && mouseY < 530) {
    noStroke()
    fill(20,100,255)
    rect(0, 430, 260, 100);
    if (mouseIsPressed) {
      window.close();
    }
  }
  fill(0,0,0)
  textSize(200)
  text("Da Game",20,200)
  textSize(80)
  text("Start",20,400)
  text("Exit",20,500)
  }
}
}
 
//Draws the inventory
function drawInventory() {
    inventory.background(60,100,255)
    inventory.textSize(32);
    inventory.fill(0,0,0)
    inventory.text("Backpack", 80, 50);
 
    //inventory outline
    inventory.fill(0,0,0);
    inventory.rect(50, 300, 200, 400)
    inventory.textSize(20);
    inventory.fill(255,255,255)
    inventory.text("Wood", 60,320)
    inventory.text(round(inventoryList[0]), 195,320)
    inventory.text("Stone", 60,350)
    inventory.text(round(inventoryList[1]), 195,350)
    inventory.text("Iron", 60,380)
    inventory.text(round(inventoryList[2]), 195,380)
    inventory.text("Fiber",60,410)
    inventory.text(round(inventoryList[3]), 195,410)
}
 
//Draw Grass Randomly
function generateGrassField(PosX, PosY, Width, Height, Density, xList, yList, counter) {
  while (counter < Density) {
    strokeWeight(0.2);
    fill(0,175,0);
    beginShape();
    vertex(PosX + (xList[counter] * Width), PosY + (yList[counter] * Height));
    vertex(PosX + (xList[counter] * Width) + 6, PosY + (yList[counter] * Height) - 8);
    vertex(PosX + (xList[counter] * Width) + 4, PosY + (yList[counter] * Height));
    vertex(PosX + (xList[counter] * Width) + 7, PosY + (yList[counter] * Height) - 6);
    vertex(PosX + (xList[counter] * Width) + 8, PosY + (yList[counter] * Height));
    endShape();
    beginShape();
    vertex(PosX + (xList[counter] * Width), PosY + (yList[counter] * Height));
    endShape();
    counter++;
  }
}
 
function checkRectangleCollision(rX, rY, rW, rH) {
  return rX + rW > charx &&
  rX - rW < charx &&
  rY + rH > chary &&
  rY - rH < chary &&
  rX - 25 < charx &&
  rY - 25 < chary;
}


function handleRectangleCollision(rTag) {
    if (rTag == "Skele" && health > 0) {
        health -= 1
    }
    if (rTag == "Wood") {
      if (stoneaxe == true) {
        inventoryList[0] += 0.15
      }
      else inventoryList[0] += 0.1
       
    }
    if (rTag == "Stone") {
      if (stonepickaxe) inventoryList[1] += 0.15
      else inventoryList[1] += 0.1
    }
    if (rTag == "Iron Ore") {
      if (stonepickaxe) inventoryList[2] += 0.06
      else inventoryList[2] += 0.02
    }
    if (rTag == "Fiber") {
      if (sickle) inventoryList[3] += 0.4
      else inventoryList[3] += 0.2
    }
}
function RectangleCollsion(rX, rY, rW, rH, rTag) {
  if(checkRectangleCollision(rX, rY, rW, rH)){
    handleRectangleCollision(rTag)
    // stop character from entering rectangle
    //right
    if(charx + charSize > rX + rW + (charSize - 5)) charx = rX + rW;
    //left
    if(charx < rX - (charSize - 5)) charx = rX - charSize;
    //bottom
    if(chary + charSize > rY + rH + (charSize - 5)) chary = rY + rH;
    //top
    if(chary < rY - (charSize - 5)) chary = rY - charSize;
  }
}
 
//Pretty self explanatory
function die() {
  background(0,0,0,fade)
  textSize(200)
  fill(255,0,0,fade)
  text("You Died", 150, 400)
  inventoryList[0] = 0
  inventoryList[1] = 0
  inventoryList[2] = 0
  inventoryList[3] = 0
  stoneaxe = false
  stonepickaxe = false
  sickle = false
  if (fade < 255) {
    fade += 1
  }
  if (fade >= 255) {
  textSize(20)
  fill(255)
  text("Press 'b' to respawn",450,500)
  if (keyIsDown(66)) {
    health = 100
    charx = 450
    chary = 400
    skele1X = 0
    skele1Y = 0
  }
  }
 
}


function CreateEnemy(eType) {
  if (eType == "Skele") {
  if (dist(charx + charSize/2, chary + charSize/2, skele1X + charSize/2, skele1Y + charSize/2) < 25) health -= 0.5
  if (dist(charx + charSize/2, chary + charSize/2, skele1X + charSize/2, skele1Y + charSize/2) < 20) {
    push()
    translate(skele1X,skele1Y);
    translate(10,10);
    rotate(atan2(chary - skele1Y, charx - skele1X));
    translate(-10,-10);
    fill(255)
    rect(0, 0, 25, 25);
    pop();
}
  else if (dist(charx + charSize/2, chary + charSize/2, skele1X + charSize/2, skele1Y + charSize/2) < 250) {
  push()
  skele1X += 2 * cos(atan2(chary - skele1Y, charx - skele1X));
  skele1Y += 2 * sin(atan2(chary - skele1Y, charx - skele1X));
  translate(skele1X,skele1Y);
  translate(10,10); //translate to the center point (10,10) is the center point of the rectangle object
  rotate(atan2(chary - skele1Y, charx - skele1X));
  translate(-10,-10); //translate back to the original position
  fill(255)
  rect(0, 0, 25, 25);
  pop();
  }
  else {
  push()
  translate(skele1X,skele1Y);
  translate(10,10); //translate to the center point (10,10) is the center point of the rectangle object
  rotate(atan2(skele1Y, skele1X));
  translate(-10,-10); //translate back to the original position
  fill(255)
  rect(0, 0, 25, 25);
  pop();
  }
  }
}


function EnemyCollision(eX, eY, rX, rY, rW, rH) {
  //right
  if(eX + charSize > rX + rW + (charSize - 5)) eX = rX + rW;
  //left
  if(eX < rX - (charSize - 5)) eX = rX - charSize;
  //bottom
  if(eY + charSize > rY + rH + (charSize - 5)) eY = rY + rH;
  //top
  if(eY < rY - (charSize - 5)) eY = rY - charSize;
}
