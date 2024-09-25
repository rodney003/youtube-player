var player;

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player) after the API code downloads.
function onYouTubeIframeAPIReady() {
    console.log("YouTube IFrame API is ready.");
    player = new YT.Player('youtubePlayer', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
    console.log("Player is ready");
}

// The API calls this function when the player's state changes.
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        console.log("Video is playing");
        trackCurrentTime();  // Start tracking current time when video starts playing
    }
}

// Function to get the current time of the video
function trackCurrentTime() {
    setInterval(function() {
        if (player) {
            const currentTime = player.getCurrentTime();  // Get current time in seconds
            console.log("Current video time: ", currentTime);  // Log or store the timestamp
        }
    }, 1000);  // Check every second
}
