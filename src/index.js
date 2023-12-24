import { getHeader } from "./header";
import "./style.css";
import { callAPI } from "./weatherApp";

callAPI().catch("Error in calling API");

function createWeatherApp() {
  const content = document.getElementById("content");

  const header = getHeader();

  content.appendChild(header);
}

createWeatherApp();
