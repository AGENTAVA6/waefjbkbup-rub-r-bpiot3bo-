left_wrist_x = "";
left_wrist_y =""
right_wrist_y = "";
right_wrist_x = "";
function setup(){
canvas = createCanvas(800, 400);
video = createCapture(VIDEO);
video.size(800, 400)
video.hide()
canvas.center()
poseNet = ml5.poseNet(video, modelLoaded) 
poseNet.on('pose', gotPoses)
}
function draw(){
    image(video, 0, 0, 800,400);
   fill("#ff000")
   stroke("#ff000")
   if(score_y > 0.2){
       circle(left_wrist_x, left_wrist_y, 20)
   }
   fill("#ff000")
   stroke("#ff000")
   if(score_y > 0.2){
       circle(right_wrist_x, right_wrist_y, 20)
   }
}
function modelLoaded(){
    console.log("model is you ")
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    left_wrist_x = results[0].pose.leftWrist.x;
right_wrist_x = results[0].pose.rightWrist.x;
left_wrist_y = results[0].pose.leftWrist.y;
right_wrist_y = results[0].pose.rightWrist.y
}
}



