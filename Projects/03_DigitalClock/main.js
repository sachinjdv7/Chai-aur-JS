console.log("object");

const clock = document.getElementById("clock");

// seInterval run in every 1 sec
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
