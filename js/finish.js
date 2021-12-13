console.log("javascript file is connected!");

/* declare variables (video and text), but these are only used in the simplified 
code commented out below */
var video = document.getElementById("video");
var text = document.getElementById("text");

/*
	Because of Google Chrome autoplay policy, the user must
	interact with the page before a video can play
	This file has a div for the user to click
*/

function init() {
	// Add an event listener to the play box
	// event listener method attaches an event handler to the specified element
	document.getElementById("playBox").addEventListener("click", start);
}

function start() {
	// Make the play box invisible
	document.getElementById("playBox").style.display = "none";
	// Show the video
	document.getElementById("video").style.display = "block";
	// Play the video
	document.getElementById("video").play();
}

function sleep(){
	document.getElementById("text").innerHTML = "You decided to go to sleep, and had a strange dream...";
	document.getElementById("video").src = "video/typingDream.mp4";
	document.getElementById("select").innerHTML = '<div id="select"><button class="sleep" onclick="again()">Try again!</button><button class="code" onclick="code()">Keep coding!</button></div>';

/* 
Commented out lines below are a simplified way to format the code, using the variables declared above.
console.logs display that the video is moving forward on the timeline.
*/

	//text.innerHTML = "You decided to go to sleep, and had a strange dream...";
	//video.src = "video/typingDream.mp4";
	//console.log(video.currentTime);
	//video.currentTime = 5;//5 seconds
	//console.log(video.currentTime);
}

function code(){
	document.getElementById("text").innerHTML = "You decided to work and your project turned out great!";
	document.getElementById("video").src = "video/Project.mp4";
	document.getElementById("select").innerHTML = " ";
}

function again(){
	console.log("again worked!");
	document.getElementById("text").innerHTML = "You have been coding for hours.<br>You want to sleep, but need to finish your project.<br>What do you want to do?";
	document.getElementById("video").src = "video/coding.mp4";
	document.getElementById("select").innerHTML = '<div id="select"><button class="sleep" onclick="sleep()">Go to sleep!</button><button class="code" onclick="code()">Keep coding!</button></div>';
}
function nextpage(next, prev) {
  document.getElementById(next).style.display='block';
  document.getElementById(prev).style.display='none';
  return false;
}

window.onload = init();


