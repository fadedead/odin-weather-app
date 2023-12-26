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
  const infoDivArr = [];
  let infoDivIndex = 0;

  forecastArr.forEach((value, key) => {
    const basicInfo = getBasicInfo(value);
    basicInfo.classList = "hide-div";
    if (key == 1) {
      basicInfo.classList = "show-div";
    }
    forecastContainer.appendChild(basicInfo);

    infoDivArr.push(basicInfo);
  });

  sliderLeft.addEventListener("click", () => {
    if (infoDivIndex > 0) {
      infoDivArr[infoDivIndex].classList = "hide-div";
      infoDivArr[infoDivIndex - 1].classList = "show-div";

      infoDivIndex -= 1;
    }
  });
  sliderRight.addEventListener("click", () => {
    if (infoDivIndex < infoDivArr.length - 1) {
      infoDivArr[infoDivIndex].classList = "hide-div";
      infoDivArr[infoDivIndex + 1].classList = "show-div";
      infoDivIndex += 1;
    }
  });
}

function getBasicInfo(data) {
  const informationDiv = document.createElement("div");

  const currDateContainer = document.createElement("div");
  currDateContainer.classList.add("curr-date");
  const currDate = document.createElement("p");
  currDate.innerText = data.date.split("-").reverse().join("-");
  currDateContainer.appendChild(currDate);
  informationDiv.appendChild(currDateContainer);

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

  const tempInfo = document.createElement("div");
  const temp = document.createElement("p");
  temp.innerText = `temperature: ${data.day.avgtemp_c}\xB0C`;
  tempInfo.appendChild(temp);
  const humidity = document.createElement("p");
  humidity.innerText = `humidity: ${data.day.avghumidity}%`;
  tempInfo.appendChild(humidity);
  basicInfo.appendChild(tempInfo);

  const sunRiseSetInfo = document.createElement("div");
  const sunRise = document.createElement("p");
  sunRise.innerText = `sunrise: ${data.astro.sunrise}`;
  sunRiseSetInfo.appendChild(sunRise);
  const sunSet = document.createElement("p");
  sunSet.innerText = `sunset: ${data.astro.sunset}`;
  sunRiseSetInfo.appendChild(sunSet);
  basicInfo.appendChild(sunRiseSetInfo);

  const moonRiseSetInfo = document.createElement("div");
  const moonRise = document.createElement("p");
  moonRise.innerText = `moonrise: ${data.astro.moonrise}`;
  moonRiseSetInfo.appendChild(moonRise);
  const moonSet = document.createElement("p");
  moonSet.innerText = `moonset: ${data.astro.moonset}`;
  moonRiseSetInfo.appendChild(moonSet);
  basicInfo.appendChild(moonRiseSetInfo);

  informationDiv.appendChild(basicInfo);

  const hourlyInfo = getHourlyInfo(data);
  informationDiv.appendChild(hourlyInfo);

  return informationDiv;
}

function getHourlyInfo(data) {
  const hourly = document.createElement("div");
  hourly.classList.add("hourly-info");
  for (let day of data.hour) {
    const div = document.createElement("div");
    div.classList.add("each-hour");
    const hour = document.createElement("p");
    hour.innerText = day.time.split(" ")[1];
    div.appendChild(hour);
    const temp = document.createElement("p");
    temp.innerText = `${Math.round(day.temp_c)}\xB0C`;
    div.appendChild(temp);
    hourly.appendChild(div);
  }
  return hourly;
}
export { getPage };
