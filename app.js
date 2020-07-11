var hr= 0;
var min= 0;
var sec= 0;
var msec= 0;
var Hour=document.getElementById("hr");
var Minute=document.getElementById("min");
var Second=document.getElementById("sec");
var mSecond=document.getElementById("msec");
var Interval;

function timer(){
    msec++
    mSecond.innerHTML=msec;
    if(msec >= 100){
        sec++
        Second.innerHTML=sec
        msec= 0;
    }else if(sec >= 60){
        min++
        Minute.innerHTML=min
        sec=0;
    }
    else if(min >= 60){
        hr++
        Hour.innerHTML=hr
        min=0;
    }
}
function Start(){
Interval= setInterval(timer,10)
}
function Stop(){
    clearInterval(Interval)
}
function Reset(){
    msec=00;
    sec=00;
    min=00;
    hr=00;
    mSecond.innerHTML=msec
    Second.innerHTML=sec
    Minute.innerHTML=min
    Hour.innerHTML=hr
}





function startButton(){
    document.getElementById("start").disabled = true;
}
function stopButton(){
    document.getElementById("stop").disabled = true;
}
function resetButton(){
    document.getElementById("reset").disabled = true;
}

function visibleStart(){
    document.getElementById("start").disabled = false;
 
}
function visibleStop(){
    document.getElementById("stop").disabled = false;
 
}
function visibleReset(){
    document.getElementById("reset").disabled = false;
 
}