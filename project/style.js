// let weather = {
//     apiKey: "2cc8dfa4dcd393dd0c8cabd2ce07140e",
//     fetchWeather: function () {
//         fetch(
//           "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + appid
//         ).then((response) => response.json()).then((data) => console.log(data))
//     },
// }
let weather = {
  apiKey: "2cc8dfa4dcd393dd0c8cabd2ce07140e",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="+ city +
      "&units=metric&appid=" + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
},
  displayWeather: function(data){
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { country  } = data.sys;
    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = temp + "°C"
    document.querySelector(".humidity").innerHTML = "Humidity:‎ ‎‎‎  ‎" + + humidity + "%";
    document.querySelector(".wind").innerHTML = "Windspeed: ‎‎‎  ‎" + speed + "km/h";
    document.querySelector(".country").innerHTML = ", " + country
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);

  }
};

  document.querySelector(".search").addEventListener("click", function () {
    weather.search();
  })

  document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

  weather.fetchWeather("Hanoi")