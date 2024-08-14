
window.onload = function(){
    let mins = 0;
    let secs = 0;
    let tens = 0;

    let appendMins = document.querySelector("#mins");
    let appendSecs = document.querySelector("#secs");
    let appendTens = document.querySelector("#tens");

    let startBtn = document.querySelector("#start");
    let stopBtn = document.querySelector("#stop");
    let resetBtn = document.querySelector("#reset");

    let Interval;

    const startTimer = () =>{
       tens++ 
       if (tens <= 9){
        appendTens.innerHTML = '0' + tens
       }

       if (tens > 9){
        appendTens.innerHTML = tens
       }

       if (tens > 99) {
            secs++
            appendSecs.innerHTML = '0' + secs
            tens = 0
            appendTens.innerHTML = '0' + tens;
       }

       if (secs > 9){
        appendSecs.innerHTML = secs
       }

       if (secs > 59){
        mins++
        appendMins.innerHTML = '0' + mins
        secs = 0
        appendSecs.innerHTML = '0' + secs
       }

    };

    startBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10)
    }

    resetBtn.onclick = () =>{
        clearInterval(Interval)
        mins = 0;
        secs = 0;
        tens = 0;
        appendMins.innerHTML = "00"
        appendSecs.innerHTML = "00"
        appendTens.innerHTML = "00"
    }

    stopBtn.onclick = () =>{
        clearInterval(Interval)
    }

}
