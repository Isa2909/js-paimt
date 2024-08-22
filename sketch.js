function setup() {
    createCanvas(600, 600);
   background("grey");}
  
  function draw() {
   
  
    stroke("cyan");
    fill("cyan");
    //console.log(mouseIsPressed)
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 4, 3);
    }