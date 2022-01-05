const InputSearch = document.querySelector('.search-input');
const APP_ID = '77735331ea2eff47b16232b79d4d4dc0';
const DEFAULT_VALUE = '--';
const cityName = document.querySelector('.city-name');
const cityStatus = document.querySelector('.city-status');
const ImgWeather = document.querySelector('.img-weather');
const Temperature = document.querySelector('.temperature');
const Sunrise = document.querySelector('.sunrise');
const Sunset = document.querySelector('.sunset');
const Humidity = document.querySelector('.humidity');
const Wind = document.querySelector('.wind');
InputSearch.addEventListener('change', function(e) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
        .then(async res => {
            const data = await res.json();
            console.log(data);
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            cityStatus.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            ImgWeather.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            Temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
            Sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm');
            Sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm');
            Wind.innerHTML = data.wind.speed + " km/h" || DEFAULT_VALUE;
            Humidity.innerHTML = data.main.humidity + "%";
        })
})