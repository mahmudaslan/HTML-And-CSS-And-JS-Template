let skillsSection = document.querySelector(".our-skills");
let skillsProg = document.querySelectorAll(".our-skills .prog span");
let statsSection = document.querySelector(".stats");
let statsNums = document.querySelectorAll(".stats .box .number");
let started = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= skillsSection.offsetTop - 200) {
    skillsProg.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  if (window.scrollY >= statsSection.offsetTop - 200) {
    if (!started) {
      statsNums.forEach((el) => setCont(el));
    }
    started = true;
  }
});
function setCont(el) {
  let goal = el.dataset.goal;
  let cont = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(cont);
    }
  }, 3500 / goal);
}

let contDate = new Date("Dec 31 2022 23:59:59").getTime();

let dateCont = setInterval(() => {
  let newDate = new Date().getTime();
  let dateDiff = contDate - newDate;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff <= 0) {
    clearInterval(dateCont);
    document.querySelector(".days").innerHTML = "00";
    document.querySelector(".hours").innerHTML = "00";
    document.querySelector(".minutes").innerHTML = "00";
    document.querySelector(".seconds").innerHTML = "00";
    document
      .querySelectorAll(".events .unit span:first-child")
      .forEach((el) => (el.style.color = "#eb5a49"));
  }
}, 1000);
