var apiKey = 'c6131f59ee081d22e22aae67aa4ed7ac';
var city = 'Atlanta';
var display;
var weatherData;
var data;
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=10&lon=10&appid=" + apiKey;


fetch(queryURL, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))