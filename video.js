// var videoSource = new Array();
// videoSource[0] = './video/trailer.mp4';
// videoSource[1] = './video/oceans.mp4';
// let key = 0; // global
// const videoCount = videoSource.length;
// const element = document.getElementById("videos");
 
// function playVideo(videoNum) {
//     element.setAttribute("src", videoSource[videoNum]);
//     element.setAttribute("type",'video/mp4');
//     element.autoplay = true;
//     element.load();
//     element.play();
// }
// document.getElementById('videos').addEventListener('ended', myFunctionHandle, false);
 
// function myFunctionHandle() {
//     key++;
//     if (key == videoCount) {
//         // key = 0;
//         playVideo(key);
//     } else {
//         playVideo(key);
//     }
// }


var videoSource = new Array();
videoSource[0] = './video/trailer.mp4';
Addvideo = {key:1, dir:'./video/ad_videos/KFC Rockin Commercial 10 Sec.mp4'};
let key = 0; // global
const videoCount = videoSource.length;
const element = document.getElementById("videos");

const aud = document.getElementById('ad');
var approxTime = 0
element.ontimeupdate = function(){
    var currentTime = Math.floor(element.currentTime);
    if (currentTime !== approxTime) {
        approxTime = currentTime;
        if (approxTime === 13) {
            console.log('Five')
            element.pause();
            element.controls=false;
        }
    }
};


function add()
 {
     aud.setAttribute("src", Addvideo.dir);
     aud.setAttribute("type",'video/mp4');
     aud.load();
     aud.play();
     aud.log("working");
    
 }

 const ad=setTimeout((add),13000);
 function myFunction(){
     element.controls=true;
     element.play()
 }