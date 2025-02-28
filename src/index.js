import "./styles.css";
import { uniJSON } from "./pages/OpenDay";
import { welcomePage } from "./pages/welcome-page";

let mainContent = document.querySelector(".main-content");

//load welcome page from start
welcomePage();

export { mainContent };
