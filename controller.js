import * as httpService from "./service.js"
import { renderData } from "./render.js";

import { handleTest } from "./views/test.js";

export const provideData = async (cityInput) => {
    const forecast = await httpService.getForecast(cityInput);
    const current = await httpService.getCurrentWeather(cityInput);

    renderData(forecast, current);

    handleTest(forecast)
}