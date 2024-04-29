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
}