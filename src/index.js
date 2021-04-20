let now = new Date();

let h2 = document.querySelector("h2");
let date = now.getDate();
let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let year = now.getFullYear();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

h2.innerHTML = `${day}, ${month} ${date}, ${year}, ${hours}:${minutes}`;

function formatDay(timestamp){
  let date = new Date (timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  return days[day];
}

function displayForecast(response){
let forecast = response.data.daily;

let forecastElement = document.querySelector("#forecast");

let forecastHTML = `<div class= "row">`;
forecastElement.forEach(function (forecastDay, index){

if (index < 6) {

  forecastHTML =
    forcastHTML + 
  `
   <div class="rows">
     <div class="col-2">
       <div class="weather-forcast-date">${formatDay}${forecastDay.dt}</div>
      
       <img
         src="https://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png"
         alt=""
         width="42"
       />
       <div class="weather-forecast-temperature">
         <span class="weather-forecast-max">${Math.round(forcast.temp.max)}°
         </span>
         <span class="weather-forecast-min">${Math.round(forcast.temp.min)}°</span>
       </div>
     </div>
   </div>`);
}
}

function displayWeatherNow(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = response.data.main.temp;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
}



function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let apiKey = "4965d06b98f571e5178fcdd155827c21";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherNow);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
