import * as httpService from "./service.js"
import { renderData } from "./render.js";
import { imageFinder } from "./utils/imageFinder.js";

import {hourlyTemp} from "./views/hourlyTemperature.js"

export const provideData = async (cityInput) => {
    const forecast = await httpService.getForecast(cityInput);
    const current = await httpService.getCurrentWeather(cityInput);

    renderData(forecast, current);

    // getting the forecast only  for the next hours (excluding prior hours)
    const currentTime = forecast.current.last_updated;
    const hourlyForecast = forecast.forecast.forecastday[0].hour;
    let nextHoursForecast = hourlyForecast
    .filter((date, i) => date.time > currentTime && i % 2 === 1)

    const conditions = imageFinder(nextHoursForecast.slice(0, 6));

    console.log('conditions', conditions)
    hourlyTemp(nextHoursForecast.slice(0, 6), conditions)
}