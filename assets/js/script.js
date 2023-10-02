var apiKey = 'c6131f59ee081d22e22aae67aa4ed7ac';
var city = 'Atlanta';
var display;
var weatherData;
var data;
var city = 'Dallas'

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
    console.log(data);
    
});
