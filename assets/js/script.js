var apiKey = 'c6131f59ee081d22e22aae67aa4ed7ac';
var display;
var weatherData;
var data;
var currentTime;
var timeOne;
var timeTwo;
var timeThree;
var timeFour;
var timeFive;
var city = 'Dallas';

var locationDate = document.getElementById("location-date");
var currentImg = document.getElementById("img-current");
var currentTemp = document.getElementById("temp-current");
var currentWind = document.getElementById("wind-current");
var currentHumidity = document.getElementById("humidity-current");



// get the future forecast of a location
var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;

// get the current weather of a location
var currentURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&" + city + "&lat=32.7668&lon=-96.7836&appid=" + apiKey;


fetch(forecastURL, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    
});

fetch(currentURL, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(function (response) {
    return response.json();
})
.then(function (data) {
    weatherData = data
    console.log(weatherData);
    locationDate.textContent = weatherData.name;
    currentImg.textContent = weatherData.name;

});

var currentImg = document.getElementById("current-img");
var currentTemp = document.getElementById("current-temp");
var currentWind = document.getElementById("current-wind");
var currentHumidity = document.getElementById("current-humidity");
