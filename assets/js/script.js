var apiKey = 'c6131f59ee081d22e22aae67aa4ed7ac';
var city = 'Atlanta';
var display;
var weatherData;
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=10&lon=10&appid=" + apiKey;

fetch(queryURL, {
    method: 'GET', //GET is the default.
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
});