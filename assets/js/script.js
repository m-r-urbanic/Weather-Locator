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


// define all buttons as variables
var searchBtn = document.querySelector("#search-button");
var atlBtn = document.querySelector("#atlanta-button");
var denBtn = document.querySelector("#denver-button");
var seaBtn = document.querySelector("#seattle-button");
var sanBtn = document.querySelector("#san-fransico-button");
var orlBtn = document.querySelector("#orlando-button");
var nyBtn = document.querySelector("#new-york-button");
var chiBtn = document.querySelector("#chicago-button");
var ausBtn = document.querySelector("#austin-button");

// define the top section variables
var locationDate = document.getElementById("location-date");
var currentImg = document.getElementById("img-current");
var currentTemp = document.getElementById("temp-current");
var currentWind = document.getElementById("wind-current");
var currentHumidity = document.getElementById("humidity-current");

// day 1 variables
var dayOne = document.getElementById("date-1");
var imgOne = document.getElementById("img-1");
var tempOne = document.getElementById("temp-1");
var windOne = document.getElementById("wind-1");
var humidityOne = document.getElementById("humidity-1");

// day 2 variables
var dayTwo = document.getElementById("date-2");
var imgTwo = document.getElementById("img-2");
var tempTwo = document.getElementById("temp-2");
var windTwo = document.getElementById("wind-2");
var humidityTwo = document.getElementById("humidity-2");

// day 3 variables
var dayThree = document.getElementById("date-3");
var imgThree = document.getElementById("img-3");
var tempThree = document.getElementById("temp-3");
var windThree = document.getElementById("wind-3");
var humidityThree = document.getElementById("humidity-3");

// day 4 variables
var dayFour = document.getElementById("date-4");
var imgFour = document.getElementById("img-4");
var tempFour = document.getElementById("temp-4");
var windFour = document.getElementById("wind-4");
var humidityFour = document.getElementById("humidity-4");

// day 5 variables
var dayFive = document.getElementById("date-5");
var imgFive = document.getElementById("img-5");
var tempFive = document.getElementById("temp-5");
var windFive = document.getElementById("wind-5");
var humidityFive = document.getElementById("humidity-5");

// get the future forecast of a location
var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "units=imperial";

// get the current weather of a location
var currentURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&" + city + "&lat=32.7668&lon=-96.7836&appid=" + apiKey;

var searchBtn = document.querySelector("#search-button");
var atlBtn = document.querySelector("#atlanta-button");
var denBtn = document.querySelector("#denver-button");
var seaBtn = document.querySelector("#seattle-button");
var sanBtn = document.querySelector("#san-fransico-button");
var orlBtn = document.querySelector("#orlando-button");
var nyBtn = document.querySelector("#new-york-button");
var chiBtn = document.querySelector("#chicago-button");
var ausBtn = document.querySelector("#austin-button");

function setAtl(){
 city = 'Atlanta'
}

//
atlBtn.addEventListener("click", setAtl);
console.log(city);


// get the url for the forcast, this is used for the five future weather sections
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
    weatherData = data
    console.log(data);
    dayOne.textContent = weatherData.list[0].dt_text;
    imgOne.textContent = "current weather " + weatherData.list[0].weather[0].description;
    tempOne.textContent = weatherData.list[0].main.temp + " Degrees";
    windOne.textContent = weatherData.list[0].wind.speed + " MPH";
    humidityOne.textContent = weatherData.list[0].main.humidity + "% humidity";

    dayTwo.textContent = weatherData.list[1].dt_text;
    imgTwo.textContent = "current weather " + weatherData.list[1].weather[0].description;
    tempTwo.textContent = weatherData.list[1].main.temp + " Degrees";
    windTwo.textContent = weatherData.list[1].wind.speed + " MPH";
    humidityTwo.textContent = weatherData.list[1].main.humidity + "% humidity";

    dayThree.textContent = weatherData.list[2].dt_text;
    imgThree.textContent = "current weather " + weatherData.list[2].weather[0].description;
    tempThree.textContent = weatherData.list[2].main.temp + " Degrees";
    windThree.textContent = weatherData.list[2].wind.speed + " MPH";
    humidityThree.textContent = weatherData.list[2].main.humidity + "% humidity";

    dayFour.textContent = weatherData.list[3].dt_text;
    imgFour.textContent = "current weather " + weatherData.list[3].weather[0].description;
    tempFour.textContent = weatherData.list[3].main.temp + " Degrees";
    windFour.textContent = weatherData.list[3].wind.speed + " MPH";
    humidityFour.textContent = weatherData.list[3].main.humidity + "% humidity";

    dayFive.textContent = weatherData.list[4].dt_text;
    imgFive.textContent = "current weather " + weatherData.list[4].weather[0].description;
    tempFive.textContent = weatherData.list[4].main.temp + " Degrees";
    windFive.textContent = weatherData.list[4].wind.speed + " MPH";
    humidityFive.textContent = weatherData.list[4].main.humidity + "% humidity";
});



//Fetch the data for the current day
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
    currentImg.textContent = "current weather " + weatherData.weather[0].description;
    currentTemp.textContent = weatherData.main.temp + " Degrees";
    currentWind.textContent = weatherData.wind.speed + " MPH";
    currentHumidity.textContent = weatherData.main.humidity + "% humidity";
});
