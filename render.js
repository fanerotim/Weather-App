//renders data
export function renderData(forecast, current) {

    // let hourlyForecast = forecast.forecast.forecastday[0].hour;
    // let hourUl = document.querySelector('.hourly-forecast');

    // CONDITION
    let condition = document.querySelector('.condition');
    condition.textContent = current.current.condition.text;
    
    // DATE-TIME
    const dateEl = document.querySelector('.date');
    const date = new Date(current.location.localtime).toUTCString().replace('GMT', '').substring(0, 17)
    
    const timeEl = document.querySelector('.time');
    const time = current.location.localtime.split(' ')[1];
    
    dateEl.textContent = date;
    timeEl.textContent = time;

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