import "./styles.css";
import { uniJSON } from "./pages/OpenDay";
import { welcomePage } from "./pages/welcome-page";
import { aToZSort } from "./pages/a-z-sort";

let mainContent = document.querySelector(".main-content");

//load welcome page from start
welcomePage();

//add function to a-z sort button
let aToZButton = document.getElementById("a-z-button");
aToZButton.addEventListener("click", function () {
  aToZSort();
});

export { mainContent };
