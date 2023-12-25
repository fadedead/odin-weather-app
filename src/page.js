function getPage(forecastArr) {
  const page = document.createElement("div");
  page.classList.add("page");

  const forecast = getSlider(forecastArr);

  page.appendChild(forecast);
  return page;
}

function getSlider(forecastArr) {
  const container = document.createElement("div");
  container.classList.add("forecast-slider");

  const slider = document.createElement("div");
  slider.classList.add("slider");

  const sliderLeft = document.createElement("div");
  sliderLeft.innerHTML = "&#10094;";
  sliderLeft.classList.add("slide-control");
  slider.appendChild(sliderLeft);

  const forecastContainer = document.createElement("div");
  forecastContainer.classList.add("forecast-container");
  slider.appendChild(forecastContainer);

  const sliderRight = document.createElement("div");
  sliderRight.innerHTML = "&#10095;";
  sliderRight.classList.add("slide-control");
  slider.appendChild(sliderRight);
  container.appendChild(slider);

  getForecastTables(forecastArr, forecastContainer, sliderLeft, sliderRight);
  return container;
}

function getForecastTables(
  forecastArr,
  forecastContainer,
  sliderLeft,
  sliderRight,
) {
  const images = [];
  let imageIndex = 0;

  forecastArr.forEach((value, key) => {
    const currInfo = document.createElement("div");
    currInfo.classList.add("day-forecast");

    const basicInfo = getBasicInfo(value);
    basicInfo.classList = "hide-div";
    if (key == 1) {
      basicInfo.classList = "show-div";
    }

    forecastContainer.appendChild(basicInfo);

    images.push(basicInfo);
  });

  sliderLeft.addEventListener("click", () => {
    if (imageIndex > 0) {
      images[imageIndex].classList = "hide-div";
      images[imageIndex - 1].classList = "show-div";

      imageIndex -= 1;
    }
  });
  console.log(sliderRight);
  sliderRight.addEventListener("click", () => {
    if (imageIndex < images.length - 1) {
      images[imageIndex].classList = "hide-div";
      images[imageIndex + 1].classList = "show-div";
      imageIndex += 1;
    }
  });
}

function getBasicInfo(data) {
  const informationDiv = document.createElement("div");

  const date = document.createElement("p");
  date.innerText = data.date;

  const basicInfo = document.createElement("div");
  basicInfo.classList.add("basic-info");

  const dayInfo = document.createElement("div");
  const forecastImage = document.createElement("img");
  forecastImage.src = data.day.condition.icon;
  dayInfo.appendChild(forecastImage);
  const forecastText = document.createElement("p");
  forecastText.innerText = data.day.condition.text;
  dayInfo.appendChild(forecastText);
  basicInfo.appendChild(dayInfo);

  const sunRiseSetInfo = document.createElement("div");
  const sunRise = document.createElement("p");
  sunRise.innerText = data.astro.sunrise;
  sunRiseSetInfo.appendChild(sunRise);
  const sunSet = document.createElement("p");
  sunSet.innerText = data.astro.sunset;
  sunRiseSetInfo.appendChild(sunSet);
  basicInfo.appendChild(sunRiseSetInfo);

  const moonRiseSetInfo = document.createElement("div");
  const moonRise = document.createElement("p");
  moonRise.innerText = data.astro.moonrise;
  moonRiseSetInfo.appendChild(moonRise);
  const moonSet = document.createElement("p");
  moonSet.innerText = data.astro.moonset;
  moonRiseSetInfo.appendChild(moonSet);
  basicInfo.appendChild(moonRiseSetInfo);

  informationDiv.appendChild(basicInfo);
  return informationDiv;
}

export { getPage };
