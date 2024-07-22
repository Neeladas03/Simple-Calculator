let mins = 1;
let secs = mins * 60;

function change(){
    document.getElementById("bod").style.backgroundColor="black";
    document.getElementById("css").style.display="block";
    setTimeout(timer,4000);
}

function timer(){
setTimeout(Decrement,5000);}

function Decrement() {
    minutes = document.getElementById("minutes");  //these are elements
    seconds = document.getElementById("seconds");
    if (minutes && seconds) {

        if (seconds < 59) {     // this condition do not work as seconds is a eleemnt not a number
            seconds.value = secs;
        }
        else {
            minutes.value = getminutes();
            seconds.value = getseconds();
        }
        if (mins < 1) {
            minutes.style.color = "red";
            seconds.style.color = "red";
        }
        if (secs < 0) {
            alert('YOU MOVED YOU ARE GAY');
            minutes.value = 0;
            seconds.value = 0;
        }
        else {
            secs--;
            setTimeout(Decrement, 1000);
        }
    }
}

function getminutes() {
    mins = Math.floor(secs / 60);
    return mins;
}

function getseconds() {
   return secs - Math.round(mins * 60);
   
}