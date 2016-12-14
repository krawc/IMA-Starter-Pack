var icons = [];
var images = [];

var pagetitle;
var titles = [];

var descr = [];
var goodfor = [];

var Montserrat;
var Raleway;
var OpenSans;

var functional = [];

  var counter = 0;
  
 


function setup() {
    Montserrat = loadFont("assets/Montserrat-Bold.ttf");
  Raleway = loadFont("assets/Raleway Thin.ttf");
  OpenSans = loadFont("assets/OpenSans-Light.ttf");
  
  functional[0] = loadImage("assets/website.png");
  functional[1] = loadImage("assets/download.png");
  functional[2] = loadImage("assets/close.png");
  
  images[0] = loadImage("assets/slack.png");
  images[1] = loadImage("assets/cyberduck.png");
  images[2] = loadImage("assets/github.png");
  images[3] = loadImage("assets/tinkercad.png");
  images[4] = loadImage("assets/spacebrew.png");
  images[5] = loadImage("assets/circuits.jpg");
  images[6] = loadImage("assets/sublimetext.png");
  
  titles[0] = "Slack";
  titles[1] = "CyberDuck";
  titles[2] = "GitHub Desktop";
  titles[3] = "TinkerCad";
  titles[4] = "Spacebrew";
  titles[5] = "ciruits.io";
  titles[6] = "Sublime Text";
  
  descr[0] = "When you work with other students, professors or developers, you have to stay in touch. Sometimes WeChat might be too limited for that, especially when the group is big. Slack is a tool for communication with all team members in one place. You can either create channels with different topics, private conversations or file sharing. The app works well with other tools such as Twitter, Dropbox or Google Drive."
  descr[1] = "Cyberduck is a free and easy-to-use tool for sending, downloading or syncing files between a server and your computer. Cyberduck has been equipped with an editor of text and binary files, as well as a converter adjusting documents to the Google Docs standard and text recognition  (OCR) - useful for scanned documents."
  descr[2] = "GitHub is currently the biggest social network for coders. It is primarily a repository for open-source projects. Its main function is to make it easier for users to share code and cooperate on projects. GitHub Desktop is an app extension of that. It lets you seamlessly link the projects from you computer to your GitHub account, as well as create branches, send pull requests, etc."
  descr[3] = "TinkerCad is a simple, online 3D design and 3D printing app for everyone. Tinkercad is used by designers, hobbyists, teachers, and kids, to make toys, prototypes, home decor, Minecraft models, jewelry, and many others. What makes it special is its incredibly simple, intuitive interface that allows anyone to put their ideas out there."
  descr[4] = "Spacebrew is a service and toolkit for choreographing interactive spaces. Makes it easy to connect interactive things to one another over local networks and the Internet. It  has a dynamic interface that allows changes and provides feedback in real-time."
  descr[5] = "circuits.io is a free service provided by Autodesk which enables you to create online prototypes of physical circuits. You can build your prototypes, edit and run code on them - without risking breaking any of the components. The whole thing is synced on cloud, so any projects you make can be available for e.g. your group members."
  descr[6] = "Sublime Text is a sophisticated text editor for code, markup and prose. It is the most popular text editor among web developers. You'll like the slick user interface, handy programming reference and performance. Think of it as an advanced version of Windows Notepad."
  
  
  pagetitle = "IMA Starter Pack";
  createCanvas(windowWidth, windowHeight);
}



function draw() {
    background(255);
    start();
}

 function start() {
  fill(230,60,90);
  noStroke();
  rect(0, 0, windowWidth, windowHeight/7);
  textFont(Montserrat);
  fill (255);
  textSize(50);
  textAlign(CENTER);
  text(pagetitle, windowWidth/4, 30, windowWidth/2, 100);
  
  var x = windowWidth/8;
  var x2 = windowWidth/8;
  
  //load icons on start - upper row
  for(var i = 0; i<=3; i++){
     image(images[i], x, windowHeight/4, 150, 150);
     
     fill(0);
     textSize(25);
     text(titles[i], x, windowHeight/4 + 170, 150, 150);
     x+=300;
  }
  
  
  for(var c = 4; c<=6; c++){
     image(images[c], x2, windowHeight*0.6, 150, 150);
     fill(0);
     textSize(25);
     text(titles[c], x2, windowHeight*0.6 + 170, 150, 150);
     x2+=300;
  }
   
  textSize(20);
   text("Click on icons for more", windowWidth*0.75, windowHeight*0.9, 150,300);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




function popup(){
    fill(255);
    rect(0,windowHeight/7,windowWidth, windowHeight);
    fill(0);
    image(images[counter], windowWidth/5, windowHeight*0.3, 300,300);
    textAlign(LEFT);
    textSize(50);
    textFont(Montserrat);
    text(titles[counter], windowWidth*0.55, windowHeight*0.3, 500,500);
    textSize(20);
    textFont(OpenSans);
    textLeading(30);
    text(descr[counter], windowWidth*0.55, windowHeight*0.4, 500, 700);
    image(functional[0], windowWidth*0.55, windowHeight*0.75,70,70);
    image(functional[1], windowWidth*0.55+100, windowHeight*0.75,70,70);
    image(functional[2], windowWidth*0.95, windowHeight/7+30, 50,50);
}

function keyPressed(){
  redraw();
  print("TRUE");
}

function mouseClicked(){

  if ((mouseX>=windowWidth/8)&&(mouseX<=windowWidth/8+150)){
   if ((mouseY>=windowHeight/4)&&(mouseY<=windowHeight/4+150)){
    print("TRUE");
  noLoop();
  counter = 0;
  popup();
    }
  }
  
    if ((mouseX>=windowWidth/8+300)&&(mouseX<=windowWidth/8+450)){
   if ((mouseY>=windowHeight/4)&&(mouseY<=windowHeight/4+150)){
    print("TRUE");
  noLoop();
  counter = 1;
  popup();
    }
  }
  
     if ((mouseX>=windowWidth/8+600)&&(mouseX<=windowWidth/8+750)){
   if ((mouseY>=windowHeight/4)&&(mouseY<=windowHeight/4+150)){
    print("TRUE");
  noLoop();
  counter = 2;
  popup();
    }
  }
  
     if ((mouseX>=windowWidth/8+900)&&(mouseX<=windowWidth/8+1050)){
   if ((mouseY>=windowHeight/4)&&(mouseY<=windowHeight/4+150)){
    print("TRUE");
  noLoop();
  counter = 3;
  popup();
    }
  }
  
       if ((mouseX>=windowWidth/8)&&(mouseX<=windowWidth/8+150)){
   if ((mouseY>=windowHeight*0.6)&&(mouseY<=windowHeight*0.6+150)){
    print("TRUE");
  noLoop();
  counter = 4;
  popup();
    }
  }
  
         if ((mouseX>=windowWidth/8+300)&&(mouseX<=windowWidth/8+450)){
   if ((mouseY>=windowHeight*0.6)&&(mouseY<=windowHeight*0.6+150)){
    print("TRUE");
  noLoop();
  counter = 5;
  popup();
    }
  }
  
         if ((mouseX>=windowWidth/8+600)&&(mouseX<=windowWidth/8+750)){
   if ((mouseY>=windowHeight*0.6)&&(mouseY<=windowHeight*0.6+150)){
    print("TRUE");
  noLoop();
  counter = 6;
  popup();
    }
  }
  
  if ((mouseX>=windowWidth*0.95)&&(mouseX<=windowWidth*0.95+50)){
   if ((mouseY>=windowHeight/7+30)&&(mouseY<=windowHeight/7+80)){
     redraw();
   }
  }

}
