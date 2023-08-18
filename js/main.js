import { Home } from "./components/Home.js";
import { History } from "./components/History.js";
import { Culture } from "./components/Culture.js";
import { Cuisine } from "./components/Cuisine.js";
import { Travel } from "./components/Travel.js";

const pageHome = new Home();
const pageHistory = new History();
const pageCulture = new Culture();
const pageCuisine = new Cuisine();
const pageTravel = new Travel();
pageHome.render();

document.getElementById("Logout").addEventListener("click", () => {
  window.location.href = "../Login Signin/index.html";
});

document.getElementById("home").addEventListener("click", () => {
  pageHome.render();
  console.log("ok");
});

document.getElementById("history").addEventListener("click", () => {
  pageHistory.render();
  console.log("ok");
});

document.getElementById("culture").addEventListener("click", () => {
  pageCulture.render();
  console.log("ok");
});

document.getElementById("cuisine").addEventListener("click", () => {
  pageCuisine.render();
  console.log("ok");
});

document.getElementById("travel").addEventListener("click", () => {
  pageTravel.render();
  console.log("ok");
});
