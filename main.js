var sceneryFrames = [
    { transform: 'translate(100%)'},
    { transform: 'translate(-100%)'}
];

var sceneryTiming = {
    duration: 36000,
    iterations: Infinity,
    playbackRate: -2
};

var background = document.getElementById("background");

var backgroundMovement = background.animate(sceneryFrames, sceneryTiming);
backgroundMovement.currentTime = backgroundMovement.effect.getTiming().duration / 2

setInterval( function() {
    if (backgroundMovement.playbackRate > 0.4) {
        backgroundMovement.playbackRate *= .9
    }
}, 3000)

var flyFaster = function () {
    backgroundMovement.playbackRate *= 1.1
}

document.addEventListener("click", flyFaster);



