export const imageFinder = (nextHoursForecast) => {
    return nextHoursForecast.map(forecast => forecast.condition.text.toLowerCase().trim());
}