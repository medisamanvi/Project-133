var img=""
var status=""
var object=[]

function preload(){
    img=loadImage("Bedroom.jpg")
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center()
    objectDetector= ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function draw(){
    image(img,0,0,640,420);
    textSize(20)

    if(status!=""){
        for(var i=0; i<object.length; i++){
            document.getElementById("status").innerHTML="Status: Object Detected";
            fill("red");
            percent= floor(object[i].confidence*100);
            text(object[i].label+" "+percent+"%",object[i].x+20,object[i].y+20);
            stroke("red")
            noFill()
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
    // fill("red")
    // text("dog",45,75);
    // stroke("red")
    // noFill()
    // rect(30,60,450,350)

    // fill("red")
    // stroke("red")
    // text("cat",310,80)
    // noFill()
    // rect(300,60,270,340)
}
function modelLoaded(){
    console.log("model is loaded");
    status = true
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log("error")
    }
    else{
        console.log(results)
    }
}

function back(){
    window.location="index.html"
}