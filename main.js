difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
video=createCapture(VIDEO);
video.size(550, 500);

canvas=createCanvas(550, 550);
canvas.position(560, 150);
posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotposes);
}

function modelLoaded(){
console.log("Posenet is Initialized");
}

function gotposes(results) 
{
    if(results.length > 0)
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x
    rightWristX = results[0].pose.rightWrist.x
    difference = floor(leftWristX - rightWristX);

    }
  
    

function draw(){
    background('#1ec99f');
    textSize(difference);
    fill('#FFE787');
    text('Samyak', 50, 400);
}