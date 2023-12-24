async function callAPI() {
  const baseURL = "http://api.weatherapi.com/v1";
  const forecastEndPoint = "/forecast.json";
  const API_KEY = "e398109b80054ea6904155405232312";

  const res = await fetch(
    `${baseURL}${forecastEndPoint}?key=${API_KEY}&q=delhi&days=3`,
  );

  const json = await res.json();

  return json;
}

export { callAPI };
