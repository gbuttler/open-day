import "./styles.css";
import { uniJSON } from "./pages/OpenDay";
import { welcomePage } from "./pages/welcome-page";
import { aToZSort } from "./pages/a-z-sort";
import { popUp } from "./pages/pop-up";
import { generalSort } from "./pages/general-sort";
import { suSort } from "./pages/su-sort";
import { sportSort } from "./pages/sport-sort";

let mainContent = document.querySelector(".main-content");

//load welcome page from start
welcomePage();

//return to welcome page when main title is clicked
let mainTitle = document.getElementById("main-title");
mainTitle.addEventListener("click", function () {
  welcomePage();
});

//add function to a-z sort button
let aToZButton = document.getElementById("a-z-button");
aToZButton.addEventListener("click", function () {
  aToZSort();
});

//add function to general sort button
let generalButton = document.getElementById("general-button");
generalButton.addEventListener("click", function () {
  generalSort();
});

//add function to su sort button
let suButton = document.getElementById("su-button");
suButton.addEventListener("click", function () {
  suSort();
});

//add function to su sort button
let sportButton = document.getElementById("sport-button");
sportButton.addEventListener("click", function () {
  sportSort();
});

export { mainContent };
