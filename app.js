
window.addEventListener('load', ()=>{
    
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let weatherIcon = document.querySelector('.weather-icon');
    
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=2ed11c3acc76352a0ab2e352108a89e9`;
            
                    
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data=>{
                console.log(data, data.main.temp);

                temperatureDegree.textContent = data.main.temp;
                temperatureDescription.textContent = data.weather[0].description;
                locationTimezone.textContent = data.name;
                weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            })
        });
    }
})