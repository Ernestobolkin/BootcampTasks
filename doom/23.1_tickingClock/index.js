const putInTime = document.querySelector("h2");
const time = () => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  putInTime.innerHTML = `hours:${hours}   minutes:${minutes}   seconds:${seconds}`;
};
setInterval(time, 1000);