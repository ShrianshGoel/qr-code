var button,b1,b2

var input,i2,b6
var b3,b4,b5,b3x
var c,c1
var s=0
  var click=2
function preload(){
  c1=loadImage("Screenshot_2021-10-11_1.54.06_PM-removebg-preview.png")
}


function setup() {
  
  
  
    createCanvas(windowWidth, windowHeight);
  
  

  
  b3x =createButton("")
  b3x.class("h")
  b3x.position(0,0)
  b3x.size(windowWidth,windowHeight)
  input=createInput("").attribute("Placeholder","Url or text");
  input.position(width/2.70,height/2)
  input.class("o")
  input.size(width/6,height/10.60)
  
  
   b3 =createElement("a","Be Sure to check this out").attribute("href","https://preview.p5js.org/shriansh.goel-jade/present/mBmTWx5_I")
  b3.class("h2")
  b3.position(width/1.50,height/2)
  b3.size(width/07,width/13)

  
  b2= createButton("Your qr code here ↓")
  b2.class("buttn2")
  b2.position(width/8.20,height/2.50)
  b2.size(width/5.70,width/18.50)

       
  
  b1 = createButton("Don't Mind Me")
  b1.hide()
  
  button =createButton("Generate a qr code")
  button.position(width/2.70,height/1.50)
  button.class("buttn")
  button.size(width/5.10,width/18.50)
  
  
}

function draw() {

  
  background(220);
  cursor('Screenshot_2021-10-11_1.54.06_PM-removebg-preview.png')
  
 b1.value("https://api.qrserver.com/v1/create-qr-code/?data=")

  button.mousePressed(
  ()=>{
    i2 = createElement("Iframe").attribute("src",b1.value()+input.value())
    i2.class("o2")
    i2.position(width/9,height/2);
      
  
    b5= createElement("a","Download").attribute("href","https://api.qrserver.com/v1/create-qr-code/?data="+input.value())
  b5.class("buttn3")
  b5.position(width/8.90,height/1.12)
     b5.size(width/5.10,width/27)

  }

  
  
  )

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    input.position(width/2.70,height/2)
   input.size(width/6,height/10.60)
    button.size(width/5.10,width/18.50); button.position(width/2.70,height/1.50)
    b2.position(width/8.20,height/2.50)
  b2.size(width/5.70,width/18.50)
    b3.position(width/1.50,height/2)
  b3.size(width/07,width/13)
  b3x.position(0,0)
  b3x.size(windowWidth,windowHeight)
}