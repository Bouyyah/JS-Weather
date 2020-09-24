//events
window.addEventListener('load', ()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2ed11c3acc76352a0ab2e352108a89e9`;
            
                    
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data=>{
                console.log(data);
            })
        });
    }
})