const API_KEY = "b953e4213199662a18d4e7fb2b01b624";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    // ???
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText= data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp} 도`;
    });
}

function onGeoError(){
    alert("Can't find you.... No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);