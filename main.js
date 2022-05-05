noseX=0;
noseY=0;
function preload(){
    spiderman=loadImage("https://i.postimg.cc/L47ZyNMS/spiderman-removebg-preview.png");
}
 function setup(){
     canvas=createCanvas(200,200);
     canvas.center();
     video= createCapture(VIDEO);
     video.size(200,200);
     video.hide();

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose', gotposes);
 }
 function draw(){
 image(video,0,0,200,200);
 image(spiderman,noseX,noseY,50,50);
 }
 function takesnap(){
     save("filter.png");
 }
 function modelloaded(){
     console.log("posenet is loaded");
 }
 function gotposes(results){
    if(results.length>0){
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(results);
        console.log("Nose X:"+noseX);
        console.log("Nose Y:"+noseY);
    }
 }