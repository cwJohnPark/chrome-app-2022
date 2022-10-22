const clock = document.querySelector("h2#clock");

clock.innerText = "he";

function getClock() {
  const date = new Date();
  const hour = padStartZero(date.getHours());
  const minute = padStartZero(date.getMinutes());
  const second = padStartZero(date.getSeconds());
  clock.innerText = `${hour}:${minute}:${second}`;
}

function padStartZero(number) {
  return String(number).padStart(2, "0");
}

getClock();
setInterval(getClock, 1000);
