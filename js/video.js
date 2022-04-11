var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false
});

document.querySelector("#play").addEventListener("click",function(){
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100+"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow donw");
	video.playbackRate -= 0.05;
	console.log("Speed is" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up");
	video.playbackRate += 0.05;
	console.log("Speed is" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click",function(){
    console.log("skip ahead video");
	video.currentTime += 15;
	if(video.currentTime >= video.duration){
	 video.currentTime = 0
	 console.log("Going back to beginning");
	}
    console.log("Current time is",video.currenTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		console.log("Unmute Video");
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		console.log("Mute Video");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	video.muted = !video.muted;
})

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Current volume is " + video.volume);
})

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Add Vintage Filter");
	document.querySelector("#player1").classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove Vintage Filter");
	document.querySelector("#player1").classList.remove("oldSchool");
});

