const minutesContainer = document.querySelector(".minutes");
const secondsContainer = document.querySelector(".seconds");
const millisecondsContainer = document.querySelector(".miliseconds");

const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let milliseconds = 00;
let seconds = 00;
let minutes = 00;
let interval;

const startTimer = () => {
  clearInterval(interval);
  interval = setInterval(startWatch, 10);
};

const stopTimer = () => {
  clearInterval(interval);
};

const resetTimer = () => {
  milliseconds = 0;
  seconds = 0;
  minutes = 0;

  millisecondsContainer.innerHTML = "00";
  secondsContainer.innerHTML = "00";
  minutesContainer.innerHTML = "00";
};

function startWatch() {
  milliseconds++;
  if (milliseconds < 9) {
    millisecondsContainer.innerHTML = `0${milliseconds}`;
  } else if (milliseconds > 99) {
    milliseconds = 0;
    millisecondsContainer.innerHTML = "00";
    seconds++;
  } else {
    millisecondsContainer.innerHTML = milliseconds;
  }

  if (seconds < 10) {
    secondsContainer.innerHTML = `0${seconds}`;
  } else if (seconds > 59) {
    minutes++;
    seconds = 0;
    secondsContainer.innerHTML = "00";
  } else {
    secondsContainer.innerHTML = seconds;
  }

  if (minutes < 10) {
    minutesContainer.innerHTML = `0${minutes}`;
  } else if (minutes > 59) {
    hours++;
    minutes = 0;
    minutesContainer.innerHTML = minutes;
  } else {
    minutesContainer.innerHTML = minutes;
  }
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
