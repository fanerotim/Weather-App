//renders data
export function renderData(forecast, current) {

    // let hourlyForecast = forecast.forecast.forecastday[0].hour;
    // let hourUl = document.querySelector('.hourly-forecast');

    // CONDITION
    let condition = document.querySelector('.condition');
    condition.textContent = current.current.condition.text;
    
    // DATE-TIME
    let dateTime = document.querySelector('.date-time');
    dateTime.textContent = current.location.localtime;

    //TEMPERATURE
    let tempetarure = document.querySelector('.temperature');
    tempetarure.textContent = `${current.current.temp_c}°C`

    //WIND
    let wind = document.querySelector('.wind');
    wind.textContent = `${current.current.wind_kph} km/h`

    // for (let i = 0; i < hourUl.children.length; i++) {
    //     hourUl.children[i].textContent = `${hourlyForecast[i].time} - ${hourlyForecast[i].temp_c}c`
    // }
}