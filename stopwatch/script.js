let timedisplay = document.querySelector(".timedisplay")
let stopbtn = document.getElementById("stopbtn")
let startbtn = document.getElementById("startbtn")
let resetbtn = document.getElementById("resetbtn")

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

startbtn.addEventListener("click", function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(() => {
        starttimer()
    }, 10);
})
stopbtn.addEventListener("click", function () {
   clearInterval(timerId)
})
resetbtn.addEventListener("click", function () {
   clearInterval(timerId)
   timedisplay.innerHTML = "00 : 00 : 00";
})

function starttimer() {
    msec++;
    if (msec == 100) {
        msec =0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }
    let msecString;
    let secsString;
    let minsString;
    if (msec < 10) {
        msecString = `0${msec}`;
    }else{
        msecString = msec;
    }
    if (secs < 10) {
        secsString = `0${secs}`;
    }else{
        secsString = secs;
    }
    if (mins < 10) {
        minsString = `0${mins}`;
    }else{
        minsString = mins;
    }
    timedisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}