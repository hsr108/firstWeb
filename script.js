const burger = document.querySelector(".burger");
const navBar = document.querySelector(".navBar");
const navContent = document.querySelector(".navContent");
const input = document.getElementById("city"); 

burger.addEventListener("click", () => {
  navContent.classList.toggle("visibPhone");
  navBar.classList.toggle("hNavPhone");
});

const date = document.querySelector(".btnSmall");
function currDate() {
  const d = new Date();
  const fullDate = `${String(d.getDate()).padStart(2, "0")}/${String(
    d.getMonth() + 1
  ).padStart(2, "0")}/${d.getFullYear()}`;
  document.getElementById("currentDate").innerHTML = fullDate;
}
date.addEventListener("click", currDate);
currDate()

const getWeather = async (city) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=c72e92899ff44dfcada65931250801&q=${city}&aqi=no`
  );

  const data = await response.json();

  document.getElementById(
    "region"
  ).innerHTML = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
  document.getElementById(
    "temper"
  ).innerHTML = `Temperature: ${data.current.temp_c} °C`;
  document.getElementById(
    "humid"
  ).innerHTML = `Humidity: ${data.current.humidity}%`;
  document.getElementById(
    "windSpd"
  ).innerHTML = `Wind Speed: ${data.current.wind_kph} kph`;
};

const getData = (city) => {
  getWeather(city.value);
  getWthr(city.value);
}

submit.addEventListener("click", (event) => {
  event.preventDefault();
  getData(city);
});

input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    getData(city);
  }
})

getWeather('kharagpur');

const getWthr = async (city) => {
  const url = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e759ca0fdd00586c182d3d799fd57ab5`
  );
  const data = await url.json();
  console.log(data.sys);

  const sunriseTimestamp = data.sys.sunrise;
  const sunsetTimestamp = data.sys.sunset;
  const sunrise = new Date(sunriseTimestamp * 1000).toLocaleTimeString();
  const sunset = new Date(sunsetTimestamp * 1000).toLocaleTimeString();

  document.getElementById("sunr").innerHTML = `Sunrise: ${sunrise}`;
  document.getElementById("suns").innerHTML = `Sunset: ${sunset}`;
};


getWthr('kharagpur');