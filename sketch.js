po = 5

var s = 1
var xp = 0
var yp = 0
var sp = 0
var tht = 0
var bblx = 200
var bbly = 200
var sc = 0
var scr=0
var cmb = 1
var i = 255
var lyf = 5
var sco=0

var f
var fac = 1
var sc = 0
var szx = 400
var shy = 200
var shx = 800
var szy = 100
var lyf
var lh
var rh
var py = []
var sx = []
var px = []
var g = -1

function preload() {
  lh = loadImage('Lh.png')
  rh = loadImage('Rh.png')
  hrt = loadImage('hrtb.png')
  sz = loadImage('sanet.png')
  sh = loadImage('hstop.png')
  ins = loadImage('INS2.png')
  bg = loadImage('bggame.png')
  snd =loadSound('coronaguitar.mp3')
  hm =loadImage('Happy-home-clipart-free-images.png')
  bs=loadImage('bloodstain.png')

}


function setup() {
  createCanvas(800, 800);
  arw = loadImage('arw.png')
  cv = loadImage('coronavirus.png')
  hrt = loadImage('hrtb.png')
  gc = loadSound('goco.mp3')
  cg = loadSound('cogo.mp3')
snd.play()

  for (var i = 0; i < 15; i++) {
    sx[i] = random(width, width + 700)
    py[i] = random(-60, height)
    px[i] = sx[i]
  }
  lyf = width
  f = 0
}

function mouseReleased() {
  if (mouseX > 0 && mouseX < 100 && mouseY>80  )
    po = -1
  else if (mouseX > width / 2 && mouseX < width / 2 + 100)
    po = 1
  else {
    po = 5
  }
sp=40
}



function mousePressed() {

 
}


function draw() {
 
  background(255);
     image(bg,0,0,width,height)

  

  
  stroke(7)
  if (mouseX > 0 && mouseX < 100)
  {
 
    fill(255, 0, 0,40)
  }
    else if (mouseX > width / 2 - 10 && mouseX < width / 2 + 100){
 
    fill(0, 0, 255,40)
  }
    else {
    noFill()
  }


  rect(width / 2 * (mouseX / (width / 2)), 0, width / 2, height)

  if (g == -1) {
    if (po == -1) {
snd.stop()
lyf = 5
      g = 1
scr = 0
    } else if (po == 1) {

      g = 2
   snd.stop()
      lyf = width

po =5

      fac = 1
      sco = 0
    }
 text("score " + scr, 150, 30)
text("score " + sco, width-150, 30)
  
  }

  if (g == 1) //g1
  {
 if(mouseX>0&&mouseX<80 && mouseY>0 && mouseY<80)
 g=-1

    scale(2)
    background(255);
   
    for (var l = 0; l < lyf; l++)
      image(hrt, l * 50, 40, 20, 20)
    text("score is - " + scr, 150, 30)

    var tht = map(mouseY, 0, 360, 0, 450)
    push()

    translate(xp + 200, yp + 400)
    rotate(radians(tht))
    rectMode(CENTER)

    image(arw, -25, -25, 50, 50)
    pop()
    xp = xp + sp * cos(radians(tht - 45))
    yp = yp + sp * sin(radians(tht - 45))

    if (sp > 0)
      sp--
    if (yp + 400 < 0 || yp + 400 > height || xp + 200 < 0 || xp + 200 > width) {
      xp = 0
      yp = 0
      sp = 0
      cmb = 0
    }

    if ((yp + 400 - bbly - 30) * (yp + 400 - bbly - 30) + (xp + 200 - bblx - 30) * (xp + 200 - bblx - 30) < 30 * 30) {
      if (s < 0)
        cg.play()
      else
        gc.play()

      s = -s


      r = bblx
      t = bbly
      image(bs,r,t)
      bbly = 0
      bblx = random(0, 300)

      xp = 0
      yp = 0
      sp = 0
      // cmb=0

      cmb++
      if (cmb > 3)
        i = 255
      //h++    
      scr = scr + cmb
    }

    if (bbly > 400) {
      bbly = 0
      lyf--
    } else {
      bbly = bbly + 1 + .01 * sc
    }

    if (i != 0)
      fill(255 - i)
    textSize(64)
    text("COMBO x" + cmb, 0, 140)
    i -= 5;
    fill(0)
    textSize(20)

    image(cv, bblx, bbly, 50, 50)
    if (lyf == -1) {
    g =-1
      scale(1)
    }
  } //G1//
  //G2
  if (g == 2) {
if(mouseX>0&&mouseX<40 && mouseY>0 && mouseY<40)
 g=-1

    stroke(2)
    textSize(24)
   //snd.loop();
  background(255);
  // image(bg,0,0,width,height)
  text('score is-'+sco,0,100)
       sco++
  sc+=.5
text("instructions",width-100,10)
if(sco%600==0 || sco==100)
  snd.play()
  
  if(mouseX>width-100&&mouseX<width&&mouseY<20&&mouseY>0)
  { image(ins,0,0,width,height)
  }
  
  image(sz,szx,szy  ,40,40)
 
  image(sh,shx,shy  ,40,40)
  
  mx=map(mouseX,0,width,0,height)
  
  image(lh,0,mx,40,40)
for (var j=0;j<15;j++)
  {image(rh,px[j],py[j],40,40)
  px[j] = px[j] - sc*.01*fac;
   if (px[j]<0)
   {
  // px[j]=sx[j] 
   px[j]=random(width,width+200)
   py[j]=random(-60,height)
   }
   }
for (var c = 0 ; c<15;c++)
{

  if((0-px[c])*(0-px[c])+(mx-py[c])*(mx-py[c])<40*40)
  {
 lyf =lyf-sc*.01*fac;
  
  }
  
  

}
  
  
  if((0-szx  )*(0-szx  )+(mx-szy  )*(mx-szy  )<40*40)
  {
 lyf = width
  
  }
   if((0-shx  )*(0-shx  )+(mx-shy  )*(mx-shy  )<40*40)
  {
f = width
    sc = sc - 6
  
  }
  
  
 fill(255,0,0)
rect(0,height-30,lyf,30)
  fill(0,0,255)
rect(0,height-60,f,30)
 if (lyf<0)
   g = -1
  fill(0)

if(szx<0)
{szx =width 
 szy = random(0,height)
}
else
{szx--
}

if(shx<0)
{shx =random(width,2*width) 
 shy = random(0,height)
}
else
{shx--
}
  if(f>0)
  {
 f-=2
    fac =.1
  }else
  {fac = 1}
console.log(sc) 

  } //G2//
image(hm,0,0,40,40)
}
