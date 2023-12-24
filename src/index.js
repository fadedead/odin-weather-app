import { getCredits } from "./credits";
import { getHeader } from "./header";
import { getPage } from "./page";
import "./style.css";
import { callAPI } from "./weatherApp";

callAPI().catch("Error in calling API");

function createWeatherApp() {
  const content = document.getElementById("content");

  const header = getHeader();

  const credits = getCredits();

  const page = getPage();

  content.appendChild(credits);
  content.appendChild(header);
  content.appendChild(page);
}

createWeatherApp();
