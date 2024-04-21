//renders data
export function renderData(forecast, current) {
    let city = document.getElementById('city');
    city.textContent = current.location.name;

    //clear input after user provides data
    let input = document.querySelector('input');
    input.value = '';

    let hourlyForecast = forecast.forecast.forecastday[0].hour;
    let hourUl = document.querySelector('.hour');
    
    for (let i = 0; i < hourUl.children.length; i++) {
        hourUl.children[i].textContent = `${hourlyForecast[i].time} - ${hourlyForecast[i].temp_c}c`
    }
}