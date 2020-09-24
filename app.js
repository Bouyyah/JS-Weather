
//Selectors
let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');
let weatherIcon = document.querySelector('.weather-icon');
let weatherVid = document.querySelector('.myVideo');
let cityName = document.querySelector('.form__input');

//Events
window.addEventListener('load', ()=>{   
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=2ed11c3acc76352a0ab2e352108a89e9`;
            
            loadData(api);                   
       });
    }
});

cityName.addEventListener('change', ()=>{
    const name = cityName.value;
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=2ed11c3acc76352a0ab2e352108a89e9`;
    loadData(api);
});

//functions

//function to get data to dom element
function loadData(api){
   
    fetch(api)
    .then(response =>{
        return response.json();
    })
    .then(data=>{
        const description = data.weather[0].description;

        temperatureDegree.textContent = data.main.temp;
        temperatureDescription.textContent = description;
        locationTimezone.textContent = data.name;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        
        if (description.includes("clear")) {
            weatherVid.src = "./videos/clearSky.mp4";
        }else if (description.includes("clouds")) {
            weatherVid.src = "./videos/Clouds.mp4";
        }else if (description.includes("rain")) {
            weatherVid.src = "./videos/Rain.mp4";
        }else if (description.includes("thunderstorm")) {
            weatherVid.src = "./videos/Thunder.mp4";
        } else {
            document.body.style.backgroundColor = "blue";
        }
    });
}