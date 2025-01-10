burger = document.querySelector(".burger");
navBar = document.querySelector(".navBar");
navContent = document.querySelector(".navContent");

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

const getWeather = async (city) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=c72e92899ff44dfcada65931250801&q=${city}&aqi=no`
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

submit.addEventListener("click", (event) => {
  event.preventDefault();
  getWeather(city.value);
});

getWeather('kharagpur');

// const getWthr = async (city) => {
//   const url = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e759ca0fdd00586c182d3d799fd57ab5`
//   );
//   const data = await url.json();
//   console.log(data.sys);

//   const sunriseTimestamp = data.sys.sunrise;
//   const sunsetTimestamp = data.sys.sunset;
//   const sunrise = new Date(sunriseTimestamp * 1000).toLocaleTimeString();
//   const sunset = new Date(sunsetTimestamp * 1000).toLocaleTimeString();

//   document.getElementById("sunr").innerHTML = `Sunrise: ${sunrise}`;
//   document.getElementById("suns").innerHTML = `Sunset: ${sunset}`;
// };

// submit.addEventListener("click", (event1) => {
//   event1.preventDefault();
//   getWthr(city.value);
// });

getWthr('kharagpur');