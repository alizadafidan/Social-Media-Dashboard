const mainBG = document.querySelector(".main");
const darkMode = document.getElementById("dark-mode");
const overviewNumber = document.querySelectorAll(".overview-number");
const followerNumber = document.querySelectorAll(".follower-number");
const dashboard = document.querySelectorAll(".dashboard");
const overview = document.querySelectorAll(".overview-s");
const headingSec = document.querySelector(".heading-secondary");
const headingMain = document.querySelector(".header-name");

darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  mainBG.classList.toggle("background");
  overviewNumber.forEach((num) => num.classList.toggle("active-d"));
  followerNumber.forEach((num) => num.classList.toggle("active-d"));
  dashboard.forEach((dash) => dash.classList.toggle("active-c"));
  overview.forEach((ow) => ow.classList.toggle("active-c"));
  headingSec.classList.toggle("active-d");
  headingMain.classList.toggle("active-d");
});
