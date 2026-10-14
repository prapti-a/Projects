const form = document.getElementById("weather-form");
const city = document.getElementById("city");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature"); 
const condition = document.getElementById("condition"); 
const weatherIcon = document.getElementById("weatherIcon"); 
const humidity = document.getElementById("humidity"); 
const windSpeed = document.getElementById("windSpeed"); 
const localTime = document.getElementById("localTime"); 
const message = document.getElementById("message");
const card = document.querySelector(".weatherDetails");
const countryCode = document.getElementById("countryCode");

const weatherData = {
    paris:{
        cityName: "Paris",
        temp: "9", 
        condition: "light intensity drizzle", 
        region: "FR", 
        cn_fullname: "France",
        time: "10:30 AM",
        humidity: "65%",
        air_speed: "12 km/h",
        weather_icon: "-"
    }, 

    sydney: {
        cityName: "Sydney",
        temp: "15",
        condition: "clear sky",
        region: "AU",
        cn_fullname: "Australia",
        time: "6:30 PM",
        humidity: "52%",
        air_speed: "10 km/h",
        weather_icon: "-"
    },

    newyork: {
        cityName: "New York City",
        temp: "1",
        condition: "gloomy",
        region: "US",
        cn_fullname: "United States",
        time: "5:30 AM",
        humidity: "70%",
        air_speed: "15 km/h",
        weather_icon: "-"
    },

    barcelona: {
        cityName: "Barcelona",
        temp: "22",
        condition: "few clouds",
        region: "ES",
        cn_fullname: "Spain",
        time: "10:30 AM",
        humidity: "58%",
        air_speed: "9 km/h",
        weather_icon: "-"
    },

    pokhara: {
         cityName: "Pokhara",
        temp: "24",
        condition: "partly cloudy",
        region: "NP",
        cn_fullname: "Nepal",
        time: "2:15 PM",
        humidity: "60%",
        air_speed: "8 km/h",
        weather_icon: "-"
    },

    rio: {
         cityName: "Rio de Janerio",
        temp: "29",
        condition: "scattered clouds",
        region: "BR",
        cn_fullname: "Brazil",
        time: "6:30 AM",
        humidity: "68%",
        air_speed: "11 km/h",
        weather_icon: "-"
    },

    losangeles: {
         cityName: "Los Angeles",
        temp: "26",
        condition: "clear sky",
        region: "US",
        cn_fullname: "United States",
        time: "2:30 AM",
        humidity: "45%",
        air_speed: "7 km/h",
        weather_icon: "-"
    },

    amsterdam: {
         cityName: "Amsterdam",
        temp: "11",
        condition: "overcast clouds",
        region: "NL",
        cn_fullname: "Netherlands",
        time: "10:30 AM",
        humidity: "73%",
        air_speed: "14 km/h",
        weather_icon: "-"
    },
    tokyo: {
         cityName: "Tokyo",
        temp: "19",
        condition: "light rain",
        region: "JP",
        cn_fullname: "Japan",
        time: "5:30 PM",
        humidity: "76%",
        air_speed: "13 km/h",
        weather_icon: "-"
    },

    milan: {
         cityName: "Milan",
        temp: "17",
        condition: "broken clouds",
        region: "IT",
        cn_fullname: "Italy",
        time: "10:30 AM",
        humidity: "62%",
        air_speed: "9 km/h",
        weather_icon: "-"
        }

    
} 

function searchCity() {
    const cityValue = city.value.trim().toLowerCase().replaceAll(" ","");
    const weather = weatherData[cityValue];

     if(weather){
        card.style.display = "block";

        cityName.textContent = weather.cityName;
        countryCode.textContent = weather.region;

        temperature.textContent = weather.temp + "°C";
        condition.textContent = weather.condition;
        weatherIcon.textContent = weather.weather_icon;
        humidity.textContent = weather.humidity;
        windSpeed.textContent = weather.air_speed;
        localTime.textContent = weather.time;
        countryCode.textContent = weather.region;

        message.textContent="";
     }
     else  {
        card.style.display = "none";

        message.textContent = "Sorry, weather data isn't available for this city.";
     }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    searchCity();
});





