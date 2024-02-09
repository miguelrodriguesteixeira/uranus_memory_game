function countdown() {
var secs = 120;
function tick() {
    var counter = document.getElementById("counter");
    secs--;
    counter.innerHTML = "Time: " + String(secs);
    if( secs > 0 ) {
        setTimeout(tick, 1000);
    } else {
         window.location.href = "Game_Over.html";
        }
}
tick();
}

countdown(120);