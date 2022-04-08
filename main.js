y=0;
x=0;
draw_circle="";
draw_rect="";

var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML= "Status: System Is Listening, please speak.";
    recognition.start();
}

function setup(){
canvas= createCanvas(900,800);

}

recognition.onresult= function(event){
console.log(event);

var content= event.results[0][0].transcript;
document.getElementById("status").innerHTML= "The Speech has been recognised as: " + content;

if(content=="circle"){
x= Math.floor(Math.random() * 900);
y= Math.floor(Math.random() * 800);
document.getElementById("status").innerHTML= "Status: Drawing Circle";
draw_circle="set";
}

if(content=="rectangle"){
    x= Math.floor(Math.random() * 900);
    y= Math.floor(Math.random() * 800);
    document.getElementById("status").innerHTML= "Status: Drawing Rectangle";
    draw_rect="set";
    }
}

function draw(){
    if (draw_circle=="set") {
        radius= Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML= "Status: Drawn Circle";
        draw_circle="";
    }

    if (draw_rect=="set") {
        rect(x,y,90,70);
        document.getElementById("status").innerHTML= "Status: Drawn Rectangle";
        draw_rect="";
    }
}