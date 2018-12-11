var clock = document.getElementsByTagName('h2')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add(){
    seconds++;
    if(seconds >= 60){
        seconds = 0;
        minutes++;
        if(minutes >= 60){
            minutes = 0;
            hours++;
        }
    }

    h2.textContent = (hours ? (hours>9 ? hours : "0" + hours) : "00")
    + ":" + (minutes ? (minutes>9 ? minutes : "0" + minutes) : "00") + ":" +
    (seconds>9 ? seconds : "0" + seconds);

        timer();
}
function timer(){
    t = setTimeout(add, 1000);
}
timer();

start.onclick = alert("doe het!");

document.getElementById("stop").onclick = function(){
    clearTimeout(t);
}