import * as httpService from "./service.js"
import { renderData } from "./render.js";
import { imageFinder } from "./utils/imageFinder.js";
import { windFinder } from "./utils/windFinder.js";
import { backgroundImageProvider } from "./utils/backgroundImageProvider.js";
import { hourlyTemp } from "./views/hourlyTemperature.js"
import { userForm } from "./views/userForm.js";
import { WEATHER_CARD_COUNT } from "./constants.js";

export const provideData = async (cityInput) => {

    try {
        const forecast = await httpService.getForecast(cityInput);
        const currentWeatherData = await httpService.getCurrentWeather(cityInput);
        renderData(forecast, currentWeatherData);
        backgroundImageProvider(currentWeatherData);

        // HOURLY TEMPERATURE FEATURE CODE BELOW
        // getting the forecast only for the next hours (excluding prior hours)
        const currentTime = forecast.current.last_updated;
        const hourlyForecast = forecast.forecast.forecastday[0].hour;

        let nextHoursForecast = hourlyForecast
            .filter((date) => date.time >= currentTime)

        // as the API returns weather up to 23:00, I need to get next day forecast and add it to the 'nextHoursForecast' to avoid showing weather up to 23:00 only 
        if (nextHoursForecast.length < WEATHER_CARD_COUNT) {
            let nextDayForecast = forecast.forecast.forecastday[1].hour
            nextDayForecast.map(forecast => nextHoursForecast.push(forecast))
        }

        //returns an array of weather conditions as string
        const weatherconditions = imageFinder(nextHoursForecast.slice(0, WEATHER_CARD_COUNT));
        hourlyTemp(nextHoursForecast.slice(0, WEATHER_CARD_COUNT), weatherconditions)

        //returns the direction of the wind as string
        const windDirection = windFinder(forecast);
        userForm(forecast, windDirection);
    } catch (error) {
        console.error(error);
        // TODO: Show error message to the user
        throw error; // TODO: do not throw the error as it will not be handled in index.js, handle it here.
    }
}