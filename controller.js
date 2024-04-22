import * as httpService from "./service.js"
import { renderData } from "./render.js";

export const provideData = async (cityInput) => {
    const forecast = await httpService.getForecast(cityInput);
    const current = await httpService.getCurrentWeather(cityInput);

    console.log('forecast', forecast);
    console.log('current', current)
    renderData(forecast, current);
}