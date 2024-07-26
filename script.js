let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    updateDisplay();
});

function updateDisplay() {
    document.getElementById('hr').innerHTML = hour < 10 ? "0" + hour : hour;
    document.getElementById('min').innerHTML = minute < 10 ? "0" + minute : minute;
    document.getElementById('sec').innerHTML = second < 10 ? "0" + second : second;
    document.getElementById('count').innerHTML = count < 10 ? "0" + count : count;
}

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        updateDisplay();
        setTimeout(stopWatch, 10);
    }
}