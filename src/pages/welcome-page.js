import { uniJSON } from "./OpenDay";
import { mainContent } from "../index.js";

const welcomePage = () => {
  let welcomeDiv = document.createElement("div");
  welcomeDiv.classList.add("welcome-div");
  let welcomePara = document.createElement("p");
  welcomePara.classList.add("welcome-para");
  welcomePara.innerHTML =
    "If you're thinking about studying at Cardiff University, come and discover student life for yourself in an exciting day of experiences, information sessions and tours. See the above options for everything available to you on the day.";
  let welcomeImg = document.createElement("img");
  welcomeImg.classList.add("welcome-img");
  welcomeImg.src = uniJSON.topics[0].cover_image;

  welcomeDiv.appendChild(welcomePara);
  welcomeDiv.appendChild(welcomeImg);
  mainContent.appendChild(welcomeDiv);
};

export { welcomePage };
