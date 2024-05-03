import * as httpService from "./service.js"
import { renderData } from "./render.js";
import { imageFinder } from "./utils/imageFinder.js";
import { windFinder } from "./utils/windFinder.js";
import { backgroundImageProvider } from "./utils/backgroundImageProvider.js";

import {hourlyTemp} from "./views/hourlyTemperature.js"
import { userForm } from "./views/userForm.js";

export const provideData = async (cityInput) => {
    const forecast = await httpService.getForecast(cityInput);
    const current = await httpService.getCurrentWeather(cityInput);

    renderData(forecast, current);
    backgroundImageProvider(current);

    // HOURLY TEMPERATURE FEATURE CODE BELOW
    // getting the forecast only for the next hours (excluding prior hours)
    const currentTime = forecast.current.last_updated;
    const hourlyForecast = forecast.forecast.forecastday[0].hour;
    
    let nextHoursForecast = hourlyForecast
    .filter((date, i) => date.time >= currentTime)

    // as the API returns weather up to 23:00, I need to get next day forecast and add it to the 'nextHoursForecast' to avoid showing weather up to 23:00 only 
    if (nextHoursForecast.length < 6) {
        let nextDayForecast = forecast.forecast.forecastday[1].hour
        nextDayForecast.map(forecast => nextHoursForecast.push(forecast))
    }

    //returns an array of weather conditions as string
    const conditions = imageFinder(nextHoursForecast.slice(0, 6));
    hourlyTemp(nextHoursForecast.slice(0, 6), conditions)
    // END OF HOURLY TEMPERATURE CODE


    // USER FORM CODE BELOW
    //returns the direction of the wind as string
    const windDirection = windFinder(forecast);
    userForm(forecast, windDirection);
    // END OF USER FORM CODE
    
}