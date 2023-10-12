window.onload= function(){
    //initioalize the variables
    var seconds = "00";
    var tens = "00";
    var isRunning = false; 

    var lapCounter = 1; // Initialize the lap counter
    var lapTimes = []; // Array to store lap times

//load html data}
const appendSeconds = document.getElementById("seconds");
const appendTens = document.getElementById("tens");
const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");

const buttonLap = document.getElementById("button-lap"); // Add a button for recording laps
const lapList = document.getElementById("lap-list"); // Create a <ul> to display lap times

const appendToPrint = document.getElementById("lap1")

let interval;
buttonStart.onclick = function(){
    if (isRunning) {
        // If the timer is running, stop it
        clearInterval(interval);
        isRunning = false;
    } else {
        // If the timer is not running, start it
        interval = setInterval(startTimer, 10);
        isRunning = true;
    }

};



buttonStop.onclick = function (){
clearInterval(interval);
};

buttonReset.onclick = function(){
    clearInterval(interval);
    seconds = "00"
    tens = "00"
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;

    lapTimes = [];
     lapList.innerHTML = ""; // Clear the lap list when reset
}


function startTimer(){
tens++;
if(tens <=9){
    appendTens.innerHTML = "0" + tens;
}
if (tens >9){
    appendTens.innerHTML = tens;

}

if(tens > 100){
    seconds++;
    tens = 0 ;
    appendSeconds.innerHTML = "0" + seconds;

}
if(seconds > 9 ){
    appendSeconds.innerHTML = seconds;
}
}


buttonLap.onclick = function () {
    if (isRunning) {
        // Record lap time only if the timer is running
        const lapTime = appendSeconds.innerHTML + ":" + appendTens.innerHTML;
        const lapItem = document.createElement("li");
        lapItem.textContent = "Lap " + lapCounter + " - " + lapTime;
        lapList.appendChild(lapItem);
        lapTimes.push(lapTime);
        lapCounter++;
    }
};

};




// window.onload = function () {
//     // Initialize the variables
//     var seconds = "00";
//     var tens = "00";

//     // Load HTML data
//     const appendSeconds = document.getElementById("seconds");
//     const appendTens = document.getElementById('tens');
//     const buttonStart = document.getElementById("button-start");
//     const buttonStop = document.getElementById("button-stop");
//     const buttonReset = document.getElementById("button-reset"); // Add this line for the reset button

//     let interval;

//     buttonStart.onclick = function () {
//         interval = setInterval(startTimer, 10); // Adjust the interval to 10 milliseconds
//     };

//     buttonStop.onclick = function () {
//         clearInterval(interval);
//     };

//     buttonReset.onclick = function () {
//         clearInterval(interval);
//         seconds = "00";
//         tens = "00";
//         appendTens.innerHTML = tens;
//         appendSeconds.innerHTML = seconds;
//     };

//     function startTimer() {
//         tens++;

//         if (tens <= 9) {
//             appendTens.innerHTML = "0" + tens;
//         }

//         if (tens > 9) {
//             appendTens.innerHTML = tens;
//         }

//         if (tens > 99) { // Changed 1000 to 99 for tens
//             seconds++;
//             appendSeconds.innerHTML = "0" + seconds;
//             tens = 0;
//             appendTens.innerHTML = "0" + tens; // Corrected this line
//         }

//         if (seconds > 9) {
//             appendSeconds.innerHTML = seconds;
//         }
//     }
// };




