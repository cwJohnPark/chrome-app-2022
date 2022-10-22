const API_KEY = "4f1649834b7d891992d9b552dbd0d480";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

function getApiUrl(lat, lon) {
  return `${API_URL}?units=metric&lat=${lat}&lon=${lon}&APPID=${API_KEY}`;
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const apiUrl = getApiUrl(lat, lon);

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const city = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      paintWeather(city, weather, temp);
    });
}

function onGeoError() {
  alert("Can't find you. No weather service for you.");
}

const currentPosition = navigator.geolocation.getCurrentPosition(
  onGeoOk,
  onGeoError
);

function paintWeather(city, weather, temp) {
  const cityNode = document.querySelector("#weather span:first-child");
  const weatherNode = document.querySelector("#weather span:last-child");
  cityNode.innerText = city;
  weatherNode.innerText = `${weather} / ${temp} °C`;
}
