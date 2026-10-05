//renders data
export function renderData(forecast, current) {
    // TODO: Validate and remove this code as it is not used anymore.
    // let hourlyForecast = forecast.forecast.forecastday[0].hour;
    // let hourUl = document.querySelector('.hourly-forecast');

    // CONDITION
    let conditionElem = document.querySelector('.condition');
    conditionElem.textContent = current.current.condition.text;
    
    // DATE-TIME
    const dateElem = document.querySelector('.date');
    const date = new Date(current.location.localtime).toUTCString().replace('GMT', '').substring(0, 17)
    
    const timeElem = document.querySelector('.time');
    const time = current.location.localtime.split(' ')[1];
    
    dateElem.textContent = date;
    timeElem.textContent = time;
}