nose_x = 0;
nose_y = 0;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/dQgF404g/580b57fbd9996e24bc43bed5.png');
}
function setup(){
canvas = createCanvas(400,400);
canvas.center()
video = createCapture(VIDEO)
video.size(400,400);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotposes)
}
function draw(){
    image(video,0,0,400,400);
    image(clown_nose,nose_x,nose_y,30,30)
}
function modelLoaded(){
    console.log('Model Loaded!')
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        console.log(results[0].pose.nose.x)
        console.log(results[0].pose.nose.y)
        nose_x = results[0].pose.nose.x-10;
        nose_y = results[0].pose.nose.y-10;
    }
}
function take_snapshot(){
    save('imaclown')
}