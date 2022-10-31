var video=document.querySelector("#player1");

window.addEventListener("load", function() {
	
	video.autplay = false;
	video.loop = false;

	console.log("Good job opening the window");
	console.log("Autoplay is set to false");
	console.log("Loop is set to false");

});

document.querySelector("#play").addEventListener("click", function() {
 	
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Play Video");
 });

 document.querySelector("#pause").addEventListener("click", function() {
	
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	
	video.playbackRate *= 0.9;
	video.playbackRate = video.playbackRate
	console.log("Slow down video");
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	
	video.playbackRate *= 1.1;
	video.playbackRate = video.playbackRate
	console.log("Speed up video");
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration){
		video.currentTime = 0
	}
	else{
		video.currentTime +=10;
	}
	console.log("video playback skipped to " + video.currentTime);
	
	
});


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		console.log("Volume Unmuted");
		document.querySelector("#mute").innerHTML = "Mute";
	}

	else{
		video.muted = true;
		console.log("Volume muted");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	
	
	
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = document.querySelector("#slider").value/100;
	document.querySelector("#slider").innerHTML = video.volume;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("The current value is " + video.volume);

	
	
});


document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Video put in OldSchool");

	
	
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Video put in Original");

	
	
});
