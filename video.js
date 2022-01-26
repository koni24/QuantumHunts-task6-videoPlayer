var videoSource = new Array();
videoSource[0] = './video/trailer.mp4';
videoSource[1] = './video/oceans.mp4';
let key = 0; // global
const videoCount = videoSource.length;
const element = document.getElementById("videos");
 
function playVideo(videoNum) {
    element.setAttribute("src", videoSource[videoNum]);
    element.setAttribute("type",'video/mp4');
    element.autoplay = true;
    element.load();
    element.play();
}
document.getElementById('videos').addEventListener('ended', myFunctionHandle, false);
 
function myFunctionHandle() {
    key++;
    if (key == videoCount) {
        key = 0;
        playVideo(key);
    } else {
        playVideo(key);
    }
}