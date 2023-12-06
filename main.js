const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0d25d16d3dmsh9a3bdde1d4ddc48p1088bbjsn6f2f2522f500",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= " + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      temp.innerHTML = response.temp;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      humidity.innerHTML = response.humidity;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees = response.wind_degrees;
    });
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Delhi");
