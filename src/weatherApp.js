const baseURL = "http://api.weatherapi.com/v1";
const forecastEndPoint = "/forecast.json";
const API_KEY = "e398109b80054ea6904155405232312";

async function callAPI() {
  const res = await fetch(
    `${baseURL}${forecastEndPoint}?key=${API_KEY}&q=tokyo&days=3`,
  );

  const json = await res.json();

  return json;
}

async function apiQuery(city) {
  try {
    const res = await fetch(
      `${baseURL}${forecastEndPoint}?key=${API_KEY}&q=${city}&days=3`,
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const json = await res.json();

    return json;
  } catch (e) {
    console.log("Request failed");
    return Promise.reject("City not found");
  }
}
export { callAPI, apiQuery };
