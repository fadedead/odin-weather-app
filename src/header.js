import { getPage } from "./page";
import { apiQuery } from "./weatherApp";

function getHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const title = document.createElement("p");
  title.classList.add("title");
  title.innerText = "Weather App";

  const searchBox = document.createElement("div");
  const searchForm = document.createElement("form");

  const searchInput = document.createElement("input");
  searchInput.classList.add("search-input");
  searchForm.appendChild(searchInput);
  searchInput.type = "text";

  searchInput.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      const inputValue = searchInput.value;
      apiQuery(inputValue)
        .then((jsonResponse) => {
          const content = document.getElementById("content");
          const page = document.getElementById("page");

          content.removeChild(page);

          const newPage = getPage(
            jsonResponse.forecast.forecastday,
            inputValue,
          );
          content.appendChild(newPage);
        })
        .catch((e) => {
          alert("City not found");
          console.log(e);
        });

      searchInput.value = "";
    }
  });

  searchBox.appendChild(searchInput);

  header.appendChild(title);
  header.appendChild(searchBox);

  return header;
}

export { getHeader };
