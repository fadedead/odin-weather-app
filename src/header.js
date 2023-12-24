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

  searchBox.appendChild(searchInput);

  header.appendChild(title);
  header.appendChild(searchBox);

  return header;
}

export { getHeader };
