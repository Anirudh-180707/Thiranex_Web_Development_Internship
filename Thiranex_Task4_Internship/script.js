const apiKey = "42500acfc85e6e8cb298005e4be4b452";

const citySelect = document.getElementById("citySelect");
const searchBtn = document.getElementById("searchBtn");
const weatherContainer = document.getElementById("weatherContainer");

async function fetchWeather(city){

    weatherContainer.innerHTML =
    `<div class="loading">Loading weather data...</div>`;

    try{

        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if(!response.ok){
            throw new Error("Unable to fetch weather data.");
        }

        const data = await response.json();

        displayWeather(data);

    }
    catch(error){

        weatherContainer.innerHTML = `
        <div class="error">
            ${error.message}
        </div>
        `;
    }
}

function displayWeather(data){

    weatherContainer.innerHTML = `
    <div class="weather-card">

        <h2>${data.name}, ${data.sys.country}</h2>

        <img
        src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
        alt="Weather Icon">

        <h3>${data.weather[0].description}</h3>

        <div class="weather-info">

            <div class="box">
                <h3>🌡 Temperature</h3>
                <p>${data.main.temp} °C</p>
            </div>

            <div class="box">
                <h3>💧 Humidity</h3>
                <p>${data.main.humidity}%</p>
            </div>

            <div class="box">
                <h3>💨 Wind Speed</h3>
                <p>${data.wind.speed} m/s</p>
            </div>

            <div class="box">
                <h3>📍 Location</h3>
                <p>${data.name}</p>
            </div>

        </div>

    </div>
    `;
}

searchBtn.addEventListener("click", () => {

    const city = citySelect.value;

    if(city){
        fetchWeather(city);
    }
});

fetchWeather("Chennai");