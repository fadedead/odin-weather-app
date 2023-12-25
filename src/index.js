import { getCredits } from "./credits";
import { getHeader } from "./header";
import { getPage } from "./page";
import "./style.css";
import { callAPI } from "./weatherApp";

function createWeatherApp() {
  const content = document.getElementById("content");

  const header = getHeader();

  const credits = getCredits();

  callAPI()
    .catch((e) => {
      console.log(`Error fetching the API: ${e}`);
    })
    .then((jsonResponse) => {
      const page = getPage(jsonResponse.forecast.forecastday);

      content.appendChild(page);
    });

  content.appendChild(credits);
  content.appendChild(header);
}

createWeatherApp();
